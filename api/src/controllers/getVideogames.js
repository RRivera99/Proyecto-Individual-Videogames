require('dotenv').config();
const {API_KEY, URL} = process.env;
const axios = require('axios');
const{Op} =require('sequelize');
const {Videogame, Genre} =require('../db');

const getVideogames =  async (name) =>{
    
        if (name) {
          
          const videogamesDbByName = await Videogame.findAll({where: {name:{[Op.iLike]: `%${name}%`}}});
          
          const {data}= await axios(`${URL}?key=${API_KEY}&search=${name}&search_precise=true&page=1&page_size=15`);
          const videogamesApiByName = data.results.map((v)=>(
            {id: v.id,
            name: v.name,
            image: v.background_image,            
            platforms: v.platforms.map(p => p.platform.name ),
            rating: v.rating,
            released: v.released,
            genres: v.genres.map(g => g.name)            
            }))
            
            const combinedResults = [...videogamesDbByName, ...videogamesApiByName];
            ;

            if (combinedResults.length === 0) throw new Error('No se encontró ningún videojuego con ese nombre');
            
        
            const first15Results = combinedResults.slice(0, 15);
        
            return first15Results;
            
        }
        else if (!name || name === undefined){
        let arrayUrls = [
            `${URL}?key=${API_KEY}&page=1&page_size=20`,
            `${URL}?key=${API_KEY}&page=2&page_size=20`,
            `${URL}?key=${API_KEY}&page=3&page_size=20`,
            `${URL}?key=${API_KEY}&page=4&page_size=20`,
            `${URL}?key=${API_KEY}&page=5&page_size=20`
        ];
        let videogamesApi =[];
        

        const promises = arrayUrls.map((url)=> axios.get(url));
        

        const responses = await Promise.all(promises)
       
        responses.forEach((response) => {

          if (response.data) {
            videogamesApi.push(...response.data.results);
          }
        });
        
        const simpleVideogamesApi = videogamesApi.map((v)=>(
            {id: v.id,
            name: v.name,
            image: v.background_image,            
            platforms: v.platforms.map(p => p.platform.name ),
            rating: v.rating,
            released: v.released,
            genres: v.genres.map(g => g.name)   
            }
        ))
        const videogamesDb = await Videogame.findAll({
          include: {
            model: Genre,
            attributes: ['name'],
            through:{
              attributes: []
            }// Asegúrate de que esto coincida con tu configuración de relación
          }});
          const formattedVideogames = videogamesDb.map((videogame) => {
            return {
              ...videogame.toJSON(),
              genres: videogame.Genres.map((genre) => genre.name)
            };
          });
          
        
        const allVideogames = [...formattedVideogames, ...simpleVideogamesApi];
        
        
        if (allVideogames.length === 0) throw new Error ("Videogames not found");
        return allVideogames;
        }
        
        
   
      }


  module.exports = (getVideogames);