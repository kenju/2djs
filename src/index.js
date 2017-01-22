export default class TwoDimensionalArray {
  constructor(items) {
    this.arr = items || [[]];
  }

  printPretty() {
    this.arr.forEach((row) => {
      console.log(row);
    });
  }
}
