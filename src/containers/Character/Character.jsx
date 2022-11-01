import React, { useState, useReducer, useMemo,  useRef, useEffect, useContext }from 'react';
import { useCallback } from 'react';
import useCharacter from '../../customHooks/useCharacter';
import Search from '../../components/Search/Search';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import NavBar from '../../components/NavBar/NavBar';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import FavoriteCharacter from '../../components/FavoriteCharacter/FavoriteCharacter';
import ThemeColor from '../../context/ThemeColor';
import './Character.css';

const initialState = {
    favorites: [],
}

const favoriteReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case 'REMOVE_FROM_FAVORITE':
            const newFavorites = state.favorites.filter((favorite) => favorite.id !== action.payload)
            return {
                ...state,
                favorites: newFavorites,
            };
        default: 
            return state;
    }
}

export default function Character(){ 
    // const [characters, setCharacters] = useState([]);
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState)
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const API = `https://rickandmortyapi.com/api/character/?page=${page.limit}`
    const searchInput = useRef()
    const character = useCharacter(API)
    const color = useContext(ThemeColor) 
    console.log (character)
    // useEffect(() => {
    //   fetch('https://rickandmortyapi.com/api/character')
    //     .then((response) => response.json())
    //     .then((data) => setCharacters(data.results));
    // }, []);

    const handleClickAdd = (favorite) =>{
        dispatch({ 
            type: 'ADD_TO_FAVORITE', 
            payload: favorite
        });
    }

    const handleClickRemove = (newFavorites) =>{
        dispatch({ 
            type: 'REMOVE_FROM_FAVORITE', 
            payload: newFavorites + 1
        });
    }
  
    const handleSearch = useCallback(() => {
        setSearch(searchInput.current.value);
    }, [])

    // const handleSearch = () => {
    //     setSearch(searchInput.current.value);
    // }

    const filterUser = useMemo(() => 
        character.filter((user) => {
            return user.name.toLowerCase().includes(search.toLocaleLowerCase())
        })
    , [character, search])

    // const filteredUsers = characters.filter((user) => {
    //   return user.name.toLowerCase().includes(search.toLowerCase());
    // });

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        setTimeout(() =>{ 
            setLoading(false);
        }, 5000);
    }, [])

    if (loading){ 
        return <Container style={{color}} id='loading-section' className='animate__animated animate__flash'><Spinner animation='border' />Loading...</Container>
    }
console.log(character)
    return (
        <section id='character-container'>
            <NavBar/>

            <h1 style={{color}}>Character</h1>
            {/* <input type='text' value={search} ref={searchInput} onChange={handleSearch}/> */}

            <Search search={search} searchInput={searchInput} handleSearch={handleSearch}/>

            <section id='character-info-like'>
                <CharacterCard filterUser={filterUser} handleClickAdd={handleClickAdd} handleClickRemove={handleClickRemove}/>
                <FavoriteCharacter favorites={favorites}/>
            </section>  
        </section>
    )
}