import React from "react";
import { Row, Col } from "reactstrap";
const About = () => {
    let margin = {
        marginRight: "20px",
    }
    return (
        <div>
            <br /><br /><br />
            <div style={{ backgroundImage: "url('/assets/images/17.png')", height: "250px", backgroundSize: "cover", backgroundPosition: "center center" }}>
                <p style={{ color: "#ea7826", fontSize: "30px", textAlign: "center", paddingTop: "100px" }}>                    About Us
                </p>
            </div>
            <div className="container">
                <br /><br /><br />
                <p align="center" style={{fontSize:"20px"}}>Founded in 2022 and based in Bangladesh,<br /> THERMOSTECH has established many long term<br /> business relationships in the last one <br />year. We create custom solutions to help our <br />clients achieve their goals. </p>
                <br /><br /><br /><br />
                <h1 align="center" style={{ color: "#2969a9" }}>
                    Our Motto & Mission
                </h1>
                <br /><br /><br />
                <h3 align="center" style={{ color: "#ea7826" }}>
                    Motto
                </h3>
                <em>
                    <h4 align="center">
                        Employee Happiness Generates Client Success
                    </h4>
                    <br /><br /><br />
                </em>
                <h3 align="center" style={{ color: "#ea7826" }}>
                    Mission
                </h3>
                <p align="center" style={{fontSize:"18px"}}>
                    To continuously work hard towards clients success.<br />
                    To have a happy productive workforce working together with the same vision.
                </p><br /><br />
                <h1 align="center" style={{ color: "#2969a9" }}>
                    Team Leaders
                </h1><br /><br />
                <div align="center">
                    <Row>
                        <Col>
                            <img src="/assets/images/8.png" style={margin} height="200px" alt="pic" />
                            <img src="/assets/images/9.png" style={margin} height="200px" alt="pic" />
                            <img src="/assets/images/10.png" height="200px" alt="pic" />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );

}
export default About;