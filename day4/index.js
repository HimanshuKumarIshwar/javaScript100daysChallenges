function checkTraingleType(a, b, c){
    if(a === b && b === c){
        return "equilateral"
    }
    else if(a === b ||a === c ||  b===c){
        return "isosceles"
    }else {
        return "scalene"
    }
}


console.log(checkTraingleType(2, 8, 8));