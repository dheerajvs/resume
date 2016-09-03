var pug = require('pug');
var qr = require('qr-image');

function qrtext(resume) {
  var basics = resume.basics;
  var qrtext = 'MECARD:N:' + basics.name +
    ';TEL:' + basics.phone +
    ';EMAIL:' + basics.email +
    ';';
  console.log('qrtext: ' + qrtext);
  return qrtext;
}

function qrsvg(qrtext) {
  var svg = qr.imageSync(qrtext, {type: 'svg', ec_level: 'L'});
  // console.log('svg: ' + svg);
  // var svg = qr.image(qrtext, {type: 'svg', ec_level: 'L'});
  // svg.pipe(require('fs').createWriteStream('card.svg'));
  return svg;
}

function render(resume) {
  // var resume.basics.config.qr = qrsvg(qrtext(resume));
  return pug.compileFile('./templates/index.pug')(resume);
}

module.exports = {
  render: render
};
