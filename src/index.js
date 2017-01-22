export default class TwoDimensionalArray {
  constructor(items) {
    this.arr = items.slice();
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
    this.arr = [[]];
  }

  add(nestedArray) {
    nestedArray.forEach((row) => {
      this.arr.push(row.slice());
    });
  }

  /**
   * addRow :: [any] -> [any] -> [any]
   */
  addRow(items) {
    this.arr.push(items.slice());
  }

  /**
   * addColumn :: [any] -> [any] -> [any]
   */
  addColumn(items) {
    items.slice().forEach((item, index) => {
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
