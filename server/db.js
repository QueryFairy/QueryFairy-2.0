const { Pool } = require('pg');
// TODO: require db
require('dotenv').config();

// const SALT_WORK_FACTOR = 10;
// const bcrypt = require('bcryptjs');

const pool = new Pool({
  connectionString: process.env.PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};

CREATE TABLE user(user_pk INT GENERATED ALWAYS AS IDENTITY, first_name VARCHAR(100) NOT NULL, last_name VARCHAR(100) NOT NULL, email VARCHAR(100) NOT NULL UNIQUE, username VARCHAR(100) NOT NULL UNIQUE, password VARCHAR(100) NOT NULL, PRIMARY KEY (user_pk));



CREATE TABLE query (
	query_pk INT GENERATED ALWAYS AS IDENTITY,
	endpoint VARCHAR(255) NOT NULL,
	user_id INT NOT NULL,
	PRIMARY KEY(query_pk),
  CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(user_pk)
);




ALTER TABLE "queries" ADD CONSTRAINT "queries_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("_id");

