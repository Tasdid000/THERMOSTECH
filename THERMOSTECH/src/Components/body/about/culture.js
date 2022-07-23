import React from "react";
import { Col, Container, Row } from "reactstrap";
const Culture = () => {
    return (
        <div>
            <div style={{ backgroundImage: "url('/assets/images/17.png')", height: "250px", backgroundSize: "cover",marginTop:"90px" ,backgroundPosition: "center center" }}>
                <p style={{ color: "#ea7826", fontSize: "30px", textAlign: "center", paddingTop: "100px" }}>                   
                Culture we live by
                </p>
            </div>
            <br /><br /><br />
            <em style={{ fontSize: "25px", color:"#ea7826"}}>
                <p align="center">Know the values that motivates and bonds every THERMOSTECH member.</p>
            </em>
            <div><br /><br /><br /><br />
                <Container style={{ marginLeft: "209px" }}>
                    <Row>
                        <Col>
                            <p style={{ fontSize: "28px", color: "#ea7826", marginTop: "75px" }}>Be Humble </p>
                            <p style={{ fontSize: "14px" }}><strong>Be down to earth</strong> and <strong>respect all</strong>,
                                leave no room for <strong>arrogance</strong>. </p>
                        </Col>
                        <Col>
                            <img src="https://www.sjinnovation.com/sites/default/files/2021-03/culture%20illustration%201.svg" alt="pic" />
                        </Col>
                    </Row><br /><br />
                    <Row>
                        <Col>
                            <img src="https://www.sjinnovation.com/sites/default/files/2021-03/culture%20illustration%202.svg" alt="pic" />
                        </Col>
                        <Col md="7">
                            <p style={{ fontSize: "28px", color: "#ea7826", marginTop: "75px" }}>Do Great things Together</p>
                            <p style={{ fontSize: "14px" }}>
                                Working with a <strong>team together</strong> is when you achieve <strong>great things</strong>. </p>
                        </Col>
                    </Row><br /><br />
                    <Row>
                        <Col>
                            <p style={{ fontSize: "28px", color: "#ea7826", marginTop: "75px" }}>Work to Make Client Successful </p>
                            <p style={{ fontSize: "14px" }}>
                                <strong>Client is the fuel</strong> of the company, making <strong>client successful</strong> will<br /> keep the <strong>company running</strong>.
                            </p>
                        </Col>
                        <Col>
                            <img src="https://www.sjinnovation.com/sites/default/files/2021-03/culture%20illustration%203.svg" alt="pic" />
                        </Col>
                    </Row><br /><br />
                    <Row>
                        <Col>
                            <img src="https://www.sjinnovation.com/sites/default/files/2021-03/culture%20illustration%204.svg" alt="pic" />
                        </Col>
                        <Col md="7">
                            <p style={{ fontSize: "28px", color: "#ea7826", marginTop: "75px" }}>Take Accountability</p>
                            <p style={{ fontSize: "14px" }}>
                                <strong>Make commitment</strong> to your responsibilities, <strong>be accountable</strong> for <br />
                                results and know you are in charge to take it to the <strong>finish line</strong>. </p>
                        </Col>
                    </Row><br /><br />
                    <Row>
                        <Col>
                            <p style={{ fontSize: "28px", color: "#ea7826", marginTop: "75px" }}>Embrace Challenge & Grow Yourself</p>
                            <p style={{ fontSize: "14px" }}>
                                <strong>Challenging yourself</strong> to learn new things will <strong>expand your <br /> horizon</strong>.
                            </p>
                        </Col>
                        <Col>
                            <img src="https://www.sjinnovation.com/sites/default/files/2021-03/culture%20illustration%205.svg" alt="pic" />
                        </Col>
                    </Row><br /><br />
                    <Row>
                        <Col>
                            <img src="https://www.sjinnovation.com/sites/default/files/2021-03/culture%20illustration%206.svg" alt="pic" />
                        </Col>
                        <Col md="7">
                            <p style={{ fontSize: "28px", color: "#ea7826", marginTop: "75px" }}>Help Each Other</p>
                            <p style={{ fontSize: "14px" }}>
                                <strong>True form of happiness</strong> is experienced when you <strong>help others</strong>.
                            </p>
                        </Col>
                    </Row>

                </Container>

            </div>
        </div>
    );

}
export default Culture;