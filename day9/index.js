
const calculate = (arr)=> {

    let sum = arr.reduce((accum, curElem)=> (accum + curElem), 0);
    
    return (sum / arr.length) ;

}


console.log(calculate([5, 10, 2, 8]));

