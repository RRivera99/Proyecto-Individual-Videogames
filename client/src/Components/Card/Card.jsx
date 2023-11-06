import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Card/Card.module.css'

function Card({id, name, description, rating, released, image, platforms, genres}) {
  return (
    
      <div className = {styles.divGeneral}>  
      <img className = {styles.imagen} src={image} alt='' /> 
      <div className = {styles.divTexto}>
        <Link to={`/detail/${id}`}> 
          <h2 className={styles.titulos} >Nombre: {name}</h2>
        </Link>
        <h2 className={styles.titulos}> Géneros: {genres?.map(g =>(<li key={g}>{g}</li>))}</h2>
        <h2 className={styles.titulos} >Rating: {rating}</h2>
      </div>
        
         
    </div>
    
  )
}

export default Card