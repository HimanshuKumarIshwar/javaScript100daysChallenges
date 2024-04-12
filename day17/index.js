const convertcamelCase = (str) => {
  
  
 return str.trim().split(" ").map((curElem, index)=> {
    if(index === 0)return curElem.toLowerCase();
    return curElem.charAt(0).toUpperCase()+curElem.slice(1).toLowerCase();
   }).join("");
}

const toSnakeCase = (str) => {
    return str.trim().split(" ").map((curElem, index)=> {
        if(index === 0)return curElem.toLowerCase();
        return "_"+curElem.toLowerCase();
    }).join("");
}


console.log(convertcamelCase("hello world himanSHU"));
console.log(toSnakeCase("hello world himanSHU"));