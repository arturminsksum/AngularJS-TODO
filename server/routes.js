const router = require('express').Router();
const Article = require('./schema');

router.get('/api', function(req, res, next) {
  Article.find({}, function(err, articles) {
    res.send(articles);
  });
});

router.delete('/api/:id', function(req, res, next) {
  Article.find({ _id: req.params.id }).remove(function(err, raw) {
    if (err) return handleError('Article Not Deleted', next);
    res.send('Article was deleted');
  });
});

module.exports = router;
