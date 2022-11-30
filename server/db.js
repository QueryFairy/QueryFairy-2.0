const { Pool } = require('pg');
// TODO: require db
require('dotenv').config();

const PG_URI =
  process.env.PG_URI ||
  'postgres://knuqsdkd:vjeR_dfFbZQvUr0HcIqPsQguBHddzLzP@peanut.db.elephantsql.com/knuqsdkd';

// const SALT_WORK_FACTOR = 10;
// const bcrypt = require('bcryptjs');

console.log('link', process.env.PG_URI);
const pool = new Pool({
  connectionString: PG_URI,
});

// connectionString: process.env.PG_URI,

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};

// testing
