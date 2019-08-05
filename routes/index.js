var express = require('express');
var router = express.Router();
const path = require('path');
const { storeShortenedUrl, fetchRecordById, fetchRecordByShortUrl } = require('../db/queries');
const { prepareDatabaseEntry, generateShortUrl, isValidUrl } = require('../tools/helpers');
const publicPath = path.join(__dirname, '..', 'public');

router.post('/shorten', (req, res) => {
  const { url_to_shorten } = req.body;
  const hasHttp = url_to_shorten.indexOf('http') > -1 ;
  let url;

  if (!hasHttp) {
    url = 'http://' + url_to_shorten;
  } else {
    url = url_to_shorten;
  }

  const generatedData = prepareDatabaseEntry(url);
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
});

router.get('/urls/:id', (req, res) => {
  const { id } = req.params;

  fetchRecordById(id)
  .then(record => {
      return res.status(200).send(record.rows);
  })
  .catch(err => res.status(400).send(err));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const shortUrl = generateShortUrl(id);
  fetchRecordByShortUrl(shortUrl)
  .then(record => {
    const url = record.rows[0].originalurl;
    res.status(301).redirect(url);
  })
  .catch(err => res.status(400).send(err));

});

/* GET home page. */
router.get('/*', (req, res) => {
  res.sendFile(publicPath + '/index.html');
});

module.exports = router;
