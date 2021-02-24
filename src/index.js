module.exports = function reverse (n) {
  let result = String(n).split('').reverse();
  if (n < 0) {
    result.pop();
  }
  return result.join('');
}
