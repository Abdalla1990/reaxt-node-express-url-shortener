var express = require('express');
var router = express.Router();
const { storeShortenedUrl, fetchRecordById, fetchRecordByShortUrl } = require('../db/queries');
const { prepareDatabaseEntry, generateShortUrl, isValidUrl } = require('../tools/helpers');

console.log('ENV : ' , process.env);
router.post('/shorten', (req, res) => {
    const { url_to_shorten } = req.body;
    if(isValidUrl(url_to_shorten)) {
      const generatedData = prepareDatabaseEntry(url_to_shorten);
      storeShortenedUrl(generatedData).then(data => {
        
          if(data.rowCount > 0) {
              fetchRecordById(generatedData.uuid)
              .then(record => {
                 
                  return res.status(200).send(record.rows);
              })
              .catch(err => res.status(400).send(err));
          }else {
              res.status(400).send({error: 'either data already exists or something went wrong'})
          }
      }).catch(e => res.status(400).send({error: e.detail}));  
    }else {
      res.status(400).send({error: 'invalid url!'});
    }
    
});

router.get('/urls/:id', (req, res) => {
    const { id } = req.params;
 
    fetchRecordById(id)
    .then(record => {
        // console.log( record.rows);
        return res.status(200).send(record.rows);
    })
    .catch(err => res.status(400).send(err));

});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const shortUrl = generateShortUrl(id);
  console.log( ' i am here ');
    fetchRecordByShortUrl(shortUrl)
    .then(record => {
        res.status(301).redirect(record.rows[0].originalurl);
    })
    .catch(err => res.status(400).send(err));

});

/* GET home page. */
router.get('/*', (req, res) => {
  res.send({ hello: 'world'})
});

module.exports = router;
