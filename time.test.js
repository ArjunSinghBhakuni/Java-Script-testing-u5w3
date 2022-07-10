const findTime = require("./time")

describe (("find the times"),()=>{

 test("senconds", () => { 
  expect(findTime(5200)).toBe("00 hour 00 minute 05 seconds")
  })

  
 test("min", () => { 
  expect(findTime(60000)).toBe("00 hour 01 minute 00 seconds")
  })
  
 test("min", () => { 
  expect(findTime(180000)).toBe("00 hour 03 minute 00 seconds")
  })
  
 test("min", () => { 
  expect(findTime(200000)).toBe("00 hour 03 minute 20 seconds")
  })
  
 

})