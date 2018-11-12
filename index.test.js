const JSDOM = require('jsdom').JSDOM;
const { objectToHtmlTable } = require('./index');

const { document } = new JSDOM('').window;

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

  const htmlTable = objectToHtmlTable(testData, document);

  expect(htmlTable.outerHTML.replace(/\s+/g, '')).toBe(
    `
  <table>
    <tr>
      <th>mountain</th>
      <th>height</th>
      <th>place</th>
    </tr>
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

test('table from objects with different properties', () => {
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

  const htmlTable = objectToHtmlTable(testData, document);

  expect(htmlTable.outerHTML.replace(/\s+/g, '')).toBe(
    `
  <table>
    <tr>
      <th>mountain</th>
      <th>height</th>
      <th>place</th>
      <th>region</th>
    </tr>
    <tr>
      <td>Everest</td>
      <td>8700</td>
      <td>Tibet</td>
      <td></td>
    </tr>
    <tr>
      <td>Monte Bianco</td>
      <td>4801</td>
      <td>Italy</td>
      <td>Valle d'Aosta</td>
    </tr>
  </table>
  `.replace(/\s+/g, '')
  );
});
