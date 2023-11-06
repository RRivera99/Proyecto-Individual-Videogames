import React from 'react'
import styles from './SearchBar.module.css'
import { useDispatch } from 'react-redux'
import { getVgByName } from '../../Redux/Action/action';

const SearchBar = () => {
  const dispatch= useDispatch();
  const handleSubmit = () => {
    dispatch(getVgByName(document.getElementById("search").value))
  }
  return (
    <div>
        
        <input className ={styles.input} id="search" type="text" />
        <input className ={styles.button}type="submit" onClick={handleSubmit}></input> 
        
    </div>
  )
}

export default SearchBar
//<Navbar></Navbar>