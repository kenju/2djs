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

  describe('#rowSize', () => {
    it('return the size of rows', () => {
      assert(array.rowSize() === 3);
    });
  });

  describe('#columnSize', () => {
    it('return the size of columns', () => {
      assert(array.columnSize() === 4);
    });
  });

  describe('#at', () => {
    it('return the value of given position', () => {
      assert(array.at(0, 0) === 1);
      assert(array.at(2, 2) === 11);
      assert(array.at(10000, 0) === null);
    });
  });

  describe('#firstRow', () => {
    it('return first row', () => {
      const firstRow = items[0];
      array.firstRow().forEach((columnVal, index) => {
        assert(columnVal === firstRow[index]);
      });
    });
  });

  describe('#firstColumn', () => {
    it('return first column', () => {
      const firstColumn = [1, 5, 9];
      array.firstColumn().forEach((rowVal, index) => {
        assert(rowVal === firstColumn[index]);
      });
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
      const column = [2, -1, 1];
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
