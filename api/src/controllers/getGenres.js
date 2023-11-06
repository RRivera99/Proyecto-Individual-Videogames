require('dotenv').config();
const {API_KEY, URL_GENRES} = process.env;
const axios = require('axios');
const {Genre} = require('../db');

const getGenresApi = async ()=>{
    const data = (await axios(`${URL_GENRES}?key=${API_KEY}&page_size=19`)).data;
        
    const genresApi = data.results.map((genre)=>({
            id: genre.id,
            name: genre.name,
            
    }))
    const genresDb = await Genre.findAll();
        if (genresDb.length == 0){
            await Genre.bulkCreate(genresApi)
        }
    if (!genresApi.length) throw new Error('Genres not found');
    return genresApi;
}



module.exports = (getGenresApi)