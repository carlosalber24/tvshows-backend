'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');

var TvshowsSchema = new Schema({
	"ID": {
		type: Number,
		default: ''
	},
	"Title": {
		type: String,
		default: ''
	},
  "Year": {
		type: Number,
		default: ''
	},
  "Age": {
		type: Number,
		default: 0
  },
  "IMDb": {
		type: String,
		default: ''
	},
  "Rotten Tomatoes": {
		type: String,
		default: ''
	},
  "Netflix": {
		type: Number,
		default: 0
	},
	"Hulu": {
		type: Number,
		default: 0
	},
	"Prime Video": {
		type: Number,
		default: 0
	},
	"Disney+": {
		type: Number,
		default: 0
	},
	"Type": {
		type: Number,
		default: 0
	},
},{
	timestamps: true
});

module.exports = mongoose.model('Tvshows', TvshowsSchema);