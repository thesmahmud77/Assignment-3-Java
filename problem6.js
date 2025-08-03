/** Problem 06 :  (Current Salary )  */
var experience = 3;
var startingSalary = 15000;
//write your code here

let incrementPerYr = startingSalary;

for (let i = 0; i < experience; i++) {
  incrementPerYr = incrementPerYr * 1.05;
}

console.log(incrementPerYr.toFixed(2));
