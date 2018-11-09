class EmptyArrayException extends Error {}

class TypeNotValidException extends Error {}

function getColumns(data) {
  if (!data || !data.length)
    throw new EmptyArrayException('the array is empty');

  const labels = [];
  for (let item of data) {
    if (!(typeof item === 'object' && !Array.isArray(item)))
      throw new TypeNotValidException(
        `the argument passed is ${typeof item}; should be an object`
      );
    for (let label in item) {
      if (
        labels.findIndex(elem => {
          return elem.label === label;
        }) < 0
      ) {
        labels.push({
          label: label,
          type: typeof item[label]
        });
      }
    }
  }
  return labels;
}

module.exports.EmptyArrayException = EmptyArrayException;
module.exports.TypeNotValidException = TypeNotValidException;
module.exports.getColumns = getColumns;
