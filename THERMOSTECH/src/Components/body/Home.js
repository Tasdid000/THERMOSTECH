import React, { Component } from "react";
import { Button, Col, Row, UncontrolledCarousel } from 'reactstrap';
import Portfolio from '../body/portfolio/Portfolio';
// import { bounce } from 'react-animations'
// import Radium, { StyleRoot } from 'radium'


// const styles = {
//     bounce: {
//         animation: 'x 1s',
//         animationName: Radium.keyframes(bounce, 'bounce')
//     }
// }
// style={styles.bounce}

class Home extends Component {
    render() {
        const centered = {
            color: "white",
            position: "absolute",
            top: "25%",
            left: "22%",
            fontSize: "40px"
        }
        const centered1 = {
            color: "white",
            position: "absolute",
            top: "35%",
            left: "28%",
            fontSize: "40px",
        }
        const button = {
            position: "absolute",
            top: "60%",
            left: "39%",
            fontSize: "30px",
        }
        const align = {
            color: "#2969a9",
            fontSize: "18px",
        }
        return (
            <div>
                <br /><br /><br />
                <div style={{ backgroundImage: 'url("/assets/images/18.jpg")', height: "620px", backgroundSize: "cover", backgroundPosition: "center center" }}>
                    <div>
                        <p style={centered}>Hire Software Developers with Bangladesh</p>

                        <p style={centered1}>Based Project Management Team</p>
                        <a href="/contactus">
                            <Button style={button} color="warning" outline>
                                Get Developers Now
                            </Button>
                        </a>
                    </div>
                </div><br /><br /><br /><br /><br />
                <div>
                    <h1 align="center" style={{ color: "#2969a9" }}>
                        140+ Professionals at your service
                    </h1>
                    <p align="center" style={{ fontSize: "20px" }}>
                        Culture based company with Employee Happiness at the heart.
                    </p>

                    <p align="center" style={{ fontSize: "20px" }}>Excellent communication with 100% Transparency and Clear Processes.</p>

                    <p align="center" style={{ fontSize: "20px" }}>Extensive hours of support possible through NY based project management team along with</p>
                    <p align="center" style={{ fontSize: "20px" }}>team members across many different time zones. </p>
                    <br /><br />


                    <div className="container" style={align}>
                        <Row>
                            <Col style={{ listStyle: "none" }}>
                                <ul className="col-lg-11" style={{ listStyle: "none" }}>
                                    <li>
                                        <Col>
                                            <img src="https://www.sjinnovation.com/themes/custom/sji_theme/images/tick.svg"
                                                style={{ marginRight: "5px" }} alt="pic" />
                                            UI & UX | Graphic | 3D Design
                                        </Col>

                                    </li><br />
                                    <li>
                                        <Col>
                                            <img src="https://www.sjinnovation.com/themes/custom/sji_theme/images/tick.svg"
                                                style={{ marginRight: "5px" }} alt="pic" />
                                            Softwere Development
                                        </Col>


                                    </li><br />
                                    <li>
                                        <Col>
                                            <img src="https://www.sjinnovation.com/themes/custom/sji_theme/images/tick.svg"
                                                style={{ marginRight: "5px" }} alt="pic" />
                                            Flutter Mobile App Development
                                        </Col>

                                    </li>

                                </ul>
                            </Col>

                            <Col>
                                <ul className="offset-lg-0  col-lg-11" style={{ listStyle: "none" }}>
                                    <li>
                                        <Col>
                                            <img src="https://www.sjinnovation.com/themes/custom/sji_theme/images/tick.svg"
                                                style={{ marginRight: "5px" }} alt="pic" />
                                            Web Design
                                        </Col>


                                    </li><br />
                                    <li>
                                        <Col>
                                            <img src="https://www.sjinnovation.com/themes/custom/sji_theme/images/tick.svg"
                                                style={{ marginRight: "5px" }} alt="pic" />
                                            Data Analyst | ML| AL
                                        </Col>


                                    </li><br />
                                    <li>
                                        <Col>
                                            <img src="https://www.sjinnovation.com/themes/custom/sji_theme/images/tick.svg"
                                                style={{ marginRight: "5px" }} alt="pic" />
                                            Digital Marketing | CMS
                                        </Col>


                                    </li>
                                </ul>
                            </Col>
                            <Col>
                                <ul className="offset-lg-0 col-lg-12" style={{ listStyle: "none" }}>
                                    <li>
                                        <Col>
                                            <img src="https://www.sjinnovation.com/themes/custom/sji_theme/images/tick.svg"
                                                style={{ marginRight: "5px" }} alt="pic" />
                                            Web Application Development
                                        </Col>


                                    </li><br />
                                    <li>
                                        <Col>
                                            <img src="https://www.sjinnovation.com/themes/custom/sji_theme/images/tick.svg"
                                                style={{ marginRight: "5px" }} alt="pic" />
                                            Cross-Platform and Native App Development
                                        </Col>


                                    </li>
                                </ul>
                            </Col>
                        </Row>

                    </div>
                    <br /><br /><br />
                </div>
                <div align="center">
                    <h1 style={{ color: "#2969a9" }}>
                        Culture we live by
                    </h1><br /><br />
                    <div style={{ width: "900px", color: "black" }}>
                        <UncontrolledCarousel
                            items={[
                                {
                                    src: '/assets/images/Capture1.png',

                                    key: 1,
                                },
                                {
                                    key: 2,
                                    src: '/assets/images/Capture2.png'
                                },
                                {
                                    key: 3,
                                    src: '/assets/images/Capture3.png'
                                },
                                {
                                    key: 4,
                                    src: '/assets/images/Capture4.png'
                                },
                                {
                                    key: 6,
                                    src: '/assets/images/Capture5.png'
                                },
                                {
                                    key: 6,
                                    src: '/assets/images/Capture6.png'
                                }
                            ]}
                        />
                    </div>
                    <br /><br /><br />
                    <div>
                        <Portfolio />
                    </div><br /><br /><br />
                    <div>
                        <h1 align="center" style={{ color: "#2969a9" }}>
                            Our Certifications
                        </h1>
                        <br /><br /><br />
                        <div className="container">
                            <Row>
                                <Col>
                                    <img src="/assets/images/3.png" alt="pic" />
                                </Col>
                                <Col>
                                    <img src="/assets/images/4.png" alt="pic" />
                                </Col>
                                <Col>
                                    <img src="/assets/images/5.png" alt="pic" />
                                </Col>
                                <Col>
                                    <img src="/assets/images/11.png" alt="pic" />
                                </Col>
                                <Col>
                                    <img src="/assets/images/7.png" alt="pic" />
                                </Col>
                            </Row>
                        </div>

                    </div>
                </div>
            </div>


        );
    }
}
export default Home;