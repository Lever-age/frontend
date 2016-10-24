var apiRoot = {
  prod: 'http://api.leveragecampaignfinance.org',
  dev: '/test-data'
};

function setApiRoot (root, suffix) {
  return function getEndpoint (path) {
    return root + path + (suffix || '');
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
  var params = getParams();
  if (!params.id) return;
  var getEndpoint;
  if (params.test) {
    getEndpoint = setApiRoot(apiRoot.dev, '.json');
  } else {
    getEndpoint = setApiRoot(apiRoot.prod);
  }
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
