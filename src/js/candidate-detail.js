
module.exports = (core) => {
  let htmlFileName = __filename.split('/').pop().replace('.js', '.html');
  let slug = core.getUrlParameter('slug') || window.location.pathname.split('/')[2];
  let pageCfg = core.cfg.pages[htmlFileName];

  core.getResource('candidates', { candidate_slug: slug }).then((candidate) => {
    if (candidate.data[0]) {
      console.log(candidate.data[0]);

      candidate.data[0].name_full = `${candidate.data[0].name_first}  ${candidate.data[0].name_last}`;
      let nodes = core.renderTemplate(pageCfg.mainTemplateId, { candidate: candidate.data[0] });
      core.fillContainer(pageCfg.mainContainer, nodes);
    } else {
      core.fillContainer(pageCfg.mainContainer, 'Candidate not found');
    }
  }).catch((err) => core.handleError(err, pageCfg.mainContainer));
};
