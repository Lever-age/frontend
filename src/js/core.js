
const fs = require('fs');
const path = require('path');
const request = require('request');
const Mustache = require('mustache');

let allCfg = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json')));
let nodeEnv = process.env.NODE_ENV || 'development';
let cfg = allCfg[nodeEnv];

module.exports.cfg = cfg;
module.exports.Mustache = Mustache;

module.exports.getResource = (endpoint, params = {}) => {
  let qstring = Object.keys(params).reduce((qstrPart, curKey, i) =>
    `${qstrPart}${i > 0 ? '&' : ''}${encodeURIComponent(curKey)}=${encodeURIComponent(params[curKey])}`
    , '');
  let apiEndpoint = `${cfg.api_prefix}/${endpoint}${qstring.length > 0 ? '?' + qstring : ''}`;

  return new Promise((resolve, reject) => {
    request(apiEndpoint, (err, resp, body) => {
      if (err) reject(err);

      return resolve(JSON.parse(body));
    });
  }).catch((err) => err);
};

module.exports.handleError = (err, containerId, customTitle = 'Server Error', customMessage = 'An error has occured!') => {
  document.getElementById(containerId).innerHTML = customMessage;
  document.title = customTitle;

  return err;
};

module.exports.parseHTML = (htmlString) =>
  document.createRange().createContextualFragment(htmlString);
