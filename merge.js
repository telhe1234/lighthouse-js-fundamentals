// This function merges concatenates two input arrays 
// and it sorts the resultant array in ascending order using insertion sorting algorithm
function merge(arr1, arr2){
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
  // Insertion sorting algorithm to sort the array
  let length = arr.length;
  for (let i = 1; i < length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
