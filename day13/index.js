
const countVowels = (str)=> {

let vowels = "aeiou";
str = str.toLowerCase();
let count = 0;
for(let char of str){
    if(vowels.includes(char)){
        count++;
    }
}

return count;

}


console.log(countVowels("Helloo world"));
console.log(countVowels("Brrrp"));
