import React from 'react'
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from "axios";
import styles from './Detail.module.css'

const Details = () => {

    const [videogame, setVideogame] = useState({});
    const {id} = useParams();

    useEffect(() => {
        async function getDetail() {
            try {
                const {data} = await axios.get(`http://localhost:3001/videogames/${id}`)
                
                
                setVideogame(data);
                
                
            } catch (error) {
                window.alert('Error: ', error.message)
            }
        }
        getDetail();
       
        return setVideogame({})
    }, [id])

  return (
    <div className={styles.cont}>
        {
            videogame.name ? (
                <> 
                <h3>Nombre: {videogame.name}</h3>
                <h3>ID: {videogame.id}</h3>
                
                <p>Rating: {videogame.rating}</p>
                <p>Fecha de lanzamiento: {videogame.released}</p>
                <p>Plataformas: {videogame.platforms}</p>
                <p>Géneros: {videogame.genres}</p>
                <img className={styles.image} src={videogame.image} alt='img'/>  
                <p>Descripción: {videogame.description}</p>
                </>
            ):(
                <h3>Loading...</h3>
            )
        }
    </div>
  )
}

export default Details