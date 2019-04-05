const n = prompt('positive integer number');

let sum = 0;

for (let i = 1; i <= n; i += 1) {
  sum += i;
}

console.log(`${sum} is sum of squares of integers up to and including ${n}`);
