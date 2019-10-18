# TypingJS ![](https://badgen.net/github/last-commit/Hilver/TypingJS) ![](https://badgen.net/npm/v/typing-js) ![](https://badgen.net/github/license/Hilver/TypingJS)
**TypingJS** is a small, lightweight and easy to use library for typing strings on your website.

## Install
```
$ npm install --save typingjs
```
## Usage
`index.js`
```
import TypingJs from 'typingjs-js';

const typing = new TypingJs({
	selector: 'typed',
	message: 'Hello from TypingJS!'
});

typing.init();
```
`index.html`
```
<body>
	<div id="typingjs"></div>
	<script src="index.js"></script>
</body>
```
![](https://github.com/Hilver/TypingJS/raw/master/media/sample1.gif)
## Settings
**TypingJS** has a few additional options which can you set:
```
const typed = new TypingJs({
    selector: string, // Tag ID, default: `typingjs`
    message: string, // Text to display, default: 'Test TypingJS...'
    ms: number, // Speed of typing in milliseconds, default: 100
    remove: boolean, // Whether delete text in backspace mode, default: false
    infinity: boolean // Infinity loop, default: false
});
```
## License
> MIT
