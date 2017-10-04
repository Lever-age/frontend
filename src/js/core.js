
var fs = require('fs');
var path = require('path');
var request = require('request');

var allCfg = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json')));
var nodeEnv = process.env.NODE_ENV || 'development';
var cfg = allCfg[nodeEnv];

module.exports.cfg = cfg;


module.exports.getResource = (endpoint, query) => {
  let apiEndpoint = `${cfg.api_prefix}/${endpoint}?${query}`;

  return new Promise((resolve, reject) => {
    request(apiEndpoint, (err, resp, body) => {
      if(err) reject(err);

      return resolve(resp.body);
    });
  });
}
