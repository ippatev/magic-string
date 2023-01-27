import MagicString from 'magic-string';
import fs from 'fs';

const str = new MagicString('problems = 42');

str.update(0, 8, 'answer');
str.toString();

str.update(11, 13, '99');
str.toString();

str.prepend('var ').append(';');
str.toString();

const map = str.generateMap({
	source: 'source.js',
	file: 'converted.js',
	includeContent: true
});

fs.writeFileSync('converted.js', str.toString());
fs.writeFileSync('converted.js.map', map.toString());
