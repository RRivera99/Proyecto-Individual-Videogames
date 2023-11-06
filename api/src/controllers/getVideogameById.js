require('dotenv').config();
const {API_KEY, URL} = process.env;
const axios = require('axios');
const {isUUID} = require('../utils');
const { Videogame, Genre } =require('../db');

const getVideogameById = async (idVideogame) => {
    
        if (isUUID(idVideogame)){
            const videogameDb = await Videogame.findByPk(idVideogame, {
                include: {
                  model: Genre,
                  attributes: ['name'],
                  through:{
                    attributes: []
                  }// Asegúrate de que esto coincida con tu configuración de relación
                }});
            return videogameDb;
            
        } else if (idVideogame > 853958) throw new Error('ID not exist')
        else {
            const result = (await axios(`${URL}/${idVideogame}?key=${API_KEY}`)).data;
            
            const videogamesApi= {
                id: result.id,
                name: result.name,
                description: result.description,
                rating:result.rating,
                released: result.released,
                image: result.background_image,
                platforms: result.platforms.map(p => p.platform.name ),
                genres: result.genres.map(g => g.name)
            }
            
            return videogamesApi;
        }

}
module.exports =(getVideogameById)