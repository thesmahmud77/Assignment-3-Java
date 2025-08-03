/************* Problem-01 ****************/

/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here

// var rahim = area / 2;
// var korim = area / 2;
// console.log(korim);
var son = area / 2;
console.log(son);

/************* Problem-02 ****************/

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if (money >= 25000) {
  console.log("Buy Laptop");
} else if (money >= 10000) {
  console.log("Buy Cycle ");
} else {
  console.log("Chocolate");
}

/************* Problem-03 ****************/

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here

for (i = 1; i <= lastDay; i++) {
  if (i % 3 === 0) {
    console.log(i, "-", "Medicine");
  } else {
    console.log(i, "-", "Rest");
  }
}

/************* Problem-04 ****************/

/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.bdocx";
//write your code here
if (fileName.startsWith("#")) {
  console.log("Store");
} else if (fileName.endsWith(".pdf")) {
  console.log("Store");
} else if (fileName.endsWith(".docx")) {
  console.log("Store");
} else {
  console.log("Delete");
}

/************* Problem-05 ****************/

/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhankar", roll: 1014, department: "cse" };
//write your code here

var name = student.name;
var roll = student.roll;
var department = student.department;
var emailBody = name + roll + "." + department + "@ph.ac.bd";
console.log(emailBody);

/************* Problem-06 ****************/

/** Problem 06 :  (Current Salary )  */
var experience = 3;
var startingSalary = 15000;
//write your code here

let incrementPerYr = startingSalary;

for (let i = 0; i < experience; i++) {
  incrementPerYr = incrementPerYr * 1.05;
}

console.log(incrementPerYr.toFixed(2));
