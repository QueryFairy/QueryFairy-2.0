// const { toBeRequired } = require('@testing-library/jest-dom/dist/matchers');
// const { ConsoleMessage } = require('puppeteer');
// const path = require('path');
// const fs = require('fs');
// const request = require('supertest');

// const server = 'http://localhost:3000';
// const testJsonFile = path.resolve(__dirname, '../server/db/markets.test.json');
// const table = JSON.parse(fs.readFileSync(testJsonFile));
// /**

// const { response } = require("express");
// const { async } = require("regenerator-runtime");
const request = require('supertest');
const server = require('../server/server');

// const server = 'http://localhost:3000';



describe('Route integration', () => {
  describe('/signup', () => {
    describe('POST', () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous
      it('responds with 201 status', () => {
        return (
          request(server)
            .post('/signup')
            .expect(201)
        );
      });
    });
  });

  describe('/login', () => {
    describe('POST', () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous

      it('responds with 200 status', () => {
        return request(server)
          .post('/login')
          .expect(200);
      });
    });
  });

  describe('/queries/', () => {
    describe('POST', () => {
      it('responds with 200 status', () => {
        return request(server)
        .post('/queries/')
        .expect(200);
      })
    })
  })

  // describe('/queries/', () => {
  //   describe('GET', () => {
  //     it('responds with 200 status', () => {
  //       return request(server)
  //       .post('/queries')
  //       .expect(200);
  //     })
  //   })
  // })

});


