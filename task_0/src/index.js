import $ from "jquery"
let firstPara = document.createElement("p");
firstPara.textContent = "Holberton Dashboard";
let seconPara = document.createElement("p");
seconPara.textContent = "Dashboard data for the students";
let thirdPara = document.createElement("p");
thirdPara.textContent = "Copyright - Holberton School";
$("body").append(firstPara, seconPara, thirdPara)
