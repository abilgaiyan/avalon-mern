var localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: 'elazylt' }, function(err, tunnel) {
  console.log('LT running')
});