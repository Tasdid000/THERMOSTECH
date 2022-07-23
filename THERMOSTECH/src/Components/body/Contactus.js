import React, { Component } from "react";
import { Col, FormGroup, Row, Label, Button, Alert } from "reactstrap";
import { Form, Control, Errors, actions } from 'react-redux-form'
import axios from "axios";
import { connect } from 'react-redux';
import { baseUrl3 } from '../../redux/baseUrl'


const mapDispatchToProps = dispatch => {
    return {
        resetFeedbackForm: () => {
            dispatch(actions.reset('feedback'))
        }
    }
}


const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    state = {
        alertShow: false,
        alertText: null,
        alertType: null
    }
    handleSubmit = values => {
        //console.log(values);
        axios.post(baseUrl3 + "feedback", values)
            .then(response => response.status)
            .then(status => {
                if (status === 201) {
                    this.setState({
                        alertShow: true,
                        alertText: "Submitted Successfully",
                        alertType: "success"
                    });
                    setTimeout(() => {
                        this.setState({
                            alertShow: false
                        })
                    }, 2000)
                }
            })
            .catch(error => {
                console.log(error.response)
            });
        this.props.resetFeedbackForm();
    }

    render() {
        document.title = "Contact";
        return (
            <div>
                <br /><br /><br />
                <div style={{ backgroundImage: "url('/assets/images/17.png')", height: "250px", backgroundSize: "cover", backgroundPosition: "center center" }}>
                    <p style={{ color: "#ea7826", fontSize: "30px", textAlign: "center", paddingTop: "100px" }}>Our Services</p>
                </div>

                <br /><br />
                <div>
                    <p align="center" style={{ color: "#ea7826", fontSize: "40px" }}>
                        Request a Quote
                    </p>
                    <p align="center" style={{ fontSize: "14px" }}>
                        Whether you have a question about features, trials, pricing, need a demo, or anything else, our<br /> team is ready to answer all your questions
                    </p>
                </div>
                <div className="shadow p-5 bg-white">
                    <div className="container my-3" style={{ marginLeft: "130px" }}>
                        <Alert isOpen={this.state.alertShow} color={this.state.alertType}>{this.state.alertText}</Alert>
                        <Form method="post" model="feedback" onSubmit={values => this.handleSubmit(values)}>
                            <Row>
                                <Col md="5">
                                    <FormGroup>
                                        <Row>
                                            <Label htmlfor="name" style={{ fontSize: "14px" }}>
                                                Name<em style={{ color: "red" }}>*</em>
                                            </Label>
                                            <Control.text
                                                model='.name'
                                                name="name"
                                                placeholder=""
                                                style={{ height: "40px" }}
                                                validators={{
                                                    required
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".name"
                                                show="touched"
                                                messages={
                                                    {
                                                        required: "Required"
                                                    }
                                                }
                                            />
                                        </Row>
                                    </FormGroup>
                                </Col>
                                <Col md="5" style={{ marginLeft: "50px" }}>
                                    <FormGroup>
                                        <Row>
                                            <Label htmlfor="exampleEmail" style={{ fontSize: "14px" }}>
                                                Email<em style={{ color: "red" }}>*</em>
                                            </Label>
                                            <Control.text
                                                model=".email"
                                                name="email"
                                                placeholder=""
                                                style={{ height: "40px" }}
                                                validators={{
                                                    required,
                                                    validEmail
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".email"
                                                show="touched"
                                                messages={
                                                    {
                                                        required: "Required",
                                                        validEmail: "Invalid Email!"
                                                    }
                                                }
                                            />
                                        </Row>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="5">
                                    <FormGroup>
                                        <Row>
                                            <Label htmlfor="Website" style={{ fontSize: "14px" }}>
                                                Website URL
                                            </Label>
                                            <Control.text
                                                model=".Website_URL"
                                                name="Website_URL"
                                                placeholder=""
                                                style={{ height: "40px" }}
                                                validators={{
                                                    required
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".Website_URL"
                                                show="touched"
                                                messages={
                                                    {
                                                        required: "Required",
                                                    }
                                                }
                                            />
                                        </Row>
                                    </FormGroup>
                                </Col>
                                <Col md="5" style={{ marginLeft: "50px" }}>
                                    <FormGroup>
                                        <Row>
                                            <Label htmlfor="Phone" style={{ fontSize: "14px" }}>
                                                Phone number
                                            </Label>
                                            <Control.text
                                                model=".Phone"
                                                name="Phone"
                                                placeholder=""
                                                style={{ height: "40px" }}
                                                validators={{
                                                    required,
                                                    isNumber
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".Phone"
                                                show="touched"
                                                messages={
                                                    {
                                                        required: "Required",
                                                        validEmail: "Invalid Number !"
                                                    }
                                                }
                                            />
                                        </Row>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Row>
                                    <Label htmlfor="text_area" style={{ fontSize: "14px" }}>
                                        Submit Your Requirements/Query
                                    </Label>
                                    <Control.textarea
                                        model=".contact"
                                        name="contact"
                                        placeholder=""
                                        style={{ height: "100px", width: "1000px" }}
                                        validators={
                                            {
                                                required
                                            }
                                        }
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".contact"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required"
                                            }
                                        }
                                    />
                                </Row>
                            </FormGroup><br />
                            <FormGroup>
                                <Row>
                                    {/* <Col md="7">
                                    <FormGroup>
                                        <p style={{ fontSize: "14px" }}>
                                            Service you want
                                        </p>
                                        <Row style={{ marginLeft: "20px" }}>
                                            <Col md="6">
                                                <Input
                                                    type="radio"
                                                />
                                                <Label style={{ fontSize: "14px" }}>
                                                    WEB APPLICATION
                                                </Label>
                                            </Col>
                                        </Row>
                                        <Row style={{ marginLeft: "20px" }}>
                                            <Col md="6">
                                                <Input
                                                    type="radio"
                                                />
                                                <Label style={{ fontSize: "14px" }}>
                                                    MOBILE APPLICATION (ANDROID/IOS)
                                                </Label>
                                            </Col>
                                        </Row>
                                        <Row style={{ marginLeft: "20px" }}>
                                            <Col md="6">
                                                <Input
                                                    type="radio"
                                                />
                                                <Label style={{ fontSize: "14px" }}>
                                                    WEBSITE
                                                </Label>
                                            </Col>
                                        </Row>
                                        <Row style={{ marginLeft: "20px" }}>
                                            <Col md="6">
                                                <Input
                                                    type="radio"
                                                />
                                                <Label style={{ fontSize: "14px" }}>
                                                    DESIGN
                                                </Label>
                                            </Col>
                                        </Row>
                                        <Row style={{ marginLeft: "20px" }}>
                                            <Col md="6">
                                                <Input
                                                    type="radio"
                                                />
                                                <Label style={{ fontSize: "14px" }}>
                                                    QA
                                                </Label>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </Col> */}

                                    <Col>
                                        <p style={{ fontSize: "25px", color: "#ea7826" }}>
                                            Need any other information
                                        </p>
                                        <a href="tel:01709882474"><p style={{ fontSize: "20px", color: "#ea7826" }}>Call Now</p></a>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <br />
                            <FormGroup>
                                <a href="/">
                                    <Button color="warning" outline size="lg">
                                        Submit
                                    </Button>
                                </a>

                            </FormGroup>

                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(null, mapDispatchToProps)(Contact);