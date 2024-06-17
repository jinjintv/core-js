// let pow = (numeric,powerCount)=>{

//   let result = 1;

//   for(let i = 0; i < powerCount; i++){
//     result *= numeric
//   }
//   return result;
// };

const pow = (numeric, powerCount) => {
  Array(powerCount)
    .fill(null)
    .reduce((acc, cur) => {
      return (acc *= cur);
    }, 1);
};
