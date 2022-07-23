import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody,CardTitle } from 'reactstrap';


const Portfoliolist = props => {
    return (
        <div>
                <Card style={{ margin: "10px", borderRadius: '30px',fontFamily: "Open Sans,sans-serif", }}>
                <CardBody>
                    <CardImg
                        width="100%"
                        alt={props.Portfolio.title}
                        src={props.Portfolio.image}
                    />
                    <CardImgOverlay>
                        <CardTitle
                            style={{ cursor: "pointer",border: "none",fontSize: "36px", fontWeight: "600", textAlign: "left"}}
                            onClick={props.PortfolioSelect}
                        >
                           <p style={{color:"#397dc0"}}> {props.Portfolio.title}</p>
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card> 
        </div>
    );
}

export default Portfoliolist;