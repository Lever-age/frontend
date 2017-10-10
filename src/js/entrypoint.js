let entrypointMap = {
  'index.html': require('./index'),
  'candidate-detail.html': require('./candidate-detail')
};

const path = require('path');
const core = require('./core');
let page = path.basename(window.location.pathname) || core.cfg.rootPage;
let entrypoint = entrypointMap[page] || (() => undefined);

entrypoint(core);
