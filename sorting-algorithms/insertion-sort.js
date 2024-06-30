function insertionSort1(arr) {
  for(let i = 1; i<arr.length; i++){
    let key = arr[i];
    let j = i-1;
    for(; j>=0; j--){
      if(arr[j] > key){
        arr[j+1] = arr[j];
      }else{
        break;
      }
    }
    arr[j+1] = key;
  }
  return arr;
}

console.log(insertionSort1([9,5,1,4,3]));


function insertionSort2(array) {
  // Start from the second element since the first element is already "sorted"
  for (let i = 1; i < array.length; i++) {
    let currentValue = array[i]; // This is the card we're trying to insert
    let j = i - 1;

    // Compare the currentValue with the sorted part of the array
    while (j >= 0 && array[j] > currentValue) {
      // Shift the larger value to the right
      array[j + 1] = array[j];
      j--;
    }

    // Insert the currentValue into the correct position
    array[j + 1] = currentValue;
  }

  return array; // The array is now sorted
}

console.log(insertionSort2([9,5,1,4,3]));
