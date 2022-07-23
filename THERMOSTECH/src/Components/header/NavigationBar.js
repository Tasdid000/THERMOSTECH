import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap'
import './Navbar.css';
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
    }
    navToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render() {
        return (
            <div>
                <div>
                    <Navbar
                        expand="md"
                        fixed="top"
                        light
                        className="shadow p-3 md-5"
                        color="light"
                    >
                        <NavbarToggler onClick={this.navToggle} />
                        <NavbarBrand href="/">
                            <img src="assets/images/2.png" height="50px" alt="pic" />
                        </NavbarBrand>

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="offset-lg-6 col-lg-7"
                                navbar
                            >

                                <UncontrolledDropdown
                                    inNavbar
                                    nav
                                >
                                    <DropdownToggle
                                        nav
                                    >
                                        <span className="text">ABOUT US</span> 
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem href="/about">
                                            <span className="text">About us</span> 
                                        </DropdownItem><br />
                                        <DropdownItem href="/culture">
                                            <span className="text">Our Culture</span> 
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown
                                    inNavbar
                                    nav

                                >
                                    <DropdownToggle
                                        nav
                                    >
                                        <spam className="text">SERVICES</spam> 
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem href="/UI&UX">
                                            <span className="text">UI & UX | Graphic | 3D Design</span> 
                                        </DropdownItem>
                                        <DropdownItem href="/webdesign">
                                            <span className="text">Web Design</span> 
                                        </DropdownItem>
                                        <DropdownItem href="/webapplication">
                                            <span className="text"> Web Application Development</span>
                                        </DropdownItem>
                                        <DropdownItem href="/softwaredevelopment">
                                            <span className="text">Softwere Development</span> 
                                        </DropdownItem>
                                        <DropdownItem href="/dataanalyst">
                                            <span className="text">Data Analyst | ML| AL</span> 
                                        </DropdownItem>
                                        <DropdownItem href="/flutterdevelopment">
                                            <span className="text">Flutter  Mobile App Development</span> 
                                        </DropdownItem>
                                        <DropdownItem href="/digitalmarkiting">
                                            <span className="text">Digital Marketing | CMS</span> 
                                        </DropdownItem>
                                        <DropdownItem href="/native">
                                            <span className="text">Cross-Platform and Native App Development</span> 
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <NavLink href="/portfolio">
                                        <spam className="text">PORTFOLIO</spam>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/job">
                                        <spam className="text">CAREERS</spam> 
                                    </NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink href="/blog">
                                        <spam className="text">BLOG</spam> 
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/contactus">
                                        <Button
                                            color="warning"
                                            outline
                                        >
                                            CONTACT US
                                        </Button>
                                    </NavLink>
                                </NavItem>

                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </div>
        );
    }
}

export default NavBar;