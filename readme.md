# TypedJS
**TypedJS** is a small, lightweight and easy to use library for typing strings on your website.

## Install
```
$ npm install --save typedjs
```
## Usage
`index.js`
```
import TypedJs from 'typedjs';

const typed = new TypedJs({
	selector: 'typed',
	message: 'Hello from TypedJS!'
});

typed.init();
```
`index.html`
```
<body>
	<div id="typed"></div>
	<script src="index.js"></script>
</body>
```
![](https://github.com/Hilver/TypedJS/raw/master/mesia/sample1.gif)
## Settings
**TypedJS** has a few additional options which can you set:
```
const typed = new TypedJs({
    selector: string, // Tag ID, default: `typed`
    message: string, // Text to display, default: 'Test TypedJS...'
    ms: number, // Speed of typing in milliseconds, default: 100
    remove: boolean, // Whether delete text in backspace mode, default: false
    infinity: boolean // Infinity loop, default: false
});
```
## License
> MIT
