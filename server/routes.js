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
  const { id } = req.params;
  Article.find({ _id: id }, function(err, article) {
    res.send(article);
  });
});

router.post('/api/add', function(req, res, next) {
  const { id, source, author, title, description, url, publishedAt } = req.body;
  const article = new Article({
    id: id,
    source: source,
    author: author,
    title: title,
    description: description,
    url: url,
    publishedAt: Date.now(),
  });
  article.save(function(err, raw) {
    if (err) handleError('Article Not Saved', next);
    res.send(article);
  });
});

router.put('/api/:id', function(req, res, next) {
  const { id } = req.params;
  const { title, description } = req.body;
  Article.update(
    { _id: id },
    { title: title, description: description },
    function(err, raw) {
      if (err) handleError('Article Not Updated', next);
      res.send('Article was updated');
    },
  );
});

router.delete('/api/:id', function(req, res, next) {
  const { id } = req.params;
  Article.find({ _id: id }).remove(function(err, raw) {
    if (err) return handleError('Article Not Deleted', next);
    res.send('Article was deleted');
  });
});

module.exports = router;
