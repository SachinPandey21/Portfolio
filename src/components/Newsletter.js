import { useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!email && email.indexOf("@") == -1){
      setStatus({ type: "error", message: 'Please enter a valid email address'});
      return;
    }
    setStatus({type: "sending", message: '' });
    try{
      await addDoc(collection(db, "subscribers"), {
        email
      });
      setEmail("");
      setStatus({ type: "success", message: 'Message sent successfully'});
    } catch (e) {
      console.error("Error adding document: ", e);
      setStatus({ type: "error", message: 'Something went wrong, please try again later.'});
    }
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp d-flex justify-content-center align-items-center">
            <div className="newsletter-item-1">
              <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
              {status.type === 'sending' && <Alert>Sending...</Alert>}
              {status.type === 'error' && <Alert variant="danger">{status.message}</Alert>}
              {status.type === 'success' && <Alert variant="success">{status.message}</Alert>}
            </div>
            <div className="newsletter-item-2">
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
        </div>
      </Col>
  )
}
