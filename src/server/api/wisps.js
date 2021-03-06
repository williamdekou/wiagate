import express from 'express';
import jwt from 'jsonwebtoken';

import models from '../db/models';

const router = (app) => {
  const router = express.Router();

  router.get('', (req, res) => {
    models.Wisp.findAll().then( response => {
      res.json(response);
    })
  });

  router.post('/create', (req, res) => {
    models.Wisp.create(req.body).then((response) => {
      
      console.log(response)
      res.json(response)
    })
  })

  return router;
};

export default router;
