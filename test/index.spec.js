import assert from 'assert';
import TwoDimensionalArray from '../src/index';

describe('TwoDimensionalArray', () => {
  const items = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ];
  let array;

  beforeEach(() => {
    array = new TwoDimensionalArray(items);
  });

  afterEach(() => {
    array.clear();
  });

  describe('#stats', () => {
    it('print outs array stats', () => {
      array.stats();
    });
  });

  describe('#add', () => {
    it('add a two-dimensional array', () => {
      const arr = [
        [13, 14, 15, 16],
        [17, 18, 19, 20],
      ];
      array.add(arr);
      array.printPretty();
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
      const column = [0, 0, 0];
      array.addColumn(column);
      array.printPretty();
    });
  });

  describe('#isMember', () => {
    it('return true if array has member', () => {
      array.printPretty();
      assert(array.isMember(1) === true);
    });

    it('return false if array has no member', () => {
      array.printPretty();
      assert(array.isMember(100000) === false);
    });
  });
});
