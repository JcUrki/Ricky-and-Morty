import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './CharacterCard.css';

export default function CharacterCard({ filterUser, handleClickAdd, handleClickRemove }){    
    const isAdded = (character) => {
        if (filterUser.includes(character.id)) {
          return true;
        }
        return false;
    };

    return (
        <Container id='card-content'>           
            {filterUser.map((char, i) => {
                return ( 
                    <Card key={i} id='card-section'>
                        <Card.Header id='card-header'>{char.name}</Card.Header>

                        <Card.Body>
                            <Card.Img src={char.image} alt={char.name}/>
                            <Card.Title>Gender: {char.gender}</Card.Title>
                            <Card.Subtitle className='mb-2 text-muted'>Status: {char.status}</Card.Subtitle>
                            <Accordion defaultActiveKey='0' className='mb-2'>
                                <Accordion.Item eventKey='1'>
                                    <Accordion.Header>More infomation...</Accordion.Header>
                                        <Accordion.Body>
                                            <ListGroup variant='flush'>
                                                <ListGroup.Item>Species: {char.species}</ListGroup.Item>
                                                    <ListGroup.Item>Origin: {char.origin.name}</ListGroup.Item>
                                                    <ListGroup.Item>Location: {char.location.name}</ListGroup.Item>
                                                </ListGroup>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                {!isAdded (char) ?
                                    <Button onClick={()=>{ handleClickAdd(char) }} id='card-btn'>Add to favorites</Button>
                                
                                :
                                    <Button onClick={()=> { handleClickRemove(i) }} id='card-btn'>Remove from favorites</Button>
                                } 
                           </Card.Body>
                        </Card>     
                    )
                })}      
        </Container>
    )
}