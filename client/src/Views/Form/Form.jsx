import React, { useEffect, useState } from 'react'
import validate from './Validate';
import styles from './Form.module.css'
import Navbar from '../../Components/Navbar/Navbar';
import { getGenres, postVideogame } from '../../Redux/Action/action';
import { useDispatch, useSelector } from 'react-redux';

const Form = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getGenres())
    }, [])
    const allGenres = useSelector(state => state.allGenres) ;
    

    const [state, setState]= useState({
        name:'',
        description: '',
        rating: 0.0,
        released: '',
        image: '',
        genres: [],
        platforms: []
    })
    const [errors, setErrors]= useState({
        name:'',
        description: '',
        rating: '',
        released: '',
        image: '',
        genres: '',
        platforms: '',
    });

    const handleChange = (event) =>{
        
        if(event.target.name === 'genres'){
            if (state.genres.includes(event.target.value)) return
            setState({
                ...state,
                [event.target.name]: [...state[event.target.name], event.target.value]
                
            })
            return        
        }
        if (event.target.name === 'platforms'){
            let value = document.getElementById(event.target.name).value;
            setState({
                ...state,
                [event.target.name]: [...state[event.target.name], value]
        })
        
            return
        }

        setState({
            ...state,
            [event.target.name]: event.target.value
        })
        validate({
            ...state,
            [event.target.name]: event.target.value
        }, event.target.name, errors, setErrors);
     }
    const remove = (event)=>{
        // const value= document.getElementById(event.target.value).value
        setState({
            ...state,
            [event.target.name]: [...state[event.target.name].filter(x =>x!==event.target.id)]
        })

    }

    const buttonDisabled =() => {
        // let disabledAux = true;
        for (let error in errors){
            if(errors[error] !== "") return true;
            // else{
            //     disabledAux = true;
            //     break;
            // }
        }
        // return disabledAux;
    }
    const handleSubmit = (event) =>{
        event.preventDefault() //No se recargue la pag
        dispatch(postVideogame(state))
    }

 

  return (
    <div className={styles.Container}>
        <Navbar></Navbar>
        <div >
            <h1 className={styles.titulo}>Crea tu videojuego</h1>
            <div className={styles.cont}>
        <form id='form'onSubmit={handleSubmit}>
            <div>
            <input className={styles.input} onChange={handleChange} type='text' name='name' placeholder='Nombre'></input>
            <span className={styles.errors}>{errors.name}</span>
            </div>
            <div>
            <input className={styles.input} onChange={handleChange} type='text' name='description' placeholder='Descripción'></input>
            <span className={styles.errors}>{errors.description}</span>
            </div>
            <div>
            <input className={styles.input} onChange={handleChange} type='text' name='rating' placeholder='Rating'></input>
            <span className={styles.errors}>{errors.rating}</span>
            </div>
            <div>
            <input className={styles.input} onChange={handleChange} type='text' name='released' placeholder='Fecha de lanzamiento (AAAA-MM-DD)'></input>
            <span className={styles.errors}>{errors.released}</span>
            </div>
            <div>
            <input className={styles.input} onChange={handleChange} type='text' name='image' placeholder='Imagen'></input>
            <span className={styles.errors}>{errors.image}</span>
            </div>
            
            <div>
                <h4 className={styles.titulos}>Géneros:</h4>
                <select onChange={handleChange} name="genres" id="">
                    {
                        allGenres.map(g=>  <option key={g.name} value={g.name}>{g.name}</option>)
                    }
                </select>
                <span>{errors.genres}</span>
                {
                    state.genres.map(g=> <div key={g}><span id={'genres'}>{g}<button id={g} type='button' name='genres' onClick={remove}>X</button></span></div>)
                }
            </div>
            <div>
            <h4 className={styles.titulos}>Plataformas:</h4>
            <input type='text' name='platforms' id='platforms'></input>
            <button onClick={handleChange} name='platforms' type='button'>Agregar</button>
            <span>{errors.platforms}</span>
            </div>
                {
                    state.platforms.map(p=> <div key={p}><span id={'platforms'}>{p}<button id={p} type='button' name='platforms' onClick={remove}>X</button></span></div>)
                }
            <input disabled={buttonDisabled()} type="submit" />
        </form>
        </div>
        </div>
    </div>
  )
}

export default Form