/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const supertest = require('supertest');
const supertestSession = require('supertest-session');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  name: 'Super Mario Bros',
  description: 'This was the most popular videogame in 1989',
  released: '01-01-1989',
  rating: 4.5,
  image: 'https://i.insider.com/5571adb8eab8eacc63186f29',
  genres: ['Platformer'],
  platforms: ['NES']
};

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame)));
  describe('GET /videogames', () => {
    it('should get 200', () =>
      agent.get('/videogames').expect(200)
    );
    it('respondes with first game name', () =>
    agent.get('/videogames').then((res)=> {
      expect(res.body[0].name).to.equal("Grand Theft Auto V")
    }));
    it('respondes with the second game rating', () =>
    agent.get('/videogames').then((res)=> {
      expect(res.body[1].rating).to.equal(4.67)
    }));
    it('respondes with games found when game name is passed by query', () =>
    agent.get('/videogames?name=portal').then((res)=> {
      expect(res.body[0].name).to.equal('Portal')
      expect(res.body[1].name).to.equal('Portal (1986)')
    }));
    it('respondes with message error if results are not found', () =>
    agent.get('/videogames?name=xxxxxxxxxxxx').then((res)=> {
      expect(res.text).to.equal('Sorry, game not found')
    }));
  });

  describe('GET /videogame/:id', () => {
    it('should get 200', () =>
      agent.get('/videogame/5286').expect(200)
    );
    it('respondes game name', () =>
    agent.get('/videogame/5286').then((res)=> {
      expect(res.body[0].name).to.equal("Tomb Raider (2013)")
    }));
    it('respondes with the second game rating', () =>
    agent.get('/videogame/5286').then((res)=> {
      expect(res.body[0].rating).to.equal(4.06)
    }));
    // it('respondes with message error if id is not found', () =>
    // agent.get('/videogame/0').then((res)=> {
    //   expect(res.text).to.equal('Did not find game by Id')
    // }));
  });

  describe('GET /genres', () => {
    it('should get 200', () =>
      agent.get('/genres').expect(200)
    );
    it('respondes genres name', () =>
    agent.get('/genres').then((res)=> {
      expect(res.body[0].name).to.equal("Action")
    }));
    it('respondes genres id', () =>
    agent.get('/genres').then((res)=> {
      expect(res.body[0].id).to.equal(1)
    }));
  });

  describe('GET /platforms', () => {
    it('should get 200', () =>
      agent.get('/platforms').expect(200)
    );
    it('respondes genres name', () =>
    agent.get('/platforms').then((res)=> {
      expect(res.body[0].name).to.equal("PC")
    }));
    it('respondes genres id', () =>
    agent.get('/platforms').then((res)=> {
      expect(res.body[0].id).to.equal(1)
    }));
  });
  
  describe(' /POST /videogame', () => {
    it('add a new Video Game', function() {
      return agent.post('/videogame')
    .send(videogame)
      .expect(200)
      .expect((res)=> {
        expect(res.text).to.equal('Videogame created succesfully')
      })
    });

  });

});
