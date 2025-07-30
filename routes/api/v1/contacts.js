let express = require('express');
let router = express.Router();

// const { tiktokVals } = require('../../../public/script');

let question1Vals = {brian: 0, notBrian: 0, bPer: 0, nbPer: 0, news: 0, tt: 0, nPer: 0, tPer: 0, total: 0};
let question2Vals = {brian: 0, justin: 0, bPer: 0, jPer: 0, news: 0, tt: 0, nPer: 0, tPer: 0, total: 0};
let question3Vals = {brian: 0, justin: 0, hj: 0, bPer: 0, jPer: 0, hjPer: 0, news: 0, tt: 0, nPer: 0, tPer: 0, total: 0};
let question4Vals = {brian: 0, bPer: 0, justin: 0, jPer: 0, hj: 0, hjPer: 0, kristen: 0, kPer: 0, news: 0, nPer:0, tt: 0, tPer: 0, total: 0};

/* Define your routes/endpoints here */

router.get('/resetAll', (req, res) => {
  question1Vals = {brian: 0, notBrian: 0, bPer: 0, nbPer: 0, news: 0, tt: 0, nPer: 0, tPer: 0, total: 0};
  question2Vals = {brian: 0, justin: 0, bPer: 0, jPer: 0, news: 0, tt: 0, nPer: 0, tPer: 0, total: 0};
  question3Vals = {brian: 0, justin: 0, hj: 0, bPer: 0, jPer: 0, hjPer: 0, news: 0, tt: 0, nPer: 0, tPer: 0, total: 0};
  question4Vals = {brian: 0, bPer: 0, justin: 0, jPer: 0, hj: 0, hjPer: 0, kristen: 0, kPer: 0, news: 0, nPer:0, tt: 0, tPer: 0, total: 0};
});

router.get('/question1Response', (req, res) => {
    let data = question1Vals;
    console.log(data);
    res.status(200).json(data);
});

router.post('/q1', (req, res) => {
  console.log("posting");
  console.log(req.body);
  if (req.body.suspect === "yes") {
    question1Vals.brian += 1;
  } else if (req.body.suspect === "no") {
    question1Vals.notBrian += 1;
  } 
  if (req.body.source === "news") {
    question1Vals.news += 1;
  } else if (req.body.source === "tt") {
    question1Vals.tt += 1;
  }
  question1Vals.total += 1;
  question1Vals.bPer = (question1Vals.brian / question1Vals.total).toFixed(2) * 100;
  question1Vals.jPer = (question1Vals.nbPer / question1Vals.total).toFixed(2) * 100;
  question1Vals.nPer = (question1Vals.news / question1Vals.total).toFixed(2) * 100;
  question1Vals.tPer = (question1Vals.tt / question1Vals.total).toFixed(2) * 100;
  res.status(200).json({data: 'question1 updated'});
})

router.post('/q2', (req, res) => {
  console.log("posting");
  console.log(req.body);
  if (req.body.suspect === "brian") {
    question2Vals.brian += 1;
  } else if (req.body.suspect === "justin") {
    question2Vals.justin += 1;
  } 
  if (req.body.source === "news") {
    question2Vals.news += 1;
  } else if (req.body.source === "tt") {
    question2Vals.tt += 1;
  }
  question2Vals.total += 1;
  question2Vals.bPer = (question2Vals.brian / question2Vals.total).toFixed(2) * 100;
  question2Vals.jPer = (question2Vals.justin / question2Vals.total).toFixed(2) * 100;
  question2Vals.nPer = (question2Vals.news / question2Vals.total).toFixed(2) * 100;
  question2Vals.tPer = (question2Vals.tt / question2Vals.total).toFixed(2) * 100;
  res.status(200).json({data: 'question2 updated'});
})

router.post('/q3', (req, res) => {
  console.log("posting");
  console.log(req.body);
  if (req.body.suspect === "brian") {
    question3Vals.brian += 1;
  } else if (req.body.suspect === "justin") {
    question3Vals.justin += 1;
  } else if (req.body.suspect === "hj") {
    question3Vals.hj += 1;
  } 
  if (req.body.source === "news") {
    question3Vals.news += 1;
  } else if (req.body.source === "tt") {
    question3Vals.tt += 1;
  }
  question3Vals.total += 1;
  question3Vals.bPer = (question3Vals.brian / question3Vals.total).toFixed(2) * 100;
  question3Vals.jPer = (question3Vals.justin / question3Vals.total).toFixed(2) * 100;
  question3Vals.hjPer = (question3Vals.hj / question3Vals.total).toFixed(2) * 100;
  question3Vals.nPer = (question3Vals.news / question3Vals.total).toFixed(2) * 100;
  question3Vals.tPer = (question3Vals.tt / question3Vals.total).toFixed(2) * 100;
  res.status(200).json({data: 'question3 updated'});
})

router.post('/q4', (req, res) => {
  console.log("posting");
  console.log(req.body);
  if (req.body.suspect === "brian") {
    question4Vals.brian += 1;
  } else if (req.body.suspect === "justin") {
    question4Vals.justin += 1;
  } else if (req.body.suspect === "hj") {
    question4Vals.hj += 1;
  } else if (req.body.suspect === "kristen") {
    question4Vals.kristen += 1;
  }
  if (req.body.source === "news") {
    question4Vals.news += 1;
  } else if (req.body.source === "tt") {
    questiquestion4Valson1Vals.tt += 1;
  }
  question4Vals.total += 1;
  question4Vals.bPer = (question4Vals.brian / question4Vals.total).toFixed(2) * 100;
  question4Vals.jPer = (question4Vals.justin / question4Vals.total).toFixed(2) * 100;
  question4Vals.hjPer = (question4Vals.hj / question4Vals.total).toFixed(2) * 100;
  question4Vals.kPer = (question4Vals.kristen / question4Vals.total).toFixed(2) * 100;
  question4Vals.nPer = (question4Vals.news / question4Vals.total).toFixed(2) * 100;
  question4Vals.tPer = (question4Vals.tt / question4Vals.total).toFixed(2) * 100;
  res.status(200).json({data: 'question4 updated'});
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