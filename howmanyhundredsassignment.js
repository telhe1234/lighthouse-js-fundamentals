// howManyHundreds Assignment
// This function is given a number, it returns how many hundreds fit 
// into that number.
function howManyHundreds(num){
  const hundredsNum = Math.floor(num /100);
  return hundredsNum;
}
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);