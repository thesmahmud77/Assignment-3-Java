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
