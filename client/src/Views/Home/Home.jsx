import React, { useEffect, useState } from 'react'
import Cards from '../../Components/Cards/Cards'
import Navbar from '../../Components/Navbar/Navbar'
import SearchBar from '../../Components/SearchBar/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Home.module.css'
import { getVideogames, page, getGenres, videogamesOrderAZ, videogamesOrderRating, genreFiltered, resetVideogames, originFiltered } from '../../Redux/Action/action'


const Home = () => {

    const dispatch = useDispatch()
    const allVideogames = useSelector(state => state.allVideogames)
    const allGenres = useSelector(state => state.allGenres)
    const vgFiltered = useSelector(state => state.videogamesFiltered)
    const totalVg = useSelector(state => state.allVideogamesBackUp)
    const currentPage = useSelector(state => state.currentPage)

    const [filter, setFilter] = useState(false)


    useEffect(()=>{
        dispatch(getGenres())
        dispatch(getVideogames())
    }, [])
     

    const pagination = (event) =>{
      dispatch(page(event.target.name))

    }

    const handleOrder = (event) => {
      if (event.target.name === 'alphabet') {
      dispatch(videogamesOrderAZ(event.target.value))
      
      }
      else if (event.target.name === 'rating'){
        dispatch(videogamesOrderRating(event.target.value))
        
      }
      else if (event.target.name === 'genres'){
        dispatch(genreFiltered(event.target.value))
        setFilter(true)
      }
      else if(event.target.name === 'api' || event.target.name === 'db')
       dispatch(originFiltered(event.target.name))
       setFilter(true)
    }
    const reset = () => {
      dispatch(resetVideogames());
      setFilter(false)
    }


  return (
    <div className={styles.Container}>
      <div>
      <Navbar>
        <SearchBar></SearchBar>
      </Navbar>
      </div>
      <div className={styles.contFyO}>
      <div >
        <h4 className={styles.titulos}>Limpiar filtros/ordenamintos</h4>
        <button name='reset' onClick={reset}>RESET</button>
      </div>
      <div>
        
        <h4 className={styles.titulos}>Ordenar alfabeticamente</h4>
        <select name='alphabet'onChange={handleOrder}>
          <option value="AZ">A-Z</option>
          <option value="ZA">Z-A</option>
        </select>
        <h4 className={styles.titulos}>Ordenar por rating</h4>
        <select name='rating'onChange={handleOrder}>
          <option value="ASC">ASCENDENTE</option>
          <option value="DESC">DESCENDENTE</option>
        </select>
      </div>
      <div>
        <h4 className={styles.titulos}>Filtrar por género</h4>
        <select onChange={handleOrder} name="genres">
          {
            allGenres?.map((g)=> <option key={g.id} value={g.name}>{g.name}</option>)
          }
        </select>
        <h4 className={styles.titulos}>Filtar por origen:</h4>
        <button onClick={handleOrder}name='api'>API</button>
        <button onClick={handleOrder}name='db'>BASE DE DATOS</button>
      </div>
      <div>
        <h4 className={styles.titulos}>Paginado</h4>
        <button name ='prev'onClick={pagination}>Prev</button>
        <button name='next'onClick={pagination}>Next</button>
        <h4>{currentPage + 1}</h4>
      </div>
      <div>
        <h4 className={styles.titulos}>Cantidad de cartas encontradas</h4>
        { 
          filter === true 
          ? <h4 className={styles.titulos}>{vgFiltered.length}</h4>
          : <h4 className={styles.titulos}>{totalVg.length}</h4>}
          
      </div>
      </div>
    <div>
        <Cards props = {allVideogames}></Cards>
    </div>
    </div>
  )
}

export default Home