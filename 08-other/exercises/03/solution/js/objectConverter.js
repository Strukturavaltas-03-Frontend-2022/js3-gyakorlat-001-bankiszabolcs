const objectConverter = {
  arrayToMap(array) { // pipa
    const mapObj = new Map();
    array.map((item, index) => mapObj.set(index, item));
    return mapObj;
  },
  arrayToSet(array) { // pipa
    return new Set(array);
  },
  setToMap(set) {
    const mapObj = new Map();
    let i = 0;
    set.forEach((element) => {
      mapObj.set(i, element);
      i++;
    });
    return mapObj;
  },
  setToArray(set) { // PIPA
    const randomArr = [];
    let i = 0;
    set.forEach((element) => {
      randomArr.push(element);
      i++;
    });
    return randomArr;
  },
  mapToArray(map) {
    const randomArr = [];
    for (const i of map.values()) {
      randomArr.push(i);
    }

    return randomArr;
  },
  mapToSet(map) {
    const randomSet = new Set();
    for (const item of map.values()) {
      randomSet.add(item);
    }
    return randomSet;
  },
};
export default objectConverter;
