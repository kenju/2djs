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
  }

  addRow(row) {
    this.arr.push(row.slice());
  }

  addColumn(column) {
    column.slice().forEach((item, index) => {
      const row = this.arr[index];
      row.push(item);
    });
  }

  /**
   * isMember :: any -> [any] -> Boolean
   */
  isMember(target) {
    return this.arr.some(row => row.some(item => item === target));
  }
}
