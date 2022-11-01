import React, { useContext } from 'react';
import ThemeColor from '../../context/ThemeColor';
import Table from 'react-bootstrap/Table';
import { BsFillHeartFill } from 'react-icons/bs';
import './FavoriteCharacter.css';

export default function FavoriteCharacter({ favorites }){ 
    const color = useContext(ThemeColor)

    return (
        <Table size='sm' id='favorite-section'>
            <thead>
                <tr>
                    <th style={{ color }} id='favorite-title'><BsFillHeartFill/></th>
                </tr>
            </thead>
        
            <tbody>
                {favorites.favorites.map((favorite, i)=>(
                    <tr key={i} id='favorite-choosed'>
                        <td >{favorite.name}</td>
                    </tr>
                ))} 
            </tbody>
        </Table>   
    )
}
