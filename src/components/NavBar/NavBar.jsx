import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import { TiArrowBack } from 'react-icons/ti';
import { IconContext } from 'react-icons/lib';
import './NavBar.css';

export default function NavBar() {
    return(
        <Nav defaultActiveKey='/' id='nav-section'>
            <Nav.Link href='/'>
                <IconContext.Provider value={{ size:'2em', color:'#ffde07' }}>
                    <TiArrowBack/> 
                </IconContext.Provider>

                <Badge id='nav-badge' bg='light'>Return</Badge>
            </Nav.Link> 
        </Nav>
    )
}