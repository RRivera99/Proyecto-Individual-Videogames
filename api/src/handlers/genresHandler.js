const getGenresApi = require('../controllers/getGenres');

const genresHandler = async (req,res) =>{
    try {
        const response = await getGenresApi();
        res.status(200).send(response);
        
    } catch (error) {
        res.status(404).json({error: error.message})
        
    }
}

module.exports = (genresHandler);