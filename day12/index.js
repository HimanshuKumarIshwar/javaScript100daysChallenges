
const removeDyplicates = (arr)=> {
      
let newArr = [...new Set(arr)]

return newArr;
}


console.log(removeDyplicates([1, 2, 3, 2, 1, 4]));

