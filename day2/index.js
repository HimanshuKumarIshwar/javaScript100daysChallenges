function generetedHashtag(str) {
  if (str.trim().length >= 280 || str.trim().length == 0) return false;

  let hashStr = "#";

  let strArr = str.split(" ");

//   for (let word of strArr) {
//     let mainWord = "";
//     for (let i = 0; i < word.length; i++) {
//       if (i == 0) {
//         mainWord += word[i].toUpperCase();
//       } else {
//         mainWord += word[i];
//       }
//     }

//     hashStr += mainWord;
//   }


  strArr  = strArr.map((curElem)=> (curElem.replace(curElem[0], curElem[0].toUpperCase())))


  
//   strArr.forEach((element )=> {
//     hashStr +=element;
//   });


  strArr = `#${strArr.join("")}`;



 // return hashStr;

 return strArr;
}



let str = "my name is himanshu Kumar";
console.log(generetedHashtag(str));
