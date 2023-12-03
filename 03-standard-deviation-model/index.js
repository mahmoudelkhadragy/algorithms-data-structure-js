// code to calculate standard deviation

let sd = (ave = n = a = b = 0);
let x = [];

n = +prompt("n=?");

console.log(n);

for (let i = 0; i < n; i++) {
  x[i] = +prompt(`x[${i}]`);
  console.log("i =>", x[i]);
  ave += x[i];
}
ave = ave / n;

for (let i = 0; i < x.length; i++) {
  a += Math.pow(x[i] - ave, 2);
}

b = a / n;

sd = Math.sqrt(b);
console.log(sd);
