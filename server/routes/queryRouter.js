const express = require('express');
const { route } = require('../server');
const router = express.Router();
const queryController = require('../controllers/queryController.js');

router.post('/', queryController.saveQuery, (req,res) => {
  res.sendStatus(200);
});

router.get('/:id', queryController.getQueryList, (req, res) => {
  res.status(200).json(res.locals.queryList);
});



module.exports = router;