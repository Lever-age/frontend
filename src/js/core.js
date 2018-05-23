
import { merge, isUndefined, forEach } from 'lodash';
const fs = require('fs');
const path = require('path');
const request = require('request');
const Mustache = require('mustache');

const allCfg = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json')));
const nodeEnv = process.env.NODE_ENV || 'development';
let cfg = allCfg.APP;

if (!isUndefined(allCfg[nodeEnv])) cfg = merge(cfg, allCfg[nodeEnv]);

const tmplMap = {
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
  let apiEndpoint = `${cfg.api_base}/${endpoint}${qstring.length > 0 ? '?' + qstring : ''}`;

  return new Promise((resolve, reject) => {
    request(apiEndpoint, (err, resp, body) => {
      if (err) reject(err);

      return resolve(JSON.parse(body));
    });
  }).catch((err) => {
    throw err;
  });
};

module.exports.handleError = (err, pageCfg, customTitle = 'Server Error', customMessage = 'An error has occured!') => {
  if (!cfg.pagePartials.errorTemplateId) throw new Error('errorTemplateId is missing in configuration!');

  let nodes = renderTemplate(cfg.pagePartials.errorTemplateId, {});
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

  const navItems = [];
  forEach(cfg.pages, page => {
    if (!isUndefined(page.showInNavigation) && page.showInNavigation === true) {
      if (page.path && page.displayName) navItems.push({ path: page.path, label: page.displayName });
    }
  });

  return navItems;
}
module.exports.buildNavigation = buildNavigation;

module.exports.buildPageElement = (section = null) => {
  if (isUndefined(section) || (!['navigation', 'header', 'footer'].includes(section))) {
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

  const nodes = renderTemplate(sectionTemplate, sectionElement);
  fillContainer(sectionTemplate, nodes);
};
