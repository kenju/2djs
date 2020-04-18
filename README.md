# 2djs [![CircleCI](https://circleci.com/gh/kenju/2djs.svg?style=svg)](https://circleci.com/gh/kenju/2djs)

JavaScript library for 2-dimensional array.

## Install

```bash
npm install --save 2djs
```

## API

### `constructor`

```js
import TwoDimensionalArray from '2djs';
const items = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
const array = new TwoDimensionalArray(items);
```

### `get()`

```js
const items = [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], ];
const array = new TwoDimensionalArray(items);
array.get(); // [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12] ]
```

### `stat()`

```js
console.log(array.stats());
{
  rowSize: 3,
  columnSize: 4
};
```

### `clear()`

```js
array.clear(); // []
```

### `rowSize()`

```js
const items = [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], ];
const array = new TwoDimensionalArray(items);
array.rowSize(); // 3
```

### `columnSize()`

```js
const items = [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], ];
const array = new TwoDimensionalArray(items);
array.columnSize(); // 4
```

### `at(rowPosition, columnPosition)`

```js
const items = [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], ];
const array = new TwoDimensionalArray(items);
array.at(0, 0); // 1
array.at(2, 2); // 11
array.at(10000, 0); // null
```

### `row(position)`

```js
const items = [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], ];
const array = new TwoDimensionalArray(items);
array.row(0); // [1, 2, 3, 4]
array.row(2); // [9, 10, 11, 12]
```

### `column(position)`

```js
const items = [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], ];
const array = new TwoDimensionalArray(items);
array.column(0); // [1, 5, 9]
array.column(2); // [3, 7, 11]
```

### `rows()`

```js
const items = [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], ];
const array = new TwoDimensionalArray(items);
array.rows(); // [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], ]
```

### `columns()`

```js
const items = [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], ];
const array = new TwoDimensionalArray(items);
array.columns(); // [ [ 1, 5, 9 ], [ 2, 6, 10 ], [ 3, 7, 11 ], [ 4, 8, 12 ] ]
```

### `firstRow()`

```js
const items = [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], ];
const array = new TwoDimensionalArray(items);
array.firstRow(); // [1, 2, 3, 4]
```

### `firstColumn()`

```js
const items = [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], ];
const array = new TwoDimensionalArray(items);
array.firstColumn(); // [1, 5, 9]
```

### `lastRow()`

```js
const items = [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], ];
const array = new TwoDimensionalArray(items);
array.lastRow(); // [9, 10, 11, 12]
```

### `lastColumn()`

```js
const items = [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], ];
const array = new TwoDimensionalArray(items);
array.lastColumn(); // [4, 8, 12]
```

### `add(twoDimensionalArray)`

```js
const items = [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], ];
const array = new TwoDimensionalArray(items);
const arr = [ [13, 14, 15, 16], [17, 18, 19, 20] ];
array.add(arr); // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ], [ 13, 14, 15, 16 ], [ 17, 18, 19, 20 ] ]
```

### `addRow(row)`

```js
const items = [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], ];
const array = new TwoDimensionalArray(items);
array.addRow([13, 14, 15, 16]); // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ], [ 13, 14, 15, 16 ] ]
```

### `addColumn(column)`

```js
const items = [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], ];
const array = new TwoDimensionalArray(items);
array.addColumn([2, -1, 1]); // [ [ 1, 2, 3, 4, 2 ], [ 5, 6, 7, 8, -1 ], [ 9, 10, 11, 12, 1 ] ]
```
### `isMember(item)`

```js
const items = [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], ];
const array = new TwoDimensionalArray(items);
array.isMember(1); // true
array.isMember(1000); // false
```

## License

Copyright (c) 2020 kenju

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

