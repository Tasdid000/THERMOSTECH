import React from 'react';
import { Card,CardBody, CardHeader,CardImg, CardText } from 'reactstrap';
const PortfolioDetails = props => {
    return (
        <div>
            <Card style={{ marginTop: "10px",width:"1315px",fontFamily: "Open Sans,sans-serif"}}>
                <CardBody style={{ textAlign: "left", paddingLeft:"15%", paddingRight:"15%" }}>
                    <CardHeader style={{
                        border: "none", backgroundColor: "white", fontSize: "36px",
                        fontWeight: "600", textAlign: "left", color:"#0D4781"
                    }}>
                        {props.Portfolio.title}
                    </CardHeader>
                    <CardImg
                        src={props.Portfolio.image}
                        alt={props.Portfolio.title}
                        style={{ height: "300px"}}
                    />
                    <CardText style={{ marginTop: "10%", fontSize: "17px" }}>
                        {props.Portfolio.content}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default PortfolioDetails;