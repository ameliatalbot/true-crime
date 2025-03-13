let express = require('express');
let router = express.Router();

// const { tiktokVals } = require('../../../public/script');

let question1Vals = {yes: 0, no: 0, total: 0, yesPer: 0, noPer: 0};
let question2Vals = {yes: 0, no: 0, total: 0, yesPer: 0, noPer: 0};
let question3Vals = {yes: 0, no: 0, total: 0, yesPer: 0, noPer: 0};

/* Define your routes/endpoints here */

router.get('/question1Response', (req, res) => {
    let data = question1Vals;
    res.status(200).json(data);
});

router.post('/question1Yes', (req, res) => {
  question1Vals.yes +=1;
  question1Vals.total +=1;
  question1Vals.yesPer = (question1Vals.yes / question1Vals.total).toFixed(2) * 100;
  question1Vals.noPer = 100 - question1Vals.yesPer;
  console.log(question1Vals);
  res.status(200).json({data: 'question1 yes updated'});
});

router.post('/question1No', (req, res) => {
  question1Vals.no +=1;
  question1Vals.total +=1;
  question1Vals.yesPer = (question1Vals.yes / question1Vals.total).toFixed(2) * 100;
  question1Vals.noPer = 100 - question1Vals.yesPer;
  console.log(question1Vals);
  res.status(200).json({data: 'question1 no updated'});
});

router.get('/question2Response', (req, res) => {
  let data = question2Vals;
  res.status(200).json(data);
});

router.post('/question2Yes', (req, res) => {
  question2Vals.yes += 1;
  question2Vals.total += 1;
  question2Vals.yesPer = (question2Vals.yes / question2Vals.total).toFixed(2) * 100;
  question2Vals.noPer = 100 - question2Vals.yesPer;
  res.status(200).json({data: 'question2 yes updated'});
});

router.post('/question2No', (req, res) => {
  question2Vals.no += 1;
  question2Vals.total += 1;
  question2Vals.yesPer = (question2Vals.yes / question2Vals.total).toFixed(2) * 100;
  question2Vals.noPer = 100 - question2Vals.yesPer;
  res.status(200).json({data: 'question2 no updated'});
});

router.get('/question3Response', (req, res) => {
  let data = question3Vals;
  res.status(200).json(data);
});

router.post('/question3Yes', (req, res) => {
  question3Vals.yes += 1;
  question3Vals.total += 1;
  question3Vals.yesPer = (question3Vals.yes / question3Vals.total).toFixed(2) * 100;
  question3Vals.noPer = 100 - question3Vals.yesPer;
  res.status(200).json({data: 'question3 yes updated'});
});

router.post('/question3No', (req, res) => {
  question3Vals.no += 1;
  question3Vals.total += 1;
  question3Vals.yesPer = (question3Vals.yes / question3Vals.total).toFixed(2) * 100;
  question3Vals.noPer = 100 - question3Vals.yesPer;
  res.status(200).json({data: 'question3 no updated'});
});

module.exports = {router};