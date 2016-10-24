var apiRoot = 'http://api.leveragecampaignfinance.org';

function setApiRoot (root) {
  return function getEndpoint (path) {
    return root + path;
  }
}

function getParams () {
  if (!window.location.search) return;
  var params = {};
  var qstring = window.location.search.slice(1);
  qstring.split('&').forEach(function (param) {
    [key, val] = param.split('=')
    params[key] = val;
  });
  return params;
}

$(document).ready(function(){
  var getEndpoint = setApiRoot(apiRoot);
  var params = getParams();
  if (!params.id) return;
  var endpoint = getEndpoint('/candidates/' + params.id);
  $.get(endpoint, function(candidate){
    $('#candidate-name').text(candidate.candidate_name);
    var template = $('#campaign-panel-template').html();
    candidate.campaigns.forEach(function (campaign) {
      var element = $.parseHTML(Mustache.render(template, campaign));
      $('#campaigns-panel').append(element);
    });
  });
});
