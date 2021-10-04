function range (start, end, step){
  if((start === undefined || end === undefined || step === undefined) || (start > end) || (step === 0 || step < 0)){
    return [];
  } else {
    let numArray = [];
    for(let num = start; num <= end; num += step){
      numArray.push(num);
    }
    return numArray;
  } 
  }
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
// console.log(range(undefined,undefined,2));
// console.log(range(9, 5, 2));
// console.log(range(0, 10, 0));
// console.log(range(0, 10, -2));
