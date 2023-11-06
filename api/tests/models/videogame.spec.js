// const { Videogame, conn } = require('../../src/db.js');
// const { expect } = require('chai');

// xdescribe('Videogame model', () => {
//   xbefore(() => conn.authenticate()
//     .catch((err) => {
//       console.error('Unable to connect to the database:', err);
//     }));
//   xdescribe('Validators', () => {
//     beforeEach(() => Videogame.sync({ force: true }));
//     xdescribe('name', () => {
//       xit('should throw an error if name is null', (done) => {
//         Videogame.create({})
//           .then(() => done(new Error('It requires a valid name')))
//           .catch(() => done());
//       });
//       xit('should work when its a valid name', () => {
//         Recipe.create({ name: 'Super Mario Bros' });
//       });
//     });
//   });
// });
