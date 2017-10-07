var entrypointMap = {
  'index.html': require('./index'),
  'candidate-detail.html': require('./candidate-detail')
};

var path = require('path');
var core = require('./core');
var page = path.basename(window.location.pathname) || core.cfg.rootPage;
var entrypoint = entrypointMap[page] || (() => undefined);

entrypoint(core);
