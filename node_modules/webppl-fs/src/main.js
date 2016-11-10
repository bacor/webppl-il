var fs = require('fs');

module.exports = {

  node: fs,

  read: function(fn) {
    return fs.readFileSync(fn, 'utf8');
  },

  write: function(fn, data) {
    return fs.writeFileSync(fn, data);
  }

};
