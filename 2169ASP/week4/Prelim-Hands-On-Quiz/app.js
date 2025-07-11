const calculator = require('./calculations.js');

var sss = 1100;
var pagIbig = 400;
var philHealth = 500;

var result = calculator.multiply(500, 8);
var gross = calculator.multiply(result, 5);
var tax = calculator.divide(gross, 10);
var deduct = calculator.add(sss, pagIbig);
var deduct2 = calculator.add(tax, philHealth);
var totalded = calculator.add(deduct, deduct2);
var netSalary = calculator.subtract(gross, totalded);


console.log("Gross income is", gross);
console.log("Tax:", tax);
console.log("SSS:", sss);
console.log("Pag-Ibig fund:", pagIbig);
console.log("PhilHealth:", philHealth);
console.log("Total deductions:", totalded);
console.log("Net Salary:", netSalary);
