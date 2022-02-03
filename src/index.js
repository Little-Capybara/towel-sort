
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!Array.isArray(matrix)){
    return [];
  }
  let arr = matrix;
  let result = [];
  for (let i=1; i<matrix.length; i+=2) {
    arr[i].reverse();
  }
  for (let i=0; i<matrix.length; i++) {
    result = result.concat(arr[i]);
  }
  return result;

}
