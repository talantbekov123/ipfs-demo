/* eslint-disable import/no-dynamic-require */
/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */
const express = require('express');
const router = express.Router();

module.exports = (app, db) => {
  router.get('/posts', async (req, res) => {
    const posts = await db.Problem.find({});
    res.render('./admins/posts', { posts });
  });

  app.use('/admins', router);
};
