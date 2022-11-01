import React, { useContext }from 'react';
import rickAndMortyTitle from '../../assets/RickAndMorty.png';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ThemeColor from '../../context/ThemeColor';
import './MainPage.css'

export default function MainPage(){
    const color = useContext(ThemeColor)

    return(
        <Container id='main-page-container'>
            <Row className='text-center'>
                <Image src={rickAndMortyTitle} alt=''/>
                <h1 style={{color}}>Who are you looking for?</h1>
                <Link to='/search-a-character'>
                    <Button id='main-page-btn' size='sm'>Start to look</Button>
                </Link>
            </Row>
        </Container>
    )
}