const { verify } = require('crypto');
const express = require('express');
const path = require('path');
const app = express();
const userController = require('./controllers/userController.js');

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

//
app.post('/signup', userController.createUser, (req, res) => {
  //   return res.status(20).send(`${res.locals.user.rows[0]['username']} has been added to the database`);
  console.log('RES', res.locals.user.rows[0]);
  return res.status(201).json(res.locals.user.rows[0]);
});

app.post('/login', (req, res) => {});
// userController.verifyUser

// create a unknown routes handler

app.use('*', (req, res) => {
  return res.status(404).send('page not found');
});

// global error handler
app.use((err, req, res) => {
  const defaultErr = {
    log: 'express error caught in unknown middleware error',
    status: 400,
    message: {
      err: 'an error has occured',
    },
  };
  const errObj = Object.assign(defaultErr, err);
  return res.status(errObj.status).json({ error: errObj.message });
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
module.exports = app;
