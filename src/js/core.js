
var fs = require('fs');


var allCfg  = JSON.parse(fs.readFileSync(__dirname + '/config.json'));
var nodeEnv = process.env.NODE_ENV || 'development';
var cfg     = allCfg[nodeEnv];
