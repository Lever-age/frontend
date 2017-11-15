let entrypointMap = {
  'raceList': require('./race-list'),
  'candidateDetail': require('./candidate-detail')
};

const core = require('./core');
let entrypoint = entrypointMap[core.getPageName()] || (() => undefined);

window.onload = () => entrypoint(core);
