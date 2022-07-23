import React from 'react';
import { Card, CardBody, CardText, CardHeader, Button } from 'reactstrap';
const JobDetails = props => {
    return (
        <div>
            <Card style={{ marginTop: "10px", width: "1315px", fontFamily: "Open Sans,sans-serif" }}>
                <CardBody style={{ textAlign: "left", paddingLeft: "15%", paddingRight: "15%" }}>
                    <CardHeader style={{
                        border: "none", backgroundColor: "white", fontSize: "36px",
                        fontWeight: "600", textAlign: "left", color: "#0D4781"
                    }}>
                        {props.Job.title}
                    </CardHeader>
                    <CardText >
                        <p style={{ paddingRight: "3%", color: "#397dc0" }}>
                            {props.Job.subject}
                        </p>
                    </CardText>
                    <hr />
                    <CardText style={{ marginTop: "10%", fontSize: "17px" }}>
                        <p>Job responsibilities : </p>
                        {props.Job.Job_responsibilities}
                    </CardText>
                    <CardText style={{ marginTop: "10%", fontSize: "17px" }}>
                        <p>Requirements : </p>
                        {props.Job.Requirements}
                    </CardText>
                    <CardText style={{ marginTop: "10%", fontSize: "17px" }}>
                        <p>Experience : </p>
                        {props.Job.Experience}
                    </CardText>
                    <CardText>
                        <a href='/jobapplys'>
                            <Button color="warning" outline size='lg' style={{ width: "100px", marginTop: "20px" }}>
                                Apply
                            </Button>
                        </a>

                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default JobDetails;