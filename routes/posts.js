const express = require('express');
const router = express.Router();

module.exports = (app, db) => {
  router.post('/', async (req, res) => {
    const instance = {
      title: req.body.title,
      description: req.body.description,
      difficulty: req.body.difficulty
    };

    try {
      await db.Problem.create(instance);
      res.redirect('/admins/posts');
    } catch (err) {
      res.send(err);
    }
  });

  router.delete('/:_id', async (req, res) => {
    try {
      await db.Problem.deleteOne({ _id: req.params._id });
      res.redirect('/admins/posts');
    } catch (err) {
      res.send(err);
    }
  });

  router.get('/', async (req, res) => {
    const posts = await db.Problem.find({});

    res.render('posts', { posts });
  });

  app.use('/posts', router);
};
