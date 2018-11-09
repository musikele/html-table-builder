const { getColumns } = require('./get-columns/');

function objectToHtmlTable(data) {
  if (!data) return null;
  let html = '<table>';
  const columns = getColumns(data);
  html += '</table>';
  return html;
}

module.exports.objectToHtmlTable = objectToHtmlTable;
