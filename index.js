const { getColumns } = require('./get-columns/');

function objectToHtmlTable(data, document) {
  const doc = document || window.document;

  if (!data) return null;
  let table = doc.createElement('table');

  //get columns
  const columns = getColumns(data);

  //build header
  const tr = doc.createElement('tr');
  table.appendChild(tr);
  for (const column of columns) {
    const th = doc.createElement('th');
    const columnText = doc.createTextNode(column.label);
    th.appendChild(columnText);
    tr.appendChild(th);
  }

  //data is in the form { a : ..., b : ... }
  data.forEach(item => {
    const tr = doc.createElement('tr');
    for (const column of columns) {
      const td = doc.createElement('td');
      const textNode = item[column.label] || '';
      td.appendChild(doc.createTextNode(textNode));
      tr.appendChild(td);
    }
    table.appendChild(tr);
  });
  return table;
}

module.exports = { objectToHtmlTable };
