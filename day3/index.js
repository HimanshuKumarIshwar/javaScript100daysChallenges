// function countChar(word, char){
//     let count = 0;
//     for(let ch of word){
//         if(ch.toUpperCase() === char.toUpperCase()){
//             count++;
//         }
//     }
//     return count;
// }


const countChar = (word, char)=> {
  word = word.toLowerCase();
  char = char.toLowerCase();


  word = word.split("");

 return  word.reduce((count, curr)=>{
         
    if(curr === char)count++;
    return count;
  },0)
 
}

console.log(countChar("MissIssippi", "I"));
