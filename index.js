var pug = require('pug');

function render(resume) {
	return pug.compileFile('./templates/index.pug')(resume);
}

module.exports = {
	render: render
};
