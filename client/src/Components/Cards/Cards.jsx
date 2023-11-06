import React from 'react'
import Card from '../Card/Card'
import styles from './Cards.module.css'

function Cards({props}) {
  
  return (
    <div className={styles.divGeneral}>
        {
            props.map(v => <Card key={v.id} id={v.id} name={v.name}  description={v.description} rating={v.rating} released={v.released} image={v.image} platforms={v.platforms} genres={v.genres}></Card>)
        }
    </div>
  )
}

export default Cards