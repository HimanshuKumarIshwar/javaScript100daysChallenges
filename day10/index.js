
const checkEqual = (arr1, arr2)=> {
    
   
 let n = arr1.length;
 let m = arr2.length;

 if(n !== m) return false;
// for(let i = 0; i < n; i++){
//  if(arr1[i] != arr2[i])return false;
    
// }

arr1.every((curElem, index)=> {
  return curElem === arr2[index]
})
return true;

}

console.log(checkEqual([1,2], [1,2]));






