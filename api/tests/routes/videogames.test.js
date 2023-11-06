const app = require('../../src/app');
const session = require('supertest');
const agent = session(app);


describe("Test de RUTAS", ()=>{
    describe('GET /videogames:idVideogame', ()=>{
        it('Responde con status: 200', async ()=>{
            await agent.get('/videogames/5').expect(200);
        })
        it('Responde un objeto con las propiedades: "id", "name", "description", "rating", "released", "platforms" e "image"', async ()=>{
            let response = await agent.get('/videogames/1')
            expect(response.body).toHaveProperty("id")
            expect(response.body).toHaveProperty("name")
            expect(response.body).toHaveProperty("description")
            expect(response.body).toHaveProperty("rating")
            expect(response.body).toHaveProperty("released")
            expect(response.body).toHaveProperty("image")
            expect(response.body).toHaveProperty("platforms")
        })
        it('Si hay un error responde con status: 404', async ()=>{
            await agent.get('/videogames/10000000').expect(404)
        })
    })

})







    
   
//     describe("POST /videogame", ()=>{
//         const vg1 = { name:'Pepito', description: 'sdasd', rating:2.2, image:'asdasd', released:'1999-07-20', platforms:'unknown'}
//         const vg2 = { name:'Luna', description: 'zxczxc', rating:3.3, image:'zxczxc', released:'1996-12-27', platforms:'unknown'}
//         it("Lo enviado por body debe devolverse en un array", async ()=>{
//             const response = await agent.post('/videogames').send(vg1);
//             const data = response.body;
//             expect(data).toContainEqual(vg1)
//         })
//         it("Si se hace otro post debe agregarse al array", async ()=> {
//             const {body} = await agent.post('/videogames').send(vg2)
//             expect(body).toContainEqual(vg1)
//             expect(body).toContainEqual(vg2)
//         })
//     })
//









































