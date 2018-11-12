class EmptyArrayException extends Error {}

class TypeNotValidException extends Error {}

function getColumns(data) {
  if (!data || !data.length)
    throw new EmptyArrayException('the array is empty');

  const labels = {};
  let order = 0;

  for (let item of data) {
    if (!(typeof item === 'object' && !Array.isArray(item)))
      throw new TypeNotValidException(
        `the argument passed is ${typeof item}; should be an object`
      );
    for (const label in item) {
      if (Object.keys(labels).find(ord => labels[ord].label === label))
        continue;
      labels[order] = {
        type: typeof item[label],
        label
      };
      order++;
    }
  }

  //build iterator to get labels in the right order
  labels[Symbol.iterator] = function*() {
    const keys = Object.keys(labels);
    for (let i = 0; i < keys.length; i++) {
      yield labels[keys[i]];
    }
  };

  Object.defineProperty(labels, Symbol.iterator, {
    enumerable: false
  });

  return labels;
}

module.exports = { EmptyArrayException, TypeNotValidException, getColumns };
