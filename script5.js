

function myCreateFunction5() {
var StrategicValVSProductQualityImprovementPotential=document.getElementById("table5-row1").value;
var StrategicValVSLeadTimeImprovementPotential=document.getElementById("table5-row2").value;
var StrategicValVSCostsImprovementPotential=document.getElementById("table5-row3").value;
var ProductQualityImprovementPotentialVSLeadTimeImprovementPotential=document.getElementById("table5-row4").value;
var ProductQualityImprovementPotentialVSCostsImprovementPotential=document.getElementById("table5-row5").value;
var LeadTimeImprovementPotentialVSCostsImprovementPotential=document.getElementById("table5-row6").value;
var sum1Table5=Math.pow((1/StrategicValVSCostsImprovementPotential*1/ProductQualityImprovementPotentialVSCostsImprovementPotential*
1/1/LeadTimeImprovementPotentialVSCostsImprovementPotential),1/4);
var sum2Table5=Math.pow((1/StrategicValVSLeadTimeImprovementPotential*1/ProductQualityImprovementPotentialVSLeadTimeImprovementPotential
*LeadTimeImprovementPotentialVSCostsImprovementPotential),1/4);
var sum3Table5=Math.pow((1/StrategicValVSProductQualityImprovementPotential*ProductQualityImprovementPotentialVSLeadTimeImprovementPotential
*ProductQualityImprovementPotentialVSCostsImprovementPotential),1/4);
var sum4Table5=Math.pow((StrategicValVSProductQualityImprovementPotential*StrategicValVSLeadTimeImprovementPotential
*StrategicValVSCostsImprovementPotential),1/4);
var sumTable5=sum1Table5+sum2Table5+sum3Table5+sum4Table5;

  var table = document.getElementById("table5");
  // row 1

  var row1 = table.insertRow(0);
  
  var cell1 = row1.insertCell(0);
  var cell2 = row1.insertCell(1);
  var cell3 = row1.insertCell(2);
  var cell4 = row1.insertCell(3);
  var cell5 = row1.insertCell(4);
  var cell6 = row1.insertCell(5);
  var cell7 = row1.insertCell(6);
  cell1.innerHTML = "Costs Improvement Potential";
  cell2.innerHTML = 1/StrategicValVSCostsImprovementPotential;
  cell3.innerHTML =1/ProductQualityImprovementPotentialVSCostsImprovementPotential; 
  cell4.innerHTML =1/LeadTimeImprovementPotentialVSCostsImprovementPotential;
 
  cell5.innerHTML =1;
  cell6.innerHTML =sum1Table5 ;
  cell7.innerHTML =sum1Table5/sumTable5;
  

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
  cell1.innerHTML = "Lead time improvement potential";
  cell2.innerHTML = 1/StrategicValVSLeadTimeImprovementPotential;
  cell3.innerHTML =1/ProductQualityImprovementPotentialVSLeadTimeImprovementPotential; 
  cell4.innerHTML =1;
  cell5.innerHTML =LeadTimeImprovementPotentialVSCostsImprovementPotential;
  cell6.innerHTML =sum2Table5 ;
  cell7.innerHTML =sum2Table5/sumTable5;
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
  cell1.innerHTML = "Product Quality Improvement Potential";
  cell2.innerHTML = 1/StrategicValVSProductQualityImprovementPotential;
  cell3.innerHTML =1; 
  cell4.innerHTML =ProductQualityImprovementPotentialVSLeadTimeImprovementPotential;
 
  cell5.innerHTML =ProductQualityImprovementPotentialVSCostsImprovementPotential;
  cell6.innerHTML = sum3Table5;
  cell7.innerHTML = sum3Table5/sumTable5;
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
  cell1.innerHTML = "Strategic value relative to entire product range";
  cell2.innerHTML = 1;
  cell3.innerHTML =StrategicValVSProductQualityImprovementPotential; 
  cell4.innerHTML =StrategicValVSLeadTimeImprovementPotential;
 
  cell5.innerHTML =StrategicValVSCostsImprovementPotential;
  cell6.innerHTML = sum4Table5;
  cell7.innerHTML =sum4Table5/sumTable5 ;

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
  cell2.innerHTML = "Strategic value relative to entire prod range";
  cell3.innerHTML ="Prod. quality improvement potential "; 
  cell4.innerHTML ="Lead time improvement potential";
 
  cell5.innerHTML ="Costs improvement potential";
  cell6.innerHTML = "Eigen Value";
  cell7.innerHTML = "Consistency Ratio ";

//   row 5 ended





}
