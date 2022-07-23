import React from 'react';
import { Card, CardBody, CardHeader, CardText, List } from 'reactstrap';



const Joblist = props => {
    return (
        <div>
            <Card style={{
                width: "880px", elevation: "10px", marginTop: "5%", boxSizing: "border-box",
                marginLeft: "7%", borderRadius: "25px", fontFamily: "Open Sans,sans-serif",
                boxShadow: "0 0 10px 5px rgba(57,125,192,0.09)", border: "none", marginBottom: "5px"
            }}>
                <CardBody>
                    <CardHeader style={{
                        border: "none", backgroundColor: "white", fontSize: "36px",
                        fontWeight: "600", textAlign: "left"
                    }}>
                        {props.Job.title}
                    </CardHeader>

                    <CardText>
                        <p style={{ paddingRight: "3%", color: "#397dc0" }}>{props.Job.subject}</p>
                    </CardText>
                    <hr />
                    <CardText style={{ marginTop: "30px", fontSize: "17px" }}>
                        <p> Requirements : </p>
                        <List>
                            {props.Job.Requirements}
                        </List>

                    </CardText>
                    <CardText
                        style={{ cursor: "pointer" }}
                        onClick={props.JobSelect}>
                        <p style={{ color: "#397dc0" }}>View more details</p>
                    </CardText>
                </CardBody>
            </Card>
        </div>

    );
}

export default Joblist;