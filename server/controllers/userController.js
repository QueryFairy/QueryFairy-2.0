const express = require('express');
const db = require('../db.js');

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
    res.locals.user = newUser
    // console.log('DATA', newUser);
    // console.log('DATA ROWS', newUser.rows);

    return next();
  } catch (err) {
    console.log('err', err);
    return next({
      message: { err: 'unable to save newly created student into database',
      status: 400 },
    });
  }
};

module.exports = userController;
