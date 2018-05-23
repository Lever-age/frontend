let entrypointMap = {
  'raceList': require('./race-list'),
  'candidateDetail': require('./candidate-detail'),
  'raceDetail': require('./race-detail')
};

const core = require('./core');
let entrypoint = entrypointMap[core.getPageName()] || (() => undefined);

window.onload = () => entrypoint(core);
