 
const sumASS = require("./ass1")

describe ("sum for assisment",()=>{

 test("add 2 positve number",()=>{
  expect(sumASS(1, 2)).toBe(3);
 });
 test("add 3 positve number",()=>{
  expect(sumASS(1,2,3)).toBe(6);
 });
 test("add 2 positve number",()=>{
  expect(sumASS(1,2,3,4)).toBe(10);
 });
 test("add 2 positve number",()=>{
  expect(sumASS(1)).toBe(1);
 });

});