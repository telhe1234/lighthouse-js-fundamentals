function concat(arr1, arr2){
  let arr = [];
  if(arr1.length !== 0){
    for(let i = 0; i < arr1.length; i++){
      arr.push(arr1[i]);
    }
  }
  if(arr2.length !== 0){
    for(let i = 0; i < arr2.length; i++){
      arr.push(arr2[i]);
    }
  }
  return arr;
}
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);
