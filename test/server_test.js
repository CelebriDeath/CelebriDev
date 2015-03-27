'use strict';

process.env.MONGO_URI = 'mongodb://localhost/celebapp_test';
require('../server.js');
var mongoose = require('mongoose');
var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);

var expect = chai.expect;

describe('Celebs api end points', function() {
  after(function(done) {
    mongoose.connection.db.dropDatabase(function() {
      done();
    });
  });

  it('should create a celebrity', function(done) {
    chai.request('localhost:3000/api/v1')
      .post('/celebs')
      .send({moniker: 'Betty Rubble', age: '22'})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body).to.have.property('_id');
        expect(res.body.moniker).to.eql('Betty Rubble');
        expect(res.body.age).to.eql('22');
        done();
      });
  });

  describe('already has data in database', function() {
    var id;
    beforeEach(function(done){
      chai.request('localhost:3000/api/v1')
        .post('/celebs')
        .send({moniker: 'Jesus'})
        .end(function(err, res) {
          id = res.body._id;
          done();
        });
    });

    it('should retrieve an array of celebrities', function(done) {
      chai.request('localhost:3000/api/v1')
        .get('/celebs')
        .end(function(err, res){
          expect(err).to.eql(null);
          expect(Array.isArray(res.body)).to.be.true;
          expect(res.body[0]).to.have.property('moniker');
          done();
        });
    });

    it('should retrieve a specific celebrity', function(done) {
      chai.request('localhost:3000/api/v1')
        .get('/celebs/' + id)
        .end(function(err, res){
          expect(err).to.eql(null);
          expect(res.body._id).to.eql(id);
          expect(res.body.moniker).to.eql('Jesus');
          done();
        });
    });

    it('should update a celebrity', function(done) {
      chai.request('localhost:3000/api/v1')
        .put('/celebs/' + id)
        .send({moniker: 'Kenny'})
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(res.body.moniker).to.eql('Kenny');
          done();
        });
    });

    it('should delete a celebrity', function(done) {
      chai.request('localhost:3000/api/v1')
        .delete('/celebs/' + id)
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(res).to.have.status(200);
          expect(res.body.msg).to.eql('success!');
          done();
        });
    });
  });
});
