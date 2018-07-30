var pug = require('pug');

var source = 'img(src="foo.png")';

var html = pug.render(source);
console.log(html);
// => '<img src="foo.png"/>'

var html2 = pug.render(source, {doctype: 'xml'});
console.log(html2);
// => '<img src="foo.png"></img>'

var html3 = pug.render(source, {doctype: 'html'});
console.log(html3);
// => '<img src="foo.png">'
