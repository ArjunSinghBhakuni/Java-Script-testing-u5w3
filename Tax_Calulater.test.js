const tax = require("./Tax_Calculater")

describe("Calutate tax " , ()=>{

  test( "amount is 250000 ",()=>{
   expect(tax(250000)).toBe("No Tax")
  });
  test( "amount is 500000",()=>{
   expect(tax(500000)).toBe("No Tax")
  });
  test( "amount is 2000000",()=>{
   expect(tax(200000)).toBe("No Tax")
  });
  test( "amount is 250000 ",()=>{
   expect(tax(250000)).toBe("No Tax")
  });
  test( "amount is 250000 ",()=>{
   expect(tax(250000)).toBe("No Tax")
  });
  test( "amount is 250000 ",()=>{
   expect(tax(250000)).toBe("No Tax")
  });
  test( "amount is 250000 ",()=>{
   expect(tax(250000)).toBe("No Tax")
  });
  test( "amount is 250000 ",()=>{
   expect(tax(250000)).toBe("No Tax")
  });
 

})