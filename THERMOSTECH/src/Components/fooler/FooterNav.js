import React from "react";
import {
  
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const FooterNav = () => {
    return (
        <div className="shadow p-5 bg-white">
           
                <Container>
                    <Row>
                        <Column>
                            <Heading>
                                <FooterLink href="/">
                                    <img src="/assets/images/2.png" height="50px" alt="pic" />
                                </FooterLink>

                            </Heading>
                            <FooterLink href="https://www.facebook.com/">
                                <i className="fab fa-facebook-f">
                                    <span style={{ marginLeft: "20px" }}>
                                        <img src="/assets/images/fb.png" height="26px" alt="pic" />
                                    </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="https://www.linkedin.com">
                                <i className="fab fa-linkedin">
                                    <span style={{ marginLeft: "20px" }}>
                                        <img src="/assets/images/in.png" height="20px" alt="pic" />
                                    </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="https://www.twitter.com/">
                                <i className="fab fa-twitter">
                                    <span style={{ marginLeft: "20px" }}>
                                        <img src="/assets/images/tw.png" height="20px" alt="pic" />
                                    </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="https://www.instagram.com/">
                                <i className="fab fa-instagram">
                                    <span style={{ marginLeft: "20px" }}>
                                        <img src="/assets/images/ins.png" height="20px" alt="pic" />
                                    </span>
                                </i>
                            </FooterLink>
                        </Column>
                        <Column>
                            <Heading>COMPANY</Heading>
                            <FooterLink href="/about">About Us</FooterLink>
                            <FooterLink href="/portfolio">Portfolio</FooterLink>
                            <FooterLink href="/">Careers</FooterLink>
                            <FooterLink href="/blog">Blog</FooterLink>
                            <FooterLink href="contactus">Contact Us</FooterLink>
                            <FooterLink href="/">Case Studies</FooterLink>
                            <FooterLink href="/culture">Our Culture</FooterLink>
                            <FooterLink href="/">Privacy Policy</FooterLink>
                        </Column>
                        <Column>
                            <Heading>SERVICES</Heading>
                            <FooterLink href="/UIUX">UI & UX | Graphic | 3D Design</FooterLink>
                            <FooterLink href="/webdesign">Web Design</FooterLink>
                            <FooterLink href="/webapplication">Web Application Development</FooterLink>
                            <FooterLink href="/softwaredevelopment">Softwere Development</FooterLink>
                            <FooterLink href="/dataanalyst">Data Analyst | ML| AL</FooterLink>
                            <FooterLink href="flutterdevelopment">Flutter  Mobile App Development</FooterLink>
                            <FooterLink href="/digitalmarkiting">Digital Marketing | CMS</FooterLink>
                            <FooterLink href="/native">Cross-Platform and Native App Development</FooterLink>

                        </Column>

                        <Column>
                            <Heading>OFFICES</Heading>
                            <FooterLink>Sylhet</FooterLink>
                        </Column>
                        {/* <Column>
                            <img src="/assets/images/map.png" height="300px" width="400px" alt="pic" />
                        </Column> */}
                    </Row>
                </Container>
            
        </div>

    );
};
export default FooterNav;
