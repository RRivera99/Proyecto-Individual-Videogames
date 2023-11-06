// importsr actiontypes
import axios from 'axios';
import {  FILTER_GENRES, FILTER_ORIGIN, GET_GENRES, GET_VIDEOGAMES, GET_VIDEOGAME_NAME, ORDER_AZ, ORDER_RATING, PAGE, RESET } from './actionTypes';

//action creators

export function postVideogame(state){
    return async function(dispatch){
        try {
            
        const URL = "http://localhost:3001/videogames"
        await axios.post(URL, state)
            alert("Videojuego creado exitosamente ")
        } catch (error) {
            alert(error.response.data.error)
            
        }
    }
}

export function getVideogames(){
    return async function(dispatch){
        try {
            
        const URL = "http://localhost:3001/videogames";
        const response = await axios.get(URL);
        dispatch({
            type: GET_VIDEOGAMES,
            payload: response.data
        })
            
        } catch (error) {
            alert(error.response.data.error)
            
        }
    }
}

export function getGenres(){
    return async function(dispatch){
        try {
            
        const URL = "http://localhost:3001/genres";
        const response = await axios.get(URL);
        dispatch({
            type: GET_GENRES,
            payload: response.data
        })
            
        } catch (error) {
            alert(error.response.data.error)
            
        }
    }
}
export function page(order){
    return  function(dispatch){
        dispatch({
            type: PAGE, 
            payload: order
        })
    }
}

export function videogamesOrderAZ(order){
    return  function(dispatch){
        dispatch({
            type: ORDER_AZ, 
            payload: order
        })
    }
}
export function videogamesOrderRating(order){
    return  function(dispatch){
        dispatch({
            type: ORDER_RATING, 
            payload: order
        })
    }
}
export function genreFiltered(genre){
    return  function(dispatch){
        dispatch({
            type: FILTER_GENRES, 
            payload: genre
        })
    }
}
export function originFiltered(origin){
    return  function(dispatch){
        dispatch({
            type: FILTER_ORIGIN, 
            payload: origin
        })
    }
}

export function resetVideogames(){
    return  function(dispatch){
        dispatch({
            type: RESET
        })
    }
}
export function getVgByName(name){
    return async function(dispatch){
        try {
            
        const URL = "http://localhost:3001/videogames/";
        const response = await axios.get(`${URL}?name=${name}`);
        dispatch({
            type: GET_VIDEOGAME_NAME,
            payload: response.data
        })
            
        } catch (error) {
            alert(error.response.data.error)
            
        }
    }
}







//todas van a tener esta estructura lo que cambia es si reciben o no argumento