
var fs = require('fs');
var path = require('path');
var request = require('request');

var allCfg = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json')));
var nodeEnv = process.env.NODE_ENV || 'development';
var cfg = allCfg[nodeEnv];

module.exports.cfg = cfg;

function serializeQuery(obj, prefix) {
  let str = [], p;
  for(p in obj) {
    if (obj.hasOwnProperty(p)) {
      let k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
      str.push((v !== null && typeof v === "object") ?
        serializeQuery(v, k) :
        encodeURIComponent(k) + "=" + encodeURIComponent(v));
    }
  }
  return str.join("&");
}
module.exports.serializeQuery = serializeQuery;

module.exports.getResource = (endpoint, params = {}) => {
  let queryParams = serializeQuery(params);

  if (queryParams) queryParams = `?${queryParams}`;

  let apiEndpoint = `${cfg.api_prefix}/${endpoint}${queryParams}`;

  return new Promise((resolve, reject) => {
    request(apiEndpoint, (err, resp, body) => {
      if (err) reject(err);

      return resolve(resp.body);
    });
  });
};
