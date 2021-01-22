const pug = require('pug');

const templateCompiler = pug.compileFile('view.pug');

console.log(templateCompiler({ name: 'Nour' }));