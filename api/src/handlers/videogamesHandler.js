const getVideogameById = require('../controllers/getVideogameById');
const postVideogames = require ('../controllers/postVidegames');
const getVideogames = require ('../controllers/getVideogames')
const videogames = async (req,res) => {
    try {
        const {name}=req.query;
        if (name) {
            const response1 = await getVideogames(name);
            res.status(200).json(response1)}
        else {
            const response = await getVideogames();
            
            res.status(200).json(response)

        }
        
    } catch (error) {
        res.status(404).json({error:error.message})        
    }

}
const videogamesById = async (req,res) => {
    try {
        const {idVideogame} = req.params;
        const response = await getVideogameById(idVideogame);
        res.status(200).json(response); 
        
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}
const createVideogame = async (req,res) =>{
    try {
        const {name, description, rating, released, image, platforms, genres} = req.body;
        const response = await postVideogames(name, description, rating, released, image, platforms, genres);
        res.status(200).send('Succesful create videogame in your DB')
    } catch (error) {
        res.status(404).json({error:error.message})        
    }
}

module.exports = {videogamesById, createVideogame, videogames}