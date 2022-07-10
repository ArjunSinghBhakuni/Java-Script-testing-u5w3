
function sumAss(...args){
 const sumValue =[...args].reduce((a,c)=>a+Number(c),0)
 return sumValue;
}



module.exports = sumAss;;