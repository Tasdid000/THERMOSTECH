import React, { Component } from 'react';
import { Col, FormGroup, Row, Button, Label, Alert } from 'reactstrap';
import { Form, Control, Errors,actions} from 'react-redux-form'
import axios from "axios";
import { connect } from 'react-redux';
import { baseUrl4 } from '../../../redux/baseUrl'


const mapDispatchToProps = dispatch => {
    return {
        resetFeedbackForm: () => {
            dispatch(actions.reset('jobapply'))
        }
    }
}


const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class JobApplys extends Component {
    state = {
        alertShow: false,
        alertText: null,
        alertType: null
    }
    handleSubmit = values => {
        //console.log(values);
        axios.post(baseUrl4 + 'jobapply', values)
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
        document.title = "APPLICATION FORM";
        return (
            <div style={{ marginTop: "10%" }}>
                <div>
                    <p align="center" style={{ color: "#ea7826", fontSize: "40px" }}>
                        APPLICATION FORM
                    </p>
                </div>
                <div className="shadow p-5 bg-white">
                    <div className="container my-3" style={{ marginLeft: "130px" }}>
                    <Alert isOpen={this.state.alertShow} color={this.state.alertType}>{this.state.alertText}</Alert>
                        <Form method="post" model="jobapply" onSubmit={values => this.handleSubmit(values)}>
                            <Row>
                                <Col md="5">
                                    <FormGroup>
                                        <Row>
                                            <Label htmlfor="fname" style={{ fontSize: "14px" }}>
                                                First Name<em style={{ color: "red" }}>*</em>
                                            </Label>
                                            <Control.text
                                                model=".fname"
                                                name="fname"
                                                placeholder=""
                                                style={{ height: "40px" }}
                                                validators={{
                                                    required
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".fname"
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
                                            <Label htmlfor="lname" style={{ fontSize: "14px" }}>
                                                Last Name<em style={{ color: "red" }}>*</em>
                                            </Label>
                                            <Control.text
                                                model=".lname"
                                                name="lname"
                                                placeholder=""
                                                style={{ height: "40px" }}
                                                validators={{
                                                    required
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".lname"
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
                            </Row>
                            <Row>
                                <Col md="5">
                                    <FormGroup>
                                        <Row>
                                            <Label htmlfor="email" style={{ fontSize: "14px" }}>
                                                Email
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
                                                        isNumber: "Invalid Number !"
                                                    }
                                                }
                                            />
                                        </Row>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Row>
                                    <Label htmlfor="Address" style={{ fontSize: "14px" }}>
                                        Address
                                    </Label>
                                    <Control.text
                                        model=".Address"
                                        name="Address"
                                        placeholder=""
                                        style={{ width: "1000px" }}
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".Address"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required"
                                            }
                                        }
                                    />
                                </Row>
                            </FormGroup>
                            <Row>
                                <Col md="5">
                                    <FormGroup>
                                        <Row>
                                            <Label htmlfor="City" style={{ fontSize: "14px" }}>
                                                City
                                            </Label>
                                            <Control.text
                                                model=".City"
                                                name="City"
                                                placeholder=""
                                                style={{ height: "40px" }}
                                                validators={{
                                                    required
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".City"
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
                                            <Label htmlfor="State" style={{ fontSize: "14px" }}>
                                                State
                                            </Label>
                                            <Control.text
                                                model=".State"
                                                name="State"
                                                placeholder=""
                                                style={{ height: "40px" }}
                                                validators={{
                                                    required
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".State"
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
                            </Row>
                            <Row>
                                <Col md="5">
                                    <FormGroup>
                                        <Row>
                                            <Label htmlfor="Education" style={{ fontSize: "14px" }}>
                                                Education
                                            </Label>
                                            <Control.text
                                                model=".Education"
                                                name="Education"
                                                placeholder=""
                                                style={{ height: "40px" }}
                                                validators={{
                                                    required
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".Education"
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
                                            <Label htmlfor="Experience" style={{ fontSize: "14px" }}>
                                                Experience
                                            </Label>
                                            <Control.text
                                                model=".Experience"
                                                name="Experience"
                                                placeholder=""
                                                style={{ height: "40px" }}
                                                validators={{
                                                    required
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".Experience"
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
                            </Row>
                            <Row>
                                <Col md="5">
                                    <FormGroup>
                                        <Row>
                                            <Label htmlfor="LinkedIn" style={{ fontSize: "14px" }}>
                                                LinkedIn Account
                                            </Label>
                                            <Control.text
                                                model=".LinkedIn"
                                                name="LinkedIn"
                                                placeholder=""
                                                style={{ height: "40px" }}
                                                validators={{
                                                    required
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".LinkedIn"
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
                                            <Label htmlfor="GitHub" style={{ fontSize: "14px" }}>
                                                GitHub Account
                                            </Label>
                                            <Control.text
                                                model=".GitHub"
                                                name="GitHub"
                                                placeholder=""
                                                style={{ height: "40px" }}
                                                validators={{
                                                    required
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".GitHub"
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
                            </Row>
                            <FormGroup>
                                <Row>
                                    <Label htmlfor="About" style={{ fontSize: "14px" }}>
                                        About Me
                                    </Label>
                                    <Control.textarea
                                        model=".About"
                                        name="About"
                                        placeholder=""
                                        style={{ width: "1000px" }}
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".About"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required"
                                            }
                                        }
                                    />
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Label for="Skills" style={{ fontSize: "14px" }}>
                                        Your Skills
                                    </Label>
                                    <Control.textarea
                                        model=".Skills"
                                        name="Skills"
                                        placeholder=""
                                        style={{ width: "1000px" }}
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".Skills"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required"
                                            }
                                        }
                                    />
                                </Row>
                            </FormGroup>
                            {/* <FormGroup>
                                <Row>
                                    <Label htmlfor="file" style={{ fontSize: "14px" }}>
                                        Upload Resume:
                                    </Label>
                                    <Control.file
                                        model=".file"
                                        name="file"
                                        placeholder=""
                                        style={{ width: "1000px" }}
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".file"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required"
                                            }
                                        }
                                    />
                                </Row>
                            </FormGroup> */}
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

export default connect(null, mapDispatchToProps)(JobApplys);