// function sortAscending(arr){

// return arr.sort((a, b) => a-b);


// }

function swap(arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function sortAscending(arr){
    let newArr = [...arr];
    let length = newArr.length;
     for(let i = 0; i<length-1; i++){
        for(let j = 0; j<length-i-1; j++){
            if(newArr[j+1] < newArr[j]){
                swap(newArr, j+1, j);
            }
        }
     }

  return newArr
}


arr = [1,4,3, 6, 4, 7, 8, 3, 2, 44, 33];
console.log(sortAscending(arr));
console.log(arr);