
const fs = require('fs');
const path = require('path');
const request = require('request');
const Mustache = require('mustache');
const _ = require('lodash');

let allCfg = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json')));
let nodeEnv = process.env.NODE_ENV || 'development';
let cfg = allCfg.APP;

if (!_.isUndefined(allCfg[nodeEnv])) cfg = _.merge(cfg, allCfg[nodeEnv]);

let tmplMap = {
  notFoundTemplate: fs.readFileSync(path.join(__dirname, '..', 'templates', 'not-found-template.mustache')),
  errorTemplate: fs.readFileSync(path.join(__dirname, '..', 'templates', 'error-template.mustache')),
  candidateTemplate: fs.readFileSync(path.join(__dirname, '..', 'templates', 'candidate-template.mustache')),
  racesTemplate: fs.readFileSync(path.join(__dirname, '..', 'templates', 'races-template.mustache')),
  pageNavigation: fs.readFileSync(path.join(__dirname, '..', 'templates', 'navigation.mustache'))
};

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

module.exports.getPageName = () => (document.querySelector(`meta[name=${cfg.pageIdMeta}]`) || {content: null}).content;

module.exports.getUrlParameter = (name) => {
  name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  let results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

module.exports.parseHTML = parseHTML;

function renderTemplate (id, context = {}) {
  let template = tmplMap[id];
  if (template) {
    let templateString = template.toString();
    return parseHTML(Mustache.render(templateString, context));
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

function buildNavigation () {
  if (!cfg.pages) return;

  // let currentPage = window.location.pathname;
  let navItems = [];
  _.forEach(cfg.pages, page => {
    if (!_.isUndefined(page.showInNavigation) && page.showInNavigation === true) {
      if (page.path && page.displayName) navItems.push({ path: page.path, label: page.displayName });
    }
  });

  return navItems;
}
module.exports.buildNavigation = buildNavigation;

module.exports.buildPageElement = (section = null) => {
  if (_.isUndefined(section) || (!_.includes(['navigation', 'header', 'footer'], section))) {
    return;
  }

  let sectionTemplate = null;
  if (section === 'navigation') {
    sectionTemplate = cfg.pagePartials.navigationTemplateId || undefined;
  } else if (section === 'footer') {
    sectionTemplate = 'footer';
  }

  if (!sectionTemplate) return;

  let sectionElement = null;

  sectionElement = {
    navigationItems: buildNavigation()
  };

  let nodes = renderTemplate(sectionTemplate, sectionElement);
  console.log('nodes', nodes);
  fillContainer(sectionTemplate, nodes);
};
