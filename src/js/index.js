module.exports = (core) => {
  let local = { cfg: core.cfg.pages[core.getPageName()] };
  local.context = { race_detail_pathname: core.cfg.pathnames.raceDetail };

  core.getResource(local.cfg.resource).then((races) => {
    local.context.races = races.data || [];
    local.cfg.renderMap.forEach((map) => {
      let fragment = core.renderTemplate(map.template, local.context);
      core.fillContainer(map.container, fragment);
    });
  });
};
