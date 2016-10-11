# round-to-value

Rounds given value to exact value

## Install

Node

```
npm install round-to-value --save
```

## Examples

Node

```javascript
let RoundFunctions = require('round-to-value');

let val = 0.07032;
let roundTo = 0.0005;

console.info( RoundFunctions.round(val, roundTo) ); //Outputs ==>> 0.07050000000000001
console.info( RoundFunctions.round(val, roundTo, true) ); //Outputs ==>> 0.0705

let val1 = 123456789;
let roundTo1 = 500;
console.info( RoundFunctions.floor(val1, roundTo1) ); //Outputs ==>> 123456500
console.info( RoundFunctions.ceil(val1, roundTo1) ); //Outputs ==>> 123457000
```

## Methods

### `round(value, roundToValue, [exactPrecision=false])` | `ceil(value, roundToValue, [exactPrecision=false])` | `floor(value, roundToValue, [exactPrecision=false])`

Rounding functions like in Math lib. params:

* `value` *number* - value, that need to be rounded
* `roundToValue` *number* - value to round to
* `exactPrecision` *number* - by default: `false`. Fixes issue with floating decimals like: `0.07050000000000001` => `0.0705`

## Change list

### Version 1.0.0

* Initial version