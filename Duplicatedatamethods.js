// Method 1
const removeDuplicates = (array) => [...new Set(array)];
// method 2
const removeDuplicates1 = (array) => {
  const hashTable = {};
  return array.filter((element) =>
    hashTable.hasOwnProperty(element) ? false : (hashTable[element] = true)
  );
};
// method 3
const removeDuplicates2 = (array) => {
  array.sort();
  return array.filter((element, index) => element !== array[index - 1]);
};
