let entrypointMap = {
  'index': require('./index'),
  'candidate-detail': require('./candidate-detail')
};

const core = require('./core');
let entrypoint = entrypointMap[core.getPageName()] || (() => undefined);

window.onload = () => entrypoint(core);
