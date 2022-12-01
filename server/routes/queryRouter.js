const express = require('express');
const { route } = require('../server');
const router = express.Router();
const queryController = require('../controllers/queryController.js');

router.post('/', queryController.saveQuery, (req,res) => {
  res.sendStatus(200);
});



module.exports = router;