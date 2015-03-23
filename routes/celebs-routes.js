'use strict';
var Celeb = require('../models/Celeb');
var bodyparser = require('body-parser');

module.exports = function(app) {
  app.use(bodyparser.json());

  app.get('/celebs', function(req, res) {
    Celeb.find({}, function(err, data) {
      if (err) return res.status(500).send({'msg': 'could not retrieve celebs'});

      res.json(data);
    });
  });

  app.post('/celebs', function(req, res) {
    var newCeleb = new Celeb(req.body);
    newCeleb.save(function(err, celeb) {
      if (err) return res.status(500).send({'msg': 'could not save celeb'});

      res.json(celeb);
    });
  });

  app.put('/celebs/:id', function(req, res) {
    var updatedCeleb = req.body;
    delete updatedCeleb._id;
    Celeb.update({_id: req.params.id}, updatedCeleb, function(err) {
      if (err) return res.status(500).send({'msg': 'could not update celeb'});

      res.json(req.body);
    });
  });

  app.delete('/celebs/:id', function(req, res) {
    Celeb.remove({_id: req.params.id}, function(err) {
      if (err) return res.status(500).send({'msg': 'could not delete'});

      res.json({'msg': 'success!'});
    });
  });
};
