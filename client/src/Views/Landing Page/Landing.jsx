import React from 'react'
import styles from './Landing.module.css'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className = {styles.landingDiv}>
        <div className = {styles.titulo}>
            <h1>VIDEOGAMES</h1>
        </div>
        <Link to= '/home'>
        <button className = {styles.button}>INGRESAR</button>
        </Link>
    </div>
  )
}

export default Landing