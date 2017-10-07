const { getResource, Mustache, handleError } = require('./core.js');

let urlParams = new URLSearchParams(window.location.search);
let slug = urlParams.get('slug') || window.location.pathname.split('/')[2];
// console.log(slug);
// console.log(window.location.pathname);

let html = document.getElementById('mustache-template').innerHTML;
let htmlContainer = 'pageContent';

getResource('candidates', { slug }).then((candidate) => {
  console.log(candidate.data[0]);

  candidate.data[0].name_full = `${candidate.data[0].name_first}  ${candidate.data[0].name_last}`;

  let output = Mustache.render(html, { candidate: candidate.data[0] });
  document.getElementById(htmlContainer).innerHTML = output;
  document.title = candidate.data[0].name_full;
}).catch((err) => handleError(err, htmlContainer));
