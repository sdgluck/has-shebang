# has-shebang

> check if string or file contains shebang

Made with ❤ at [@outlandish](http://www.twitter.com/outlandish)

## Install

```sh
npm install --save has-shebang
```

```sh
yarn add has-shebang
```

## Import

```js
// ES2015
import hasShebang from 'has-shebang'
```

```sh
// CommonJS
var hasShebang = require('has-shebang')
```

## Usage

### `hasShebang(input) : Boolean`

Check if a file or string has a shebang. 

- __input__ {String} (required) string to check or path to file

Returns true if has shebang, false otherwise.

### Example

```js
import hasShebang from 'has-shebang'

hasShebang('#!/usr/bin/env/node') //=> true
hasShebang('#spongebob') //=> false
```

## Contributing

All pull requests and issues welcome!

If you're not sure how, check out the [great video tutorials on egghead.io](http://bit.ly/2aVzthz)!

## License

MIT © [Sam Gluck](github.com/sdgluck)
