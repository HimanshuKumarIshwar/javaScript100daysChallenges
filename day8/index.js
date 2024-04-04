
// function factorial(num){
//     if(num == 0)return 1;
//     return factorial(num-1) * num;

// }

// console.log(factorial(5));


function fact(num){
    if(num < 0)num = -(num);
    if(num == 0)return 1;
     let res = 1;
     for(let i = 1; i<=num; i++){
        res *=i;
     }

     return res;

}


console.log(fact(5));