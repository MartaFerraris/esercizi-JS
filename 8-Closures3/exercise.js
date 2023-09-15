function multiplyByTwo(value) {
  let number = 2;
  function inner() {
    return number * value;
  }
  return inner();
}
const result = multiplyByTwo(4);
console.log(result);