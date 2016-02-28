var mongo = function () {}
var logger = require('./logger.js')
var l = 'MONGO'

var mongodb = require('mongodb')
var MongoClient = mongodb.MongoClient

/*
mongo.connect(config, callback) {} -- Connects to MongoDB
*/

mongo.prototype.connect = function (config, callback) {
  MongoClient.connect(config.url, function (err, db) {
    if (err) {
      logger.error(l, 'Unable to connect to the mongoDB server. Error: ' + err)
    } else {
      logger.log(l, 'Connection established to database')
      callback(db)
    }
  })
}

module.exports = new mongo()