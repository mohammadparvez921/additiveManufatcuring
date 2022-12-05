
function myCreateFunction4() {
//   document.alert("hii");
var RelaibilityVSlocationOfAvailibilityOfTechnology=document.getElementById("table4-row1").value;
var RelaibilityVSmaturityLevelOfTechnology=document.getElementById("table4-row2").value;
var RelaibilityVSflexibility=document.getElementById("table4-row3").value;
var LocationOfAvailibilityOfTechnologyVSmaturityLevelOfTechnology=document.getElementById("table4-row4").value;
var LocationOfAvailibilityOfTechnologyVSflexibility=document.getElementById("table4-row5").value;
var MaturityLevelOfTechnologyVSflexibility=document.getElementById("table4-row6").value;
var sum1Table4=Math.pow((1/RelaibilityVSflexibility*1/LocationOfAvailibilityOfTechnologyVSflexibility*
1/MaturityLevelOfTechnologyVSflexibility),1/4);
var sum2Table4=Math.pow((1/RelaibilityVSmaturityLevelOfTechnology*1/LocationOfAvailibilityOfTechnologyVSmaturityLevelOfTechnology
*MaturityLevelOfTechnologyVSflexibility),1/4);
var sum3Table4=Math.pow((1/RelaibilityVSlocationOfAvailibilityOfTechnology*LocationOfAvailibilityOfTechnologyVSmaturityLevelOfTechnology
*LocationOfAvailibilityOfTechnologyVSflexibility),1/4);
var sum4Table4=Math.pow((RelaibilityVSlocationOfAvailibilityOfTechnology*RelaibilityVSmaturityLevelOfTechnology
*RelaibilityVSflexibility),1/4);
var sumTable4=sum1Table4+sum2Table4+sum3Table4+sum4Table4;



  var table = document.getElementById("table4");
  // row 1

  var row1 = table.insertRow(0);
  
  var cell1 = row1.insertCell(0);
  var cell2 = row1.insertCell(1);
  var cell3 = row1.insertCell(2);
  var cell4 = row1.insertCell(3);
  var cell5 = row1.insertCell(4);
  var cell6 = row1.insertCell(5);
  var cell7 = row1.insertCell(6);
  cell1.innerHTML = "Flexibility";
  cell2.innerHTML = 1/RelaibilityVSflexibility;
  cell3.innerHTML =1/LocationOfAvailibilityOfTechnologyVSflexibility; 
  cell4.innerHTML =1/MaturityLevelOfTechnologyVSflexibility;
 
  cell5.innerHTML =1;
  cell6.innerHTML =sum1Table4 ;
  cell7.innerHTML =sum1Table4/sumTable4;
  

  // row1 ended

  // row2 started
  var row2 = table.insertRow(0);
  
  var cell1 = row2.insertCell(0);
  var cell2 = row2.insertCell(1);
  var cell3 = row2.insertCell(2);
  var cell4 = row2.insertCell(3);
  var cell5 = row2.insertCell(4);
  var cell6 = row2.insertCell(5);
  var cell7 = row2.insertCell(6);
  cell1.innerHTML = "Maturity Level of Technology";
  cell2.innerHTML = 1/RelaibilityVSmaturityLevelOfTechnology;
  cell3.innerHTML =1/LocationOfAvailibilityOfTechnologyVSmaturityLevelOfTechnology; 
  cell4.innerHTML =1;
 
  cell5.innerHTML =MaturityLevelOfTechnologyVSflexibility;
  cell6.innerHTML =sum2Table4 ;
  cell7.innerHTML =sum2Table4/sumTable4 ;
  // row2 ended


  //row3 started
  var row3 = table.insertRow(0);
  var cell1 = row3.insertCell(0);
  var cell2 = row3.insertCell(1);
  var cell3 = row3.insertCell(2);
  var cell4 = row3.insertCell(3);
  var cell5 = row3.insertCell(4);
  var cell6 = row3.insertCell(5);
  var cell7 = row3.insertCell(6);
  cell1.innerHTML = "Location of availibility of technoloy";
  cell2.innerHTML = 1/RelaibilityVSlocationOfAvailibilityOfTechnology;
  cell3.innerHTML =1; 
  cell4.innerHTML =LocationOfAvailibilityOfTechnologyVSmaturityLevelOfTechnology;
 
  cell5.innerHTML =LocationOfAvailibilityOfTechnologyVSflexibility;
  cell6.innerHTML = sum3Table4;
  cell7.innerHTML = sum3Table4/sumTable4;
  // row3 ended


  // row4 started
  var row4 = table.insertRow(0);

  var cell1 = row4.insertCell(0);
  var cell2 = row4.insertCell(1);
  var cell3 = row4.insertCell(2);
  var cell4 = row4.insertCell(3);
  var cell5 = row4.insertCell(4);
  var cell6 = row4.insertCell(5);
  var cell7 = row4.insertCell(6);
  cell1.innerHTML = "Relaibility";
  cell2.innerHTML = 1;
  cell3.innerHTML =RelaibilityVSlocationOfAvailibilityOfTechnology; 
  cell4.innerHTML =RelaibilityVSmaturityLevelOfTechnology;
 
  cell5.innerHTML =RelaibilityVSflexibility;
  cell6.innerHTML = sum4Table4;
  cell7.innerHTML =sum4Table4/sumTable4 ;

  // row4 ended


  //row 5 started
  var row5 = table.insertRow(0);
  var cell1 = row5.insertCell(0);
  var cell2 = row5.insertCell(1);
  var cell3 = row5.insertCell(2);
  var cell4 = row5.insertCell(3);
  var cell5 = row5.insertCell(4);
  var cell6 = row5.insertCell(5);
  var cell7 = row5.insertCell(6);
  cell1.innerHTML = "";
  cell2.innerHTML = "Relaibility";
  cell3.innerHTML ="Location Of availibility Of technology"; 
  cell4.innerHTML ="Maturity level of technology";
 
  cell5.innerHTML ="Flexibility";
  cell6.innerHTML = "Eigen Value";
  cell7.innerHTML = "Consistency Ratio ";

//   row 5 ended





}
