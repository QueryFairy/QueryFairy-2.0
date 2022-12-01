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

const server = 'http://localhost:3000';

const testObj = JSON.stringify({
  first_name: 'abc',
  last_name: 'def',
  email: 'abc@gmail.com',
  password: '123',
  username: 'abciscool',
});

describe('Route integration', () => {
  describe('/signup', () => {
    describe('POST', () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous

      it('responds with 201 status and application/json content type', () => {
        return (
          request(server)
            .post('/signup')
            .send(testObj)
            // .then((res) => {
            //   // console.log('RES', res);
            // })
            .expect('Content-Type', /application\/json; charset=utf-8/)
            .expect(201)
        );
        // .then(response => {
        //   expect(typeof response.json(),'object')
        // });
      });
    });
  });

  describe('/login', () => {
    describe('POST', () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous

      it('responds with 200 status and application/json content type', () => {
        return request(server)
          .post('/sign')
          .expect('Content-Type', /application\/json/)
          .expect(200);
      });
    });
  });
});
