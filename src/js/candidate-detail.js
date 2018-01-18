
module.exports = (core) => {
  let slug = core.getUrlParameter('slug') || window.location.pathname.split('/')[2];
  let pageCfg = core.cfg.pages[core.getPageName()];

  let navTemplate = core.cfg.pagePartials.navigationTemplateId || undefined;
  if (navTemplate) {
    let navItems = core.buildNavigation();
    let nodes = core.renderTemplate(navTemplate, { navigationItems: navItems });
    core.fillContainer(navTemplate, nodes);
  }

  core.getResource('candidates', { candidate_slug: slug }).then((candidate) => {
    if (candidate.data[0]) {
      let candidateData = candidate.data[0];

      candidateData['total_money_donated'] = core.formatCurrency(candidateData['total_money_donated']);
      candidateData['total_money_in_pa'] = core.formatCurrency(candidateData['total_money_in_pa']);
      candidateData['total_money_in_philly'] = core.formatCurrency(candidateData['total_money_in_philly']);
      candidateData['total_money_out_pa'] = core.formatCurrency(candidateData['total_money_out_pa']);
      candidateData['total_money_out_philly'] = core.formatCurrency(candidateData['total_money_out_philly']);

      candidateData.name_full = `${candidateData.name_first}  ${candidateData.name_last}`;
      let nodes = core.renderTemplate(pageCfg.mainTemplateId, { candidate: candidateData });
      core.fillContainer(pageCfg.mainContainer, nodes);
    } else {
      let nodes = core.renderTemplate(core.cfg.pagePartials.notFoundTemplateId, {});
      core.fillContainer(pageCfg.mainContainer, nodes);
    }
  }).catch((err) => core.handleError(err, pageCfg));
};
