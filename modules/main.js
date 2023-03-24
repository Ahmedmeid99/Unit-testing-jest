
function say() {
  return "hello world"
}

function sum(a, b) {
  return (a || 0) + (b || 0)
}

// how to  sum numbers withing reduce
// numbers.reduce((pre, cur) => pre + cur, initialvalue)
function sumAll(...numbers) {
  return numbers.reduce((pre, cur) => pre + cur, 0)
}
module.exports = {
  say, sum, sumAll
}