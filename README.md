# my-funcs

[![Travis branch](https://img.shields.io/travis/Willyham/my-funcs.svg)]() [![Coverage Status](https://coveralls.io/repos/Willyham/amd-to-common/badge.svg)](https://coveralls.io/r/Willyham/amd-to-common)

Get a list of all of the named functions you defined in your project

NOTE: This depends on deep-ast which uses synchronous I/O and should not be used at request time.

# API

myFuncs : (filename: String) => (() => Array<String>|Error)

my-funcs exposes one function which takes a filename. the file is loaded and then a [deep-ast](https://github.com/Willyham/deep-ast)
is generated based on the file. The AST is then traversed and each named function is found and returned.

# Install

`npm install --save my-funcs`

# Example

Running on it's own source, my-funcs will generate a list of functions:

```javascript
var myFuncs = require('myFuncs');
console.log(myFuncs('./index.js'));

// ['myFuncs', 'getNames', 'findFunctions', 'findFunction', 'getFunctionNameFromNode']
```
