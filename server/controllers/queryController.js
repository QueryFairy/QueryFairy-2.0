const express = require('express');
const db = require('../db.js');
const bcrypt = require('bcryptjs');
const { ModuleFilenameHelpers } = require('webpack');

const queryController = {};

queryController.saveQuery = async (req,res,next) => {
  console.log('im in controller');
  const {username, query}= req.body;
  const saveQueryString = `
  INSERT INTO query (endpoint, user_id) 
  VALUES ($1, (SELECT user_pk FROM users WHERE username = $2))`;
  const values = [query, username];
  try {
    const insertRequest = await db.query(saveQueryString, values);
    return next();
  } catch (error) {
    return next({
      log: 'error caught in queryController.saveQuery middleware function',
      message: {err: `${error}, caught when saving query`}
    }
    );
  }
}

module.exports = queryController;