let htmlFileName = __filename.split('/').pop().replace('.js', '.html');

module.exports = (core) => {
  let slug = core.getUrlParameter('slug') || window.location.pathname.split('/')[2];
  let pageCfg = core.cfg.pages[htmlFileName];

  core.getResource('candidates', { candidate_slug: slug }).then((candidate) => {
    console.log(candidate.data[0]);

    candidate.data[0].name_full = `${candidate.data[0].name_first}  ${candidate.data[0].name_last}`;

    // let output = core.Mustache.render(tpl, { candidate: candidate.data[0] });
    // document.getElementById(pageCfg.mainContainer).innerHTML = output;
    // document.title = candidate.data[0].name_full;
    let nodes = core.renderTemplate(pageCfg.mainTemplateId, { candidate: candidate.data[0] });
    core.fillContainer(pageCfg.mainContainer, nodes);
  }).catch((err) => core.handleError(err, pageCfg.mainContainer));
};
