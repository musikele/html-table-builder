const { objectToHtmlTable } = require('./index');

test('show a simple table from a simple object', () => {
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

  const htmlTableString = objectToHtmlTable(testData);

  expect(htmlTableString).toBe(
    `
  <table>
    <th>
      <td>mountain</td>
      <td>height</td>
      <td>place</td>
    </th>
    <tr>
      <td>Everest</td>
      <td>8700</td>
      <td>Tibet</td>
    </tr>
    <tr>
      <td>Monte Bianco</td>
      <td>4801</td>
      <td>Italy</td>
    </tr>
  </table>
  `.replace(/\s+/g, '')
  );
});
