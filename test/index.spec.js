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

  describe('#clear', () => {
    it('clear array instance', () => {
      assert(array.get.length === 3);
      array.clear();
      assert(array.get.length === 0);
    });
  });

  describe('#lastRow', () => {
    it('return last row', () => {
      const lastRow = items[items.length - 1];
      array.lastRow().forEach((columnVal, index) => {
        assert(columnVal === lastRow[index]);
      });
    });
  });

  describe('#lastColumn', () => {
    it('return last column', () => {
      const lastColumn = [4, 8, 12];
      array.lastColumn().forEach((rowVal, index) => {
        assert(rowVal === lastColumn[index]);
      });
    });
  });

  describe('#add', () => {
    it('add a two-dimensional array', () => {
      const arr = [
        [13, 14, 15, 16],
        [17, 18, 19, 20],
      ];
      array.add(arr);
    });
  });

  describe('#addRow', () => {
    it('add row', () => {
      const row = [13, 14, 15, 16];
      array.addRow(row);
      assert(array.get.length === 4);
      array.lastRow().forEach((columnVal, index) => {
        assert(columnVal === row[index]);
      });
    });
  });

  describe('#addColumn', () => {
    it('add column', () => {
      // TODO: this has side effect ( because copying reference )
      const column = [0, 0, 0];
      array.addColumn(column);

      assert(array.get.length === 3);
      array.get.forEach((row, index) => {
        assert(row.length === 5);
        assert(row[row.length - 1] === column[index]);
      });
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
