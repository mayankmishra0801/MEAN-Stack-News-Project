const mongoose = require('mongoose')

const Schema = mongoose.Schema

const newsSchema = new Schema({
    title:String,
    description:String,
    url:String,
    urlToImage:String,
    publishedAt:Date,
    source:String
});

const newsModel = mongoose.model('napi',newsSchema)

module.exports = newsModel