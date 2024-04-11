
const isPowerOfTwo = (num)=> {
    return num % 2 === 0;
}

const isPowerOfTwo2 = (num)=> {
  return (num & (num-1)) === 0;
}
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo2(8));
