// Longest word in a string
let str = "watch thapa Technical javascript course on youTube"


function findLongestWord(str) {
    if (!(str) || !(str.trim())) return false;

    str = str.trim();
    let arr = str.split(" ");
    // let ans = ""
    // for (word of arr) {
    //     if (word.length > ans.length) {
    //         ans = word;
    //     }
    // }

    // return ans;

  return arr.reduce((accum, curword)=> (curword.length > accum.length ? curword : accum), "")

}



console.log(findLongestWord(" a4$ T&*^  "));









