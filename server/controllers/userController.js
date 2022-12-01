const express = require('express');
const db = require('../db.js');
const bcrypt = require('bcryptjs');

const userController = {};

userController.createUser = async (req, res, next) => {
  const { first_name, last_name, email, password, username } = req.body;
  const queryString = `INSERT INTO users (first_name, last_name, email, password, username) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
  try {
    const newUser = await db.query(queryString, [
      first_name,
      last_name,
      email,
      password,
      username,
    ]);
    res.locals.user = newUser;
    // console.log('DATA', newUser);
    // console.log('DATA ROWS', newUser.rows);

    return next();
  } catch (err) {
    console.log('err', err);
    return next({
      message: {
        err: 'unable to save newly created student into database',
        status: 400,
      },
    });
  }
};

userController.verifyUser = async (req, res, next) => {
  const { password, username } = req.body;
  const queryString = `SELECT password, username FROM users`;
  try {
    const data = await db.query(queryString);
    const user = data.rows;
    if (user.length === 0) {
      res.status(400).json({
        error: 'User is not registered, sign up first',
      });
    } else {
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (err) {
          res.status(500).json({
            error: 'server error',
          });
        } else if (result === true) {
          const token = jwt.sign(
            {
              username: username,
            },
            process.env.SECRET_KEY
          );
          res.status(200).json({
            message: 'User logged in',
            token: token,
          });
        } else {
          if (result !== true)
            res.status(400).json({ error: 'Enter correct password!' });
        }
      });
    }

    if (foundUser.rows[0] === null) {
      res.locals.signedIn = false;
      return next();
    }

    return next();
  } catch (err) {
    console.log('err', err);
    return next({
      message: {
        err: 'unable to save newly created student into database',
        status: 400,
      },
    });
  }
};

module.exports = userController;
