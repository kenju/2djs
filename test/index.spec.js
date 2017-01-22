import TwoDimensionalArray from '../src/index';

describe('TwoDimensionalArray', () => {
  const items = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ];
  const array = new TwoDimensionalArray(items);
  describe('#stats', () => {
    it('print outs array stats', () => {
      array.stats();
    });
  });

  describe('#addRow', () => {
    it('add row', () => {
      const row = [13, 14, 15, 16];
      array.addRow(row);
      array.printPretty();
    });
  });

  describe('#addColumn', () => {
    it('add column', () => {
      const column = [0, 0, 0, 0];
      array.addColumn(column);
      array.printPretty();
    });
  });
});
