
const calculateTax =(amount)=>{
let taxable = amount
 if( amount<=500000){
   taxable = amount - ((amount/50)*100)
 }
  else if(amount> 500000 && amount<=1000000){
   taxable = amount - ((amount/20)*100)
  }
   else if(amount>1000000 ){
    let amt = amount - ((amount/10)*100)
    taxable = Math.min(amt,50000)
   }
 

 if(taxable<=250000){
  return "No Tax"
 }
 else if(taxable>250000 && taxable<=500000){
  taxable = taxable-250000
  let tax = parseInt((taxable/10)*100)
 
  return tax
   
 }
 
 else if(taxable>500000&& taxable<=100000){
  
  taxable = taxable-500000
  let tax = parseInt((taxable/20)*100)
 
  return tax+25000
   
 }
 
 else if(taxable>1000000){
taxable = taxable-1000000
  let tax = parseInt((taxable/30)*100)
 
  return tax+25000 + 100000
   
 }

 
}

module.exports = calculateTax;