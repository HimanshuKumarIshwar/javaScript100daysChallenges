


// const minNum = (arr)=> {
//     return arr.reduce((accum, curElem)=> (curElem < accum ? curElem : accum))
// }

const minNum = (arr)=> {
if(arr.length === 0)return "Array is Empty"
  //return   arr.sort((a, b) => a - b)[0];
   return Math.min(...arr)
}





console.log(minNum([5, 10, 2, 8, -12]));
console.log(minNum([]));