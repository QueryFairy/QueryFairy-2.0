const express = require('express');
const db = require('../db.js');
const bcrypt = require('bcryptjs');

const userController = {};

userController.createUser = async (req, res, next) => {
  const { first_name, last_name, email, password, username } = req.body;
  // encrypt password
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
   // console.log('should get response from query', newUser)
    return next();
  } catch (err) {
    //console.log('err', err);
    return next({
      message: { err: 'unable to save newly created student into database'}
    });
  }
};


module.exports = userController;
