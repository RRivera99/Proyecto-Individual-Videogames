// require('dotenv').config();
// const {API_KEY, URL} = process.env;
// const axios = require('axios');

// module.exports = async (req,res) => {
//     try {
//         const {name}= req.query;
//         const result= (await axios(`${URL}?key=${API_KEY}&search=${name}&search_exact=true&page_size=15`)).data;
//         if (!result) res.status(404).send('Videogame not found')
//         res.status(200).send(result);
        

//     } catch (error) {
//         res.status(500).json(error.message)
//     }
// }