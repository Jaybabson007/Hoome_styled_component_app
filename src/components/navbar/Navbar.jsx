import { Container } from '../../GlobalStyle';
import { BtnGroup, Menu, Nav, NavWrapper } from './NavbarStyle';
import logo from "./../../assets/logo.png";
import Button from '../button/Button';
import FeatherIcon from  "feather-icons-react";
import { useState } from 'react';

const Navbar = () => {
        const [show, setShow] = useState(false);
    return (
        <NavWrapper>
            <Container>
                <Nav>
                    <img src={logo} width="120"/>
                        <Menu className={show && "show"}>
                        <ul>
                            <li>
                                <a href='#'>Design</a>
                            </li>
                            <li>
                                <a href='#'>Interiors</a>
                            </li>
                            <li>
                                <a href='#'>Case Studies</a>
                            </li>
                            <li>
                                <a href='#'>Clients</a>
                            </li>
                        </ul>
                        </Menu>
                        <BtnGroup className={show && "show-btn"}>
                            <Button variant="text">Sign In</Button>
                            <Button>Sign Up</Button>
                        </BtnGroup>
                        <FeatherIcon 
                        onClick={()=>setShow(!show)}
                        icon ={show? "x": "menu"}
                        className="menu-icon"
                        />
                </Nav>
            </Container>
        </NavWrapper>
    );
};


export default Navbar;
