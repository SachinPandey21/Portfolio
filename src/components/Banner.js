import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg'
import { useState, useEffect } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Web Developer', 'Web Designer', 'React Developer', 'Java Developer', 'Python Enthusiast', 'PHP Skilled', 'C/C++ Skilled'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{`Hi, I'm Sachin Pandey `} <span className="wrap">{text}</span></h1>
                                    <p>I enjoy creating things that live on the internet. My interest in web development started back in 2022. A motivated and ambitious individual pursuing a Bachelor’s degree in Computer Science from Maharishi Dayanand University, specializing in
                                        web development. Skilled in Java programming and website building, I am dedicated to expanding my knowledge and expertise in the field.
                                        With a strong passion for coding and problem-solving, I am eager to contribute my skills to a dynamic organization that values innovation and
                                        excellence in web development.
                                    </p>
                                    {/* <button onClick={() => console.log('connect')}>Let’s Connect</button><ArrowRightCircle size={25} /> */}
                                    <a style={{ textDecoration: 'none' }} href='https://www.linkedin.com/in/me-sachin-pandey' target='_blank'><button className='vvd' onClick={() => console.log('connect')}>Let's Connect<ArrowRightCircle size={25} /></button></a>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}