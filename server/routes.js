const router = require('express').Router();
const Article = require('./schema');

router.get('/api/articles', function(req, res, next) {
  Article.find({}, function(err, articles) {
    res.send(articles);
  });
});

module.exports = router;
