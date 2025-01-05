function foo(a, b) {
  // Explicit type conversion using parseInt
  a = parseInt(a, 10);
  b = parseInt(b, 10);

  // Handle NaN cases
  if (isNaN(a) || isNaN(b)) {
    return 'Invalid input: Please provide numbers.';
  }

  return a + b;
}

console.log(foo(5, '5')); // Output: 10
console.log(foo('abc', 5)); // Output: Invalid input: Please provide numbers.