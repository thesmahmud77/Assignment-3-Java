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
