let num1 = 45;

let num2 = 78;

let num3 = 98;

let MaxNumber =
  num1 > num2 ? (num1 > num3 ? num1 : num3) : num2 > num3 ? num2 : num3;

console.log(MaxNumber);
