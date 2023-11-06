require('dotenv').config();
const {API_KEY, URL} = process.env;
const axios = require('axios');
const {Videogame, Genre} = require('../db');

const postVideogames = async (name, description, rating, released, image, platforms, genres) => {
   
    if (!name || !description || !released || !image || !platforms) throw new Error('Faltan datos');
    const post = await Videogame.create({ name:name, description: description, rating:rating, released:released, image:image, platforms:platforms})
    
    genres.forEach(async (g)=>{
        let genresDb = await Genre.findAll({where: {name:g}});
        await post.addGenre(genresDb)
    })
    

    return post
    
}

module.exports = (postVideogames);