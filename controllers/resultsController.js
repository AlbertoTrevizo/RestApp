const express = require('express');

function sumar(req, res, next){
  let x = {'resultado': `${parseInt(req.params.n1) + parseInt(req.params.n2)}`}
  res.json(x);
};

function multiplicar(req, res, next){
  res.send(`${parseInt(req.body.n1) * parseInt(req.body.n2)}`);
};

function dividir(req, res, next){
  res.send(`${parseInt(req.body.n1) / parseInt(req.body.n2)}`);
};

function restar(req, res, next){
  res.send(`${parseInt(req.params.n1) - parseInt(req.params.n2)}`);
};

module.exports = {
  sumar,
  multiplicar,
  dividir,
  restar
};
