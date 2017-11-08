let entrypointMap = {
  'raceList': require('./index'),
  'candidateDetail': require('./candidate-detail')
};

const core = require('./core');
let entrypoint = entrypointMap[core.getPageName()] || (() => undefined);

window.onload = () => entrypoint(core);
