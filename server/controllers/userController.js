const express = require('express');
const db = require('../db.js');
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
require('dotenv').config();

const userController = {};

userController.createUser = async (req, res, next) => {
  const { first_name, last_name, email, password, username } = req.body;
  // create a hash by hashing password 10 times
  const hash = await bcrypt.hash(password, 10);
  const queryString = `INSERT INTO users (first_name, last_name, email, password, username) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
  try {
    const newUser = await db.query(queryString, [
      first_name,
      last_name,
      email,
      hash,
      username,
    ]);
    // res.locals.user = newUser;
    // console.log('DATA', newUser);
    // console.log('DATA ROWS', newUser.rows);

    return next();
  } catch (err) {
    // console.log('err', err);
    return next({
      message: {
        err: 'unable to save newly created student into database',
        status: 400,
      },
    });
  }
};

userController.verifyUser = async (req, res, next) => {
  // extract out password and username from body of request
  const { password, username } = req.body;
  // create a query string that will find the user document that matches the username on request's body
  const queryString = `SELECT password, username FROM users WHERE username=$1`;
  try {
    // query the database to find user document with username 
    const data = await db.query(queryString, [username]);
    console.log('DATA', data);
    // select 
    const user = data.rows;
    if (user.length === 0) {
      return next({
        message: {
          err: 'User not found',
        },
      });
    } else {
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (result) {
          res.locals.signedIn = true;
          res.locals.id = user.user_pk;
        } else {
          res.locals.signedIn = false;
        }
        return next();
      });
    }
    // return next();
  } catch (err) {
    console.log('err', err);
    return next({
      message: {
        err: 'unable to login user because user does not exist',
      },
    });
  }
};

module.exports = userController;
