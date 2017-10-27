
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

module.exports.handleError = (err, pageCfg, customTitle = 'Server Error', customMessage = 'An error has occured!') => {
  let nodes = renderTemplate(pageCfg.errorTemplateId, {});
  fillContainer(pageCfg.mainContainer, nodes);

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

function renderTemplate (id, context = {}) {
  let template = document.getElementById(id);
  if (template) {
    return parseHTML(Mustache.render(template.innerHTML, context));
  } else {
    return null;
  }
};
module.exports.renderTemplate = renderTemplate;

function fillContainer (id, nodeTree) {
  let container = document.getElementById(id);
  if (container) {
    while (container.hasChildNodes()) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(nodeTree);
  }
};
module.exports.fillContainer = fillContainer;

module.exports.formatCurrency = (value = 0) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
};

function parseHTML (htmlString) {
  return document.createRange().createContextualFragment(htmlString);
}
