
module.exports = (core) => {
  let html = document.getElementById('mustache-template').innerHTML;
  let htmlContainer = 'pageContent';
  let slug = core.getUrlParameter('slug') || window.location.pathname.split('/')[2];

  core.getResource('candidates', { candidate_slug: slug }).then((candidate) => {
    console.log(candidate.data[0]);

    candidate.data[0].name_full = `${candidate.data[0].name_first}  ${candidate.data[0].name_last}`;

    let output = core.Mustache.render(html, { candidate: candidate.data[0] });
    document.getElementById(htmlContainer).innerHTML = output;
    document.title = candidate.data[0].name_full;
  }).catch((err) => core.handleError(err, htmlContainer));
};
