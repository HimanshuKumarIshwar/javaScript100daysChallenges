// function isPalindrome(str){

//   let arrstr = str.toLowerCase().split("");
//   let n = arrstr.length;
//   for(let i =0; i<n/2; i++){
//     if(arrstr[i] !== arrstr[n-i-1])return false;

//   }

//   return true;


// }


const isPalindrome = (str)=> {

    str = str.toLowerCase().replace(/\W/g, "");
    let rev_str = str.split("").reverse().join("");
   
    return str === rev_str;

}



console.log(isPalindrome("1,2,1"));