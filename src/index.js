const DEBUG = process.env === 'development';

export default class TwoDimensionalArray {
  constructor(items) {
    this.arr = items.slice();
  }

  get get() {
    return this.arr;
  }

  /**
   * O(n)
   */
  printPretty() {
    this.arr.forEach((row) => {
      // eslint-disable-next-line no-console
      console.log(row);
    });
  }

  /**
   * O(n)
   */
  stats() {
    return {
      rowSize: this.rowSize(),
      columnSize: this.columnSize(),
    };
  }

  /**
   * O(1)
   */
  clear() {
    this.arr = [];
    return this.arr;
  }

  /**
   * O(1)
   */
  rowSize() {
    return this.arr.length;
  }

  /**
   * O(n)
   */
  columnSize() {
    let maxColumnSize = 0;
    this.arr.forEach((row) => {
      if (row.length > maxColumnSize) {
        maxColumnSize = row.length;
      }
    });
    return maxColumnSize;
  }

  /**
   * O(1)
   */
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

  /**
   * O(1)
   */
  row(pos) {
    return this.arr[pos];
  }

  /**
   * O(n)
   */
  column(pos) {
    return this.arr.map(row => row[pos]);
  }

  /**
   * O(1)
   */
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

  /**
   * O(1)
   */
  firstRow() {
    return this.arr[0];
  }

  /**
   * O(n)
   */
  firstColumn() {
    return this.arr.map(row => row[0]);
  }

  /**
   * O(1)
   */
  lastRow() {
    return this.arr[this.arr.length - 1];
  }

  /**
   * O(n)
   */
  lastColumn() {
    return this.arr.map(row => row[row.length - 1]);
  }

  /**
   * O(n)
   */
  add(nestedArray) {
    nestedArray.forEach((row) => {
      this.addRow(row);
    });
    return this.arr;
  }

  /**
   * O(1)
   */
  addRow(row) {
    this.arr.push(row.slice());
    return this.arr;
  }

  /**
   * O(n)
   */
  addColumn(column) {
    this.arr = this.arr.map((row, index) => {
      row.push(column[index]);
      return row;
    });
    return this.arr;
  }

  /**
   * O(n)
   * isMember :: any -> [any] -> Boolean
   */
  isMember(target) {
    return this.arr.some(row => row.some(item => item === target));
  }
}
