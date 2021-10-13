'use strict'

import _ from 'lodash';
import TvModel from '../../Models/Tvshows';
const Utils = require("../../Utils/helpers");

export default class TrailsController {

  async getList(req, res) {
    try {
      const params = {};

      if (req.query.title) params.Title = { "$regex": req.query.title, "$options": "i" };

      if (req.query.age) params.Age = { $gt: parseInt(req.query.age) };
      
      const Tv = await TvModel.find(params).limit(400).exec();
      const data = [];
      for(const tvshow of Tv) {
        const sources = [];
        if (tvshow.Netflix === 1) sources.push("Netflix");
        if (tvshow.Hulu === 1) sources.push("Hulu");
        if (tvshow["Prime Video"] === 1) sources.push("Prime Video");
        if (tvshow["Disney+"] === 1) sources.push("Disney");

        data.push({
          title: tvshow.Title,
          age: tvshow.Age,
          year: tvshow.Year,
          imdb: tvshow.IMDb,
          rotten: tvshow["Rotten Tomatoes"],
          sources,
          type: tvshow.Type
        })
      }

      Utils.apiSendData({
        'status': true, 
        'message': '',
        'data': data,
        'error': ''
      }, res);

    } catch (e) {
      Utils.apiSendData({
        'status': false, 
        'message': '',
        'data': null,
        'error': e
      }, res);
    }
  }
}
