const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Videogame.create({name: ''})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Videogame.create({ name: 'Super Mario Bros' });
      });
    });
  });
  // test done by me
  describe('description', () => {
    it('should throw an error if description is null', (done) => {
      Videogame.create({description: ''})
        .then(() => done(new Error('It requires a valid description')))
        .catch(() => done());
    });
    it('should work when its a valid description', () => {
      Videogame.create({ description: 'This was the most popular videogame in 1989' });
    });

  });
  describe('released', () => {
    it('should throw an error if released is a number', (done) => {
      Videogame.create({released: 5})
        .then(() => done(new Error('It requires a valid value')))
        .catch(() => done());
    });
    it('should work when its a valid released `value`', () => {
      Videogame.create({ released: '01-01-1989' });
    });

  });
  describe('rating', () => {
    it('should throw an error if rating is not a number', (done) => {
      Videogame.create({rating: false})
        .then(() => done(new Error('It requires a valid rating')))
        .catch(() => done());
    });
    it('should work when its a valid rating `value`', () => {
      Videogame.create({ rating: 4.5 });
    });

  });
  describe('image', () => {
    it('should throw an error if image is a not a string', (done) => {
      Videogame.create({image: 90})
        .then(() => done(new Error('It requires a valid value')))
        .catch(() => done());
    });
    it('should work when its a valid image `value`', () => {
      Videogame.create({ image: 'https://i.insider.com/5571adb8eab8eacc63186f29' });
    });

  });
});
