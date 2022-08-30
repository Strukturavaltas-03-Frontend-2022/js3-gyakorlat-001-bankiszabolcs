const removeDuplicatesFromArray = function (array = []) {
  return [...new Set(array)];
};

export default removeDuplicatesFromArray;
