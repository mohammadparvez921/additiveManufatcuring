

function myCreateFunction3() {
//   document.alert("hii");
var employeeSkillVSofficeFreindliness=document.getElementById("table3-row1").value;
var employeeSkillVShazardrecycling=document.getElementById("table3-row2").value;
var officeVShazardrecycling=document.getElementById("table3-row3").value;
var sum1Table3=Math.pow((1/employeeSkillVShazardrecycling*1/officeVShazardrecycling),1/3);
var sum2Table3=Math.pow((1/employeeSkillVShazardrecycling*officeVShazardrecycling),1/3);
var sum3Table3=Math.pow((employeeSkillVSofficeFreindliness*employeeSkillVShazardrecycling),1/3);
var sumTable3=sum1Table3+sum2Table3+sum3Table3;

  var table = document.getElementById("table3");
  // row 1

  var row1 = table.insertRow(0);
  
  var cell1 = row1.insertCell(0);
  var cell2 = row1.insertCell(1);
  var cell3 = row1.insertCell(2);
  var cell4 = row1.insertCell(3);
  var cell5 = row1.insertCell(4);
  var cell6 = row1.insertCell(5);
  
  cell1.innerHTML = "Hazard recycling";
  cell2.innerHTML = 1/employeeSkillVShazardrecycling;
  cell3.innerHTML =1/officeVShazardrecycling; 
  cell4.innerHTML =1;
 
  cell5.innerHTML =sum1Table3;
  cell6.innerHTML =sum1Table3/sumTable3 ;
  

  // row1 ended

  // row2 started
  var row1 = table.insertRow(0);
  
  var cell1 = row1.insertCell(0);
  var cell2 = row1.insertCell(1);
  var cell3 = row1.insertCell(2);
  var cell4 = row1.insertCell(3);
  var cell5 = row1.insertCell(4);
  var cell6 = row1.insertCell(5);
  
  cell1.innerHTML = "Office Freindliness";
  cell2.innerHTML = 1/employeeSkillVSofficeFreindliness;
  cell3.innerHTML =1; 
  cell4.innerHTML =officeVShazardrecycling;
 
  cell5.innerHTML =sum2Table3;
  cell6.innerHTML =sum2Table3/sumTable3 ;
  // row2 ended


  //row3 started
  var row1 = table.insertRow(0);
  
  var cell1 = row1.insertCell(0);
  var cell2 = row1.insertCell(1);
  var cell3 = row1.insertCell(2);
  var cell4 = row1.insertCell(3);
  var cell5 = row1.insertCell(4);
  var cell6 = row1.insertCell(5);
  
  cell1.innerHTML = "Employee skill & training required";
  cell2.innerHTML = 1;
  cell3.innerHTML =employeeSkillVSofficeFreindliness; 
  cell4.innerHTML =employeeSkillVShazardrecycling;
 
  cell5.innerHTML =sum3Table3;
  cell6.innerHTML =sum3Table3/sumTable3 ;
  // row3 ended


  // row4 started
  var row1 = table.insertRow(0);
  
  var cell1 = row1.insertCell(0);
  var cell2 = row1.insertCell(1);
  var cell3 = row1.insertCell(2);
  var cell4 = row1.insertCell(3);
  var cell5 = row1.insertCell(4);
  var cell6 = row1.insertCell(5);
  
  cell1.innerHTML = "";
  cell2.innerHTML = "Employee Skill & Training Required";
  cell3.innerHTML ="Office Freinliness"; 
  cell4.innerHTML ="Hazrad Recycling";
 
  cell5.innerHTML ="Eigen Value";
  cell6.innerHTML ="Consistency ratio" ;

  // row5 ended



}
