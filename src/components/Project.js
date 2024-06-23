import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import fps from "../assets/img/fps.jpg";  
import gurukul1 from "../assets/img/gurukul1.png";
import faceDetection from "../assets/img/faceDetection.png";
import news from "../assets/img/news.png";
import spotify1 from "../assets/img/spotify1.jpg";
import cricket from "../assets/img/cricket.png";    
import Restaurant from "../assets/img/Restaurant.png"
import learning from "../assets/img/learning.png"

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Project = () => {

    const projects = [
        {
            title: "FPS Game",
            description: "This project is completely built on technologies like Unity and C#.",
            imgUrl: fps,
        },
        {
            title: "E-Gurukul Website",
            description: "Online teaching platform using HTML, CSS, JavaScript, SCSS, React; visualizes DSA, algorithms, and sorting problems.",
            imgUrl: gurukul1,
        },
        {
            title: "News Analyzer",
            description: "Python project for analyzing news websites through web scraping, performing sentiment analysis, and providing real-time sentiment insights from news.",
            imgUrl: news,
        },
        {
            title: "Spotify Clone",
            description: "This project is built using REACT. This is a clone of the well known Spotify application.",
            imgUrl: spotify1,
        },
        {
            title: "DS-Cricket Analysis ",
            description: "Python project for analyzing cricket websites, using web scraping for real-time scores and producing score-based visualizations and insights.",
            imgUrl: cricket,
        },
        {
            title: "Face Detection",
            description: "Python project for face detection, using camera to mark faces with green boxes.",
            imgUrl: faceDetection,
        },
        
    ];

    const projects1 =[
        {
            title: "Restaurant Management System",
            description: "C language project demonstrating a restaurant management system, using DSA for order taking, billing, and other functionalities.",
            imgUrl: Restaurant,
        },
        {
            title: "Learning Website",
            description: "HTML and CSS project creating a virtual portal for an educational institute, serving as its online presence.",
            imgUrl: learning,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                    <h2>Projects</h2>
                                    <p style={{textAlign: "justify"}} className="d-flex flex-column align-items-center">Welcome to the Projects section of my portfolio. Here, you'll find a curated selection of the most significant projects I have undertaken during my academic journey and personal endeavors in computer science. These projects demonstrate my proficiency in various programming languages, my understanding of computer science principles, and my ability to solve complex problems through innovative solutions. Each project highlights different skills and technologies, showcasing my versatility and passion for the field.<br /><br />
                                        <button className="vvd"><a href="https://github.com/SachinPandey21?tab=repositories" target="_blank" style={{ textDecoration: 'none', color: 'white', fontSize: '17px', borderWidth: '2px', borderColor: 'white', padding: '10px', borderStyle: 'solid' }}>GitHub Link</a></button>
                                    </p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        projects1.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>Future Projects, coming soon....</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
