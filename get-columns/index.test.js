const {
  getColumns,
  EmptyArrayException,
  TypeNotValidException
} = require('./index');

test('All objects have the same labels', () => {
  const testData = [
    {
      mountain: 'Everest',
      height: 8700,
      place: 'Tibet'
    },
    {
      height: 4801,
      place: 'Italy',
      mountain: 'Monte Bianco'
    }
  ];

  expect(getColumns(testData)).toEqual({
    0: {
      label: 'mountain',
      type: 'string'
    },
    1: {
      label: 'height',
      type: 'number'
    },
    2: {
      label: 'place',
      type: 'string'
    }
  });
});

test('Objects have different numbers of labels', () => {
  const testData = [
    {
      mountain: 'Everest',
      height: 8700,
      place: 'Tibet'
    },
    {
      mountain: 'Monte Bianco',
      height: 4801,
      place: 'Italy',
      region: 'Valle d\'Aosta'
    }
  ];

  expect(getColumns(testData)).toEqual({
    0: {
      label: 'mountain',
      type: 'string'
    },
    1: {
      label: 'height',
      type: 'number'
    },
    2: {
      label: 'place',
      type: 'string'
    },
    3: {
      label: 'region',
      type: 'string'
    }
  });
});

test('empty array should return exception', () => {
  expect(() => {
    getColumns([]);
  }).toThrow(EmptyArrayException);
});

test('array in data should be skipped', () => {
  expect(() => {
    getColumns([{}, []]);
  }).toThrow(TypeNotValidException);
});

test('iterator should return stuff in the right order', () => {
  const testData = [
    {
      mountain: 'Everest',
      height: 8700,
      place: 'Tibet'
    },
    {
      mountain: 'Monte Bianco',
      height: 4801,
      place: 'Italy',
      region: 'Valle d\'Aosta'
    }
  ];

  const columnsObj = getColumns(testData);
  expect(columnsObj[0].label).toBe('mountain');
  expect(columnsObj[1].label).toBe('height');
  expect(columnsObj[2].label).toBe('place');
  expect(columnsObj[3].label).toBe('region');
});
