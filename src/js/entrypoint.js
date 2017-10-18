let entrypointMap = {
  'index.html': require('./index'),
  'candidate-detail.html': require('./candidate-detail')
};

const core = require('./core');
let entrypoint = entrypointMap[core.getPageName()] || (() => undefined);

window.onload = () => entrypoint(core);
