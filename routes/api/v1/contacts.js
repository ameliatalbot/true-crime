let express = require('express');
let router = express.Router();

// const { tiktokVals } = require('../../../public/script');

let tiktokVals = {yes: 0, maybe: 0, no: 0, total: 0};
let redditVals = {yes: 0, maybe: 0, no: 0, total: 0};

/* Define your routes/endpoints here */

router.get('/tiktokResponse', (req, res) => {
    let data = tiktokVals;
    res.status(200).json(data);
});

router.post('/addTiktokYes', (req, res) => {
  tiktokVals.yes +=1;
  tiktokVals.total +=1;
  console.log(tiktokVals);
  res.status(200).json({data: 'tiktok yes updated'});
});

router.post('/addTiktokNo', (req, res) => {
  tiktokVals.no +=1;
  tiktokVals.total +=1;
  console.log(tiktokVals);
  res.status(200).json({data: 'tiktok no updated'});
});

router.post('/addTiktokMaybe', (req, res) => {
  tiktokVals.maybe +=1;
  tiktokVals.total +=1;
  console.log(tiktokVals);
  res.status(200).json({data: 'tiktok maybe updated'});
});

router.get('/redditResponse', (req, res) => {
  let data = redditVals;
  res.status(200).json(data);
});

router.post('/addRedditYes', (req, res) => {
  redditVals.yes += 1;
  redditVals.total += 1;
  res.status(200).json({data: 'reddit yes updated'});
});

router.post('/addRedditNo', (req, res) => {
  redditVals.no += 1;
  redditVals.total += 1;
  res.status(200).json({data: 'reddit no updated'});
});

module.exports = {router};