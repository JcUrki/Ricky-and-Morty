import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import './Search.css';

export default function Search ({ search, searchInput, handleSearch }) {
    return(
        <InputGroup id='search-section'>
            <InputGroup.Text id='search-label'>Search a character: </InputGroup.Text>
            <Form.Control placeholder="Find a/an..." aria-label="Search..." aria-describedby="basic-addon2" ref={searchInput} default value={search} onChange={handleSearch}/>
        </InputGroup>
    )
}