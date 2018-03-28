const router = require('express').Router();
const Article = require('./schema');

const handleError = (text, next) => {
  const err = new Error(text);
  err.status = 404;
  next(err);
};

router.get('/api', function(req, res, next) {
  Article.find({}, function(err, articles) {
    res.send(articles);
  });
});

router.get('/api/:id', function(req, res, next) {
  Article.find({ _id: req.params.id }, function(err, article) {
    res.send(article);
  });
});

router.post('/api/add', function(req, res, next) {
  const article = new Article({
    id: req.body.id,
    source: req.body.source,
    author: req.body.author,
    title: req.body.title,
    description: req.body.description,
    url: req.body.url,
    publishedAt: Date.now(),
  });
  article.save(function(err, raw) {
    if (err) handleError('Article Not Saved', next);
    res.send(article);
  });
});

router.put('/api/:id', function(req, res, next) {
  Article.update(
    { _id: req.params.id },
    { title: req.body.title, description: req.body.description },
    function(err, raw) {
      if (err) handleError('Article Not Updated', next);
      res.send('Article was updated');
    },
  );
});

router.delete('/api/:id', function(req, res, next) {
  Article.find({ _id: req.params.id }).remove(function(err, raw) {
    if (err) return handleError('Article Not Deleted', next);
    res.send('Article was deleted');
  });
});

module.exports = router;
