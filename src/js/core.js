
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

module.exports.getPageName = () => path.basename(window.location.pathname) || cfg.rootPage;

module.exports.getUrlParameter = (name) => {
  name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  let results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

module.exports.parseHTML = parseHTML;

module.exports.renderTemplate = (id, context = {}) => {
  let template;
  try {
    template = document.getElementById(id).innerHTML;
  } catch (e) {
    template = '';
  }
  return parseHTML(Mustache.render(template, context));
};

module.exports.fillContainer = (id, nodeTree) => {
  let container = document.getElementById(id);
  if (container) {
    while (container.hasChildNodes()) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(nodeTree);
  }
};

function parseHTML (htmlString) {
  return document.createRange().createContextualFragment(htmlString);
}
