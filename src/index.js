export default class TwoDimensionalArray {
  constructor(items) {
    this.arr = items || [[]];
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
    console.log(output);
  }

  printPretty() {
    this.arr.forEach((row) => {
      console.log(row);
    });
  }

  /**
   * addRow :: [any] -> [any] -> [any]
   */
  addRow(items) {
    this.arr.push(items);
  }

  /**
   * addColumn :: [any] -> [any] -> [any]
   */
  addColumn(items) {
    items.forEach((item, index) => {
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
