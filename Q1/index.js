function sum(x = 0) {
  let total = x;

  function inner(y) {
    if (y === undefined) return total;
    total += y;
    return inner;
  }

  return inner;
}

console.log(sum(1)(2)(3)(4)(5)()); // Outputs 15
console.log(sum(3)(7)()); // Outputs 10
