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

  addRow(items) {
    this.arr.push(items);
  }

  addColumn(items) {
    items.forEach((item, index) => {
      const row = this.arr[index];
      row.push(item);
    });
  }
}
