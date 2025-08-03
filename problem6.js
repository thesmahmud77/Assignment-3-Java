/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
//write your code here

let incrementPerYr = startingSalary;

for (let i = 0; i < experience; i++) {
  incrementPerYr = incrementPerYr * 1.05;
}

console.log(incrementPerYr.toFixed(2));
