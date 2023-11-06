const {Router} = require("express");
const getVideogames= require('../controllers/getVideogames');
const {videogamesById, createVideogame, videogames} = require('../handlers/videogamesHandler');
// const getVideogameByName = require("../controllers/getVideogameByName");
const postVidegames = require("../controllers/postVidegames");


const videogamesRouter =Router();
// videogamesRouter.get('/name', getVideogameByName);
videogamesRouter.get('/:idVideogame', videogamesById);
videogamesRouter.get('/', videogames);
videogamesRouter.post('/', createVideogame);

module.exports = videogamesRouter;
//(req, res) => {
//    res.send("NIY: ESTA RUTA OBTIENE UN ARRAY DE OBJETOS, DONDE CADA OBJETO ES UN VIDEOJUEGO CON LA INFO");
//} 