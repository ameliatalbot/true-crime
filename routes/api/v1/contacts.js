let express = require('express');
let router = express.Router();

// const { tiktokVals } = require('../../../public/script');

let question1Vals = {brian: 0, bPer: 0, justin: 0, jPer: 0, hj: 0, hjPer: 0, kristen: 0, kPer: 0, news: 0, nPer:0, tt: 0, tPer: 0, total: 0};
let question2Vals = {brian: 0, justin: 0, hj: 0, kristen: 0, news: 0, tt: 0, total: 0};
let question3Vals = {brian: 0, justin: 0, hj: 0, kristen: 0, news: 0, tt: 0, total: 0};

/* Define your routes/endpoints here */

router.get('/question1Response', (req, res) => {
    console.log('we in');
    let data = question1Vals;
    res.status(200).json(data);
});

router.post('/q1', (req, res) => {
  console.log(req.body);
  if (req.body.suspect === "Brian") {
    question1Vals.brian += 1;
  } else if (req.body.suspect === "Justin") {
    question1Vals.justin += 1;
  } else if (req.body.suspect === "Homeless Joe") {
    question1Vals.hj += 1;
  } else if (req.body.suspect === "Kristen") {
    question1Vals.kristen += 1;
  }
  if (req.body.source === "News") {
    question1Vals.news += 1;
  } else if (req.body.source === "TikTok") {
    question1Vals.tt += 1;
  }
  question1Vals.total += 1;
  question1Vals.bPer = (question1Vals.bPer / question1Vals.total).toFixed(2) * 100;
  question1Vals.jPer = (question1Vals.jPer / question1Vals.total).toFixed(2) * 100;
  question1Vals.hjPer = (question1Vals.hjPer / question1Vals.total).toFixed(2) * 100;
  question1Vals.kPer = (question1Vals.kPer / question1Vals.total).toFixed(2) * 100;
  question1Vals.nPer = (question1Vals.nPer / question1Vals.total).toFixed(2) * 100;
  question1Vals.tPer = (question1Vals.tPer / question1Vals.total).toFixed(2) * 100;
  res.status(200).json({data: 'question1 updated'});
})

router.post('/brian', (req, res) => {
  question1Vals.brian.push(req.body.color);
  question1Vals.total +=1;
  console.log(question1Vals);
  res.status(200).json({data: 'question1 brian updated'});
});

router.post('/justin', (req, res) => {
  question1Vals.justin.push(req.params.user);
  question1Vals.total +=1;
  console.log(question1Vals);
  res.status(200).json({data: 'question1 justin updated'});
});

router.post('/hj', (req, res) => {
  question1Vals.hj.push(req.params.user);
  question1Vals.total +=1;
  console.log(question1Vals);
  res.status(200).json({data: 'question1 hj updated'});
});

router.post('/kristen', (req, res) => {
  question1Vals.kristen.push(req.params.user);
  question1Vals.total +=1;
  console.log(question1Vals);
  res.status(200).json({data: 'question1 kristen updated'});
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