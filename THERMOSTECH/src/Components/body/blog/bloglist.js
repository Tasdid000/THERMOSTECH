import React from 'react';
import { Card, CardBody, CardHeader, CardImg, CardText } from 'reactstrap';



const Bloglist = props => {
    return (
        <div>
            <Card style={{
                width: "880px", elevation: "10px", marginTop: "5%", boxSizing: "border-box",
                marginLeft: "7%", borderRadius: "25px", fontFamily: "Open Sans,sans-serif",
                boxShadow: "0 0 10px 5px rgba(57,125,192,0.09)", border: "none", marginBottom:"5px"
            }}>
                <CardBody>
                    <CardHeader style={{
                        border: "none", backgroundColor: "white", fontSize: "36px",
                        fontWeight: "600", textAlign: "left"
                    }}>
                        {props.Blog.title}
                    </CardHeader>

                    <CardText>
                        <p>
                            <a href='/about'>
                                <span style={{ paddingRight: "3%", color: "#397dc0" }}>{props.Blog.athour}</span>
                            </a>
                            {props.Blog.TimeStamp}</p>
                    </CardText>
                    <CardImg
                        src={props.Blog.image}
                        alt={props.Blog.title}
                        style={{ height: "300px" }}
                    />
                    <CardText style={{ marginTop: "30px", fontSize: "17px" }}>
                        {props.Blog.desc}
                    </CardText>
                    <CardText
                        style={{ cursor: "pointer" }}
                        onClick={props.BlogSelect}>
                        <p style={{color:"#397dc0"}}>Continue reading</p>
                    </CardText>
                </CardBody>
            </Card>
        </div>

    );
}

export default Bloglist;