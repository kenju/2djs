const DEBUG = process.env === 'development';

export default class TwoDimensionalArray {
  constructor(items) {
    this.arr = items.slice();
  }

  get get() {
    return this.arr;
  }

  stats() {
    let maxColumnSize = 0;
    this.arr.forEach((row) => {
      if (row.length > maxColumnSize) {
        maxColumnSize = row.length;
      }
    });
    const output = `
    rows   : ${this.arr.length}
    columns: ${maxColumnSize}
    `;
    // eslint-disable-next-line no-console
    console.log(output);
  }

  printPretty() {
    this.arr.forEach((row) => {
      // eslint-disable-next-line no-console
      console.log(row);
    });
  }

  clear() {
    this.arr = [];
    return this.arr;
  }

  rowSize() {
    return this.arr.length;
  }

  columnSize() {
    let maxColumnSize = 0;
    this.arr.forEach((row) => {
      if (row.length > maxColumnSize) {
        maxColumnSize = row.length;
      }
    });
    return maxColumnSize;
  }

  at(posRow, posCol) {
    try {
      return this.arr[posRow][posCol];
    } catch (e) {
      if (DEBUG) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
      return null;
    }
  }

  row(pos) {
    return this.arr[pos];
  }

  column(pos) {
    return this.arr.map(row => row[pos]);
  }

  rows() {
    return this.arr;
  }

  /**
   * O(n**2)
   */
  columns() {
    const columns = [];
    this.arr.forEach((row) => {
      row.forEach((rowVal, rowPos) => {
        if (!columns[rowPos]) {
          columns[rowPos] = [];
        }
        columns[rowPos].push(rowVal);
      });
    });
    return columns;
  }

  firstRow() {
    return this.arr[0];
  }

  firstColumn() {
    return this.arr.map(row => row[0]);
  }

  lastRow() {
    return this.arr[this.arr.length - 1];
  }

  lastColumn() {
    return this.arr.map(row => row[row.length - 1]);
  }

  add(nestedArray) {
    nestedArray.forEach((row) => {
      this.addRow(row);
    });
    return this.arr;
  }

  addRow(row) {
    this.arr.push(row.slice());
    return this.arr;
  }

  addColumn(column) {
    this.arr = this.arr.map((row, index) => {
      row.push(column[index]);
      return row;
    });
    return this.arr;
  }

  /**
   * isMember :: any -> [any] -> Boolean
   */
  isMember(target) {
    return this.arr.some(row => row.some(item => item === target));
  }
}
