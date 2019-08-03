var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/*', (req, res) => {
  console.log(' hello world ');
  res.send({ hello: 'world'})
});

module.exports = router;
