const array = [[[1, 2], [[3, [10, [20]]]]], 4];

function flattenArray(array) {
  const temp = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      temp.push(...flattenArray(element));
    } else {
      temp.push(element);
    }
  }
  return temp;
}

console.log(flattenArray(array));
