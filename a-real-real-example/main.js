import './style.css';
import javascriptLogo from './javascript.svg';
import { setupCounter } from './counter.js';

import MagicString from 'magic-string';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector('#counter'));

/* --------------- */

const str = new MagicString('problems = 42');

str.update(0, 8, 'answer');
console.log(str.toString());

str.update(11, 13, '99');
console.log(str.toString());

str.prepend('var ').append(';');
console.log(str.toString());

/*
const map = str.generateMap({
	source: 'source.js',
	file: 'converted.js',
	includeContent: true
});

fs.writeFileSync('converted.js', str.toString());
fs.writeFileSync('converted.js.map', map.toString());
 */

