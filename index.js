var pug = require('pug');
var qr = require('qr-image');

function qrtext(resume) {
  var basics = resume.basics;
  return 'MECARD:N:' + basics.name +
    ';TEL:' + basics.phone +
    ';EMAIL:' + basics.email +
    ';';
}

function qrsvg(qrtext) {
  return qr.imageSync(qrtext, {type: 'svg', ec_level: 'L'});
}

function render(resume) {
  resume.qr = qrsvg(qrtext(resume));
  return pug.compileFile('./templates/index.pug')(resume);
}

module.exports = {
  render: render
};
