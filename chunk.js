const chunkArray = (arr, len) => {
  // Init chunked arr
  const chunkedArr = [];
  // loop through the arr
  arr.forEach((val) => {
    // get last element
    const last = chunkedArr[chunkedArr.length - 1];
    // check if last and if last length is equal to the chunk len
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });
  return chunkedArr;
};
module.exports = chunkArray;
