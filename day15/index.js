

const sumofSqr = (arr)=> {
  
     return arr.reduce((accum, curElem) => accum + curElem**2, 0);

}

console.log(sumofSqr([1 ,2, 3, 0]));


