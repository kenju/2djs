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
    it('return JSON of stats object', () => {
      const stats = array.stats();
      Object.entries(stats).forEach(([key, value]) => {
        if (key == 'rowSize') {
          assert(value == 4);
        } else if (key == 'columnSize') {
          assert(value == 3);
        }
      });
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

  describe('#row', () => {
    it('return the row of given position', () => {
      const row0 = array.row(0);
      const row2 = array.row(2);
      assert(row0 === items[0]);
      assert(row2 === items[2]);
      row0.forEach((rowVal, index) => assert(rowVal === items[0][index]));
      row2.forEach((rowVal, index) => assert(rowVal === items[2][index]));
    });
  });

  describe('#column', () => {
    it('return the column of given position', () => {
      const column0 = array.column(0);
      const column2 = array.column(2);
      column0.forEach((columnVal, index) => assert(columnVal === [1, 5, 9][index]));
      column2.forEach((columnVal, index) => assert(columnVal === [3, 7, 11][index]));
    });
  });

  describe('#rows', () => {
    it('return the array of rows', () => {
      const rows = array.rows();
      rows.forEach((row, index) => {
        row.forEach((rowVal, rowPos) => assert(rowVal === items[index][rowPos]));
      });
    });
  });

  describe('#columns', () => {
    it('return the array of columns', () => {
      const columns = array.columns();
      columns.forEach((column, index) => {
        column.forEach((columnVal, columnPos) => assert(columnVal === items[columnPos][index]));
      });
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
