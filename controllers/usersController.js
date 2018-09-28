const express = require('express');

function create(req, res, next){
  res.send(`Crea un usuario con nombre ${req.body.name}`);
};

function list(req, res, next){
  //let name = req.params.name ? req.params.name : 'Sin nombre';
  res.render('users/list', {name : req.params.name})
};

function index(req, res, next){
  res.send(`lista un usuario con el id ${req.params.id}`);
};

function update(req, res, next){
  res.send('Edita un usuario');
};

function destroy(req, res, next){
  res.send('Elimina un usuario');
};

module.exports = {
  create,
  list,
  index,
  update,
  destroy
};
