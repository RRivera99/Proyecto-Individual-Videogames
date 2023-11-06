import React from 'react';
import styles from './Navbar.module.css';
import videogamesLogo from '../../Utils/Image-videogames.jpg';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import { useDispatch } from 'react-redux';
import { getVgByName } from '../../Redux/Action/action';

const Navbar = () => {
 
  return (
    
    <div className ={styles.navbar}>
        <div className = {styles.image}>
            
            <Link className = {styles.buttons1}to="/"><img src={videogamesLogo} alt="" /></Link>
        </div>
        <div className = {styles.buttons}>
            <Link className = {styles.buttons1}to="/home">Home</Link>
            <Link className = {styles.buttons1} to="/form">Formulario</Link>
        </div>
        <SearchBar ></SearchBar>
        
    </div>
  )
}

export default Navbar
