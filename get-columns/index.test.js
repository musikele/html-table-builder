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
      mountain: 'Monte Bianco',
      height: 4801,
      place: 'Italy'
    }
  ];

  expect(getColumns(testData)).toEqual([
    {
      label: 'mountain',
      type: 'string'
    },
    {
      label: 'height',
      type: 'number'
    },
    {
      label: 'place',
      type: 'string'
    }
  ]);
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

  expect(getColumns(testData)).toEqual([
    {
      label: 'mountain',
      type: 'string'
    },
    {
      label: 'height',
      type: 'number'
    },
    {
      label: 'place',
      type: 'string'
    },
    {
      label: 'region',
      type: 'string'
    }
  ]);
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
