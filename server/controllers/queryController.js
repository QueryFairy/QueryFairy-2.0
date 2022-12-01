const express = require('express');
const db = require('../db.js');
const bcrypt = require('bcryptjs');
const { ModuleFilenameHelpers } = require('webpack');

const queryController = {};

queryController.saveQuery = async (req,res,next) => {
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

queryController.getQueryList = async (req, res, next) => {
  console.log('im in controller', req.params.id);
  const user = [req.params.id];
  const queryString = `SELECT endpoint FROM query WHERE user_id = (SELECT user_pk FROM users WHERE username = $1) `
  try{
    const data = await db.query(queryString, user);
    const result = [];
    data.rows.forEach(el => {
      result.push(el.endpoint);
    })
    //console.log(result);
    res.locals.queryList = result;
    return next();
  } catch (error) {
    return next({
      log: 'error caught in queryController.getQueryList middleware function',
      message: { err: `${error}, caught when fetching query list`}
    })
  }
}
module.exports = queryController;