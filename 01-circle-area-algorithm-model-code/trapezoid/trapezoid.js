// calculate area of trapezoid

/*
  input: b1 & b2 & h
    b1 => base one of trapezoid
    b2 => base two of trapezoid
    h => height of trapezoid

  process: area = ((b1 + b2) / 2) * h
  or
  process: area = (b1 + b2) * h / 2


  output: area
*/

function trapezoidArea(b1, b2, h) {
  const area = ((b1 + b2) / 2) * h;
  return area;
}

console.log(trapezoidArea(5, 3, 2)); // 8
console.log(trapezoidArea(8, 6, 5)); // 35
