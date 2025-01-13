import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import sign1 from "../assets/img/sign1.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <a href="#home" style={{ textDecoration: 'none' }}><p style={{ color: 'white', fontSize: '50px', fontWeight: 800, paddingTop: '10px', opacity: 0.95 }}>Sachin Pandey</p></a>
            <img src={sign1} style={{position: "absolute", bottom: "-16px", left: "600px", width: "242px", height: "242px"}} />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/me-sachin-pandey" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100043741883945" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="#" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
