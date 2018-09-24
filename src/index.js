module.exports = function getZerosCount(number) {
  let count = 0, i = 5;
  while (i <= number){
      count += Math.trunc(number / i);
      i *= 5;
  }
  return count;
}
