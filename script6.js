function finalFunction(){
    // table1
 var productReqVsProcessReq=document.getElementById("table1-row1").value;
  var productReqVsSocialEnv=document.getElementById("table1-row2").value;
  var productReqVsOtherIssuesOfComp=document.getElementById("table1-row3").value;
  var processReqVsSocialReqIssues=document.getElementById("table1-row4").value;
  var processReqVsOtherIssuesOfComp=document.getElementById("table1-row5").value;
  var socialIssuesVsOtherIssuesOfComp=document.getElementById("table1-row6").value;
  var reverseProductReqVsProcessReq=(1/productReqVsProcessReq);
  var reverseProductReqVsSocialEnv=(1/productReqVsSocialEnv);
  var reverseProcessReqVsSocialReqIssues=(1/processReqVsSocialReqIssues);
  var revrseProductReqVsOtherIssuesOfComp=(1/productReqVsOtherIssuesOfComp);
  var reverseProcessReqVsOtherIssuesOfComp=(1/processReqVsOtherIssuesOfComp);
  var reverseSocialIssuesVsOtherIssuesOfComp=(1/socialIssuesVsOtherIssuesOfComp);
  var sum1=Math.pow(productReqVsProcessReq*productReqVsSocialEnv*productReqVsOtherIssuesOfComp,1/4);
  var sum2=Math.pow(reverseProductReqVsProcessReq*processReqVsSocialReqIssues*processReqVsOtherIssuesOfComp,1/4);
  var sum3= Math.pow(reverseProductReqVsSocialEnv*reverseProcessReqVsSocialReqIssues*socialIssuesVsOtherIssuesOfComp,1/4);
  var sum4=Math.pow(revrseProductReqVsOtherIssuesOfComp*reverseProcessReqVsOtherIssuesOfComp*reverseSocialIssuesVsOtherIssuesOfComp,1/4);
  var sum=sum1+sum2+sum3+sum4;

//   table1 ends

// table2

var speedVSvariety=document.getElementById("table2-row1").value;
var speedVSsurfaceFinish=document.getElementById("table2-row2").value;
var speedVSprodCost=document.getElementById("table2-row3").value;
var speedVSprice=document.getElementById("table2-row4").value;
var speedVSmaxPartSize=document.getElementById("table2-row5").value;
var varietyVSsurfaceFinish=document.getElementById("table2-row6").value;
var varietyVSprodCost=document.getElementById("table2-row7").value;
var varietyVSprice=document.getElementById("table2-row8").value;
var varietyVSmaxPartSize=document.getElementById("table2-row9").value;
var surfaceFinishVSprodCost=document.getElementById("table2-row10").value;
var surfaceFinishVSprice=document.getElementById("table2-row11").value;
var surfaceFinishVSmaxPartSize=document.getElementById("table2-row12").value;
var prodCostVSprice=document.getElementById("table2-row13").value;
var prodCostVSmaxPartSize=document.getElementById("table2-row14").value;
var priceVSmaxPartSize=document.getElementById("table2-row15").value;
var sum1Table2=Math.pow((1/speedVSmaxPartSize*1/varietyVSmaxPartSize*1/surfaceFinishVSmaxPartSize*1/prodCostVSmaxPartSize*
  1/priceVSmaxPartSize),1/6);
  var sum2Table2=Math.pow((1/speedVSprice*1/varietyVSprice*1/surfaceFinishVSprice*
  1/prodCostVSprice*priceVSmaxPartSize),1/6);
  var sum3Table2=Math.pow((1/speedVSprodCost*1/varietyVSprodCost*1/surfaceFinishVSprodCost *prodCostVSprice
  *prodCostVSmaxPartSize),1/6);
  var sum4Table2=Math.pow((1/speedVSsurfaceFinish*1/varietyVSsurfaceFinish*surfaceFinishVSprodCost*surfaceFinishVSprice
  *surfaceFinishVSmaxPartSize),1/6);
  var sum5Table2=Math.pow((1/speedVSvariety*varietyVSsurfaceFinish*varietyVSprodCost
  *varietyVSprice*varietyVSmaxPartSize),1/6);
  var sum6Table2=Math.pow((speedVSvariety*speedVSsurfaceFinish*speedVSprodCost*speedVSprice*speedVSmaxPartSize),1/6);
var sumTable2=sum1Table2+sum2Table2+sum3Table2+sum4Table2+sum5Table2;

// table2 ends

//table 3
var employeeSkillVSofficeFreindliness=document.getElementById("table3-row1").value;
var employeeSkillVShazardrecycling=document.getElementById("table3-row2").value;
var officeVShazardrecycling=document.getElementById("table3-row3").value;
var sum1Table3=Math.pow((1/employeeSkillVShazardrecycling*1/officeVShazardrecycling),1/3);
var sum2Table3=Math.pow((1/employeeSkillVSofficeFreindliness*officeVShazardrecycling),1/3);
var sum3Table3=Math.pow((employeeSkillVSofficeFreindliness*employeeSkillVShazardrecycling),1/3);
var sumTable3=sum1Table3+sum2Table3+sum3Table3;

// table3 ends


// table4 
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

// table4 ends

// table5
var StrategicValVSProductQualityImprovementPotential=document.getElementById("table5-row1").value;
var StrategicValVSLeadTimeImprovementPotential=document.getElementById("table5-row2").value;
var StrategicValVSCostsImprovementPotential=document.getElementById("table5-row3").value;
var ProductQualityImprovementPotentialVSLeadTimeImprovementPotential=document.getElementById("table5-row4").value;
var ProductQualityImprovementPotentialVSCostsImprovementPotential=document.getElementById("table5-row5").value;
var LeadTimeImprovementPotentialVSCostsImprovementPotential=document.getElementById("table5-row6").value;
var sum1Table5=Math.pow((1/StrategicValVSCostsImprovementPotential*1/ProductQualityImprovementPotentialVSCostsImprovementPotential*
1/LeadTimeImprovementPotentialVSCostsImprovementPotential),1/4);
var sum2Table5=Math.pow((1/StrategicValVSLeadTimeImprovementPotential*1/ProductQualityImprovementPotentialVSLeadTimeImprovementPotential
*LeadTimeImprovementPotentialVSCostsImprovementPotential),1/4);
var sum3Table5=Math.pow((1/StrategicValVSProductQualityImprovementPotential*ProductQualityImprovementPotentialVSLeadTimeImprovementPotential
*ProductQualityImprovementPotentialVSCostsImprovementPotential),1/4);
var sum4Table5=Math.pow((StrategicValVSProductQualityImprovementPotential*StrategicValVSLeadTimeImprovementPotential
*StrategicValVSCostsImprovementPotential),1/4);
var sumTable5=sum1Table5+sum2Table5+sum3Table5+sum4Table5;

// table 5 ends 






var table = document.getElementById("table6");
// row 1

var row1 = table.insertRow(0);

var cell1 = row1.insertCell(0);
var cell2 = row1.insertCell(1);
var cell3 = row1.insertCell(2);
var cell4 = row1.insertCell(3);
var cell5 = row1.insertCell(4);
var cell6 = row1.insertCell(5);
var cell7 = row1.insertCell(6);
var cell8 = row1.insertCell(7);
var cell9 = row1.insertCell(8);
var cell10 = row1.insertCell(9);
var cell11 = row1.insertCell(10);
var cell12= row1.insertCell(11);
var cell13 = row1.insertCell(12);
var cell14= row1.insertCell(13);
var cell15 = row1.insertCell(14);
cell1.innerHTML = "Costs Improvement Potential";
cell2.innerHTML =sum4/sum;
cell3.innerHTML =sum1Table5/sumTable5; 
console.log(sum1Table5/sumTable5);
cell4.innerHTML =document.getElementById("SLA-row17").value;
cell5.innerHTML =(sum4/sum)*(sum1Table5/sumTable5)*document.getElementById("SLA-row17").value;
cell6.innerHTML =document.getElementById("SLS-row17").value;
cell7.innerHTML =(sum4/sum)*(sum1Table5/sumTable5)*document.getElementById("SLS-row17").value
cell8.innerHTML = document.getElementById("FDM-row17").value;
cell9.innerHTML = (sum4/sum)*(sum1Table5/sumTable5)*document.getElementById("FDM-row17").value
cell10.innerHTML =document.getElementById("LOM-row17").value;
cell11.innerHTML =(sum4/sum)*(sum1Table5/sumTable5)*document.getElementById("LOM-row17").value
cell12.innerHTML =document.getElementById("3DP-row17").value;
cell13.innerHTML =(sum4/sum)*(sum1Table5/sumTable5)*document.getElementById("3DP-row17").value
cell14.innerHTML =document.getElementById("SGC-row17").value;
cell15.innerHTML =(sum4/sum)*(sum1Table5/sumTable5)*document.getElementById("SGC-row17").value;
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
var cell8 = row2.insertCell(7);
var cell9 = row2.insertCell(8);
var cell10 = row2.insertCell(9);
var cell11 = row2.insertCell(10);
var cell12= row2.insertCell(11);
var cell13 = row2.insertCell(12);
var cell14= row2.insertCell(13);
var cell15 = row2.insertCell(14);
cell1.innerHTML = "Lead time improvement potential";
cell2.innerHTML =sum4/sum;
cell3.innerHTML =sum2Table5/sumTable5; 
cell4.innerHTML =document.getElementById("SLA-row16").value;

cell5.innerHTML =(sum4/sum)*(sum2Table5/sumTable5)*document.getElementById("SLA-row16").value;
cell6.innerHTML =document.getElementById("SLS-row16").value;
cell7.innerHTML =(sum4/sum)*(sum2Table5/sumTable5)*document.getElementById("SLS-row16").value
cell8.innerHTML = document.getElementById("FDM-row16").value;
cell9.innerHTML = (sum4/sum)*(sum2Table5/sumTable5)*document.getElementById("FDM-row16").value
cell10.innerHTML =document.getElementById("LOM-row16").value;
cell11.innerHTML =(sum4/sum)*(sum2Table5/sumTable5)*document.getElementById("LOM-row16").value
cell12.innerHTML =document.getElementById("3DP-row16").value;
cell13.innerHTML =(sum4/sum)*(sum2Table5/sumTable5)*document.getElementById("3DP-row16").value
cell14.innerHTML =document.getElementById("SGC-row16").value;
cell15.innerHTML =(sum4/sum)*(sum2Table5/sumTable5)*document.getElementById("SGC-row16").value;
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
var cell8 = row3.insertCell(7);
var cell9 = row3.insertCell(8);
var cell10 = row3.insertCell(9);
var cell11 = row3.insertCell(10);
var cell12= row3.insertCell(11);
var cell13 = row3.insertCell(12);
var cell14= row3.insertCell(13);
var cell15 = row3.insertCell(14);
cell1.innerHTML = "Product Quality IP";
cell2.innerHTML =sum4/sum;
cell3.innerHTML =sum3Table5/sumTable5; 
cell4.innerHTML =document.getElementById("SLA-row15").value;
cell5.innerHTML =(sum4/sum)*(sum3Table5/sumTable5)*document.getElementById("SLA-row15").value;
cell6.innerHTML =document.getElementById("SLS-row15").value;
cell7.innerHTML =(sum4/sum)*(sum3Table5/sumTable5)*document.getElementById("SLS-row15").value
cell8.innerHTML = document.getElementById("FDM-row15").value;
cell9.innerHTML = (sum4/sum)*(sum3Table5/sumTable5)*document.getElementById("FDM-row15").value
cell10.innerHTML =document.getElementById("LOM-row15").value;
cell11.innerHTML =(sum4/sum)*(sum3Table5/sumTable5)*document.getElementById("LOM-row15").value
cell12.innerHTML =document.getElementById("3DP-row15").value;
cell13.innerHTML =(sum4/sum)*(sum3Table5/sumTable5)*document.getElementById("3DP-row15").value
cell14.innerHTML =document.getElementById("SGC-row15").value;
cell15.innerHTML =(sum4/sum)*(sum3Table5/sumTable5)*document.getElementById("SGC-row15").value;
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
var cell8 = row4.insertCell(7);
var cell9 = row4.insertCell(8);
var cell10 = row4.insertCell(9);
var cell11 = row4.insertCell(10);
var cell12= row4.insertCell(11);
var cell13 = row4.insertCell(12);
var cell14= row4.insertCell(13);
var cell15 = row4.insertCell(14);
cell1.innerHTML = "Strategic value";
cell2.innerHTML =sum4/sum;
cell3.innerHTML =sum4Table5/sumTable5; 
cell4.innerHTML =document.getElementById("SLA-row14").value;
cell5.innerHTML =(sum4/sum)*(sum4Table5/sumTable5)*document.getElementById("SLA-row14").value;
cell6.innerHTML =document.getElementById("SLS-row14").value;
cell7.innerHTML =(sum4/sum)*(sum4Table5/sumTable5)*document.getElementById("SLS-row14").value
cell8.innerHTML = document.getElementById("FDM-row14").value;
cell9.innerHTML = (sum4/sum)*(sum4Table5/sumTable5)*document.getElementById("FDM-row14").value
cell10.innerHTML =document.getElementById("LOM-row14").value;
cell11.innerHTML =(sum4/sum)*(sum4Table5/sumTable5)*document.getElementById("LOM-row14").value
cell12.innerHTML =document.getElementById("3DP-row14").value;
cell13.innerHTML =(sum4/sum)*(sum4Table5/sumTable5)*document.getElementById("3DP-row14").value
cell14.innerHTML =document.getElementById("SGC-row14").value;
cell15.innerHTML =(sum4/sum)*(sum4Table5/sumTable5)*document.getElementById("SGC-row14").value;
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
var cell8 = row5.insertCell(7);
var cell9 = row5.insertCell(8);
var cell10 = row5.insertCell(9);
var cell11 = row5.insertCell(10);
var cell12= row5.insertCell(11);
var cell13 = row5.insertCell(12);
var cell14= row5.insertCell(13);
var cell15 = row5.insertCell(14);
cell1.innerHTML = "Hazard recycling";
cell2.innerHTML =sum3/sum;
cell3.innerHTML =sum1Table3/sumTable3; 
cell4.innerHTML =document.getElementById("SLA-row13").value;

cell5.innerHTML =(sum3/sum)*(sum1Table3/sumTable3)*document.getElementById("SLA-row13").value;
cell6.innerHTML =document.getElementById("SLS-row13").value;
cell7.innerHTML =(sum3/sum)*(sum1Table3/sumTable3)*document.getElementById("SLS-row13").value
cell8.innerHTML = document.getElementById("FDM-row13").value;
cell9.innerHTML = (sum3/sum)*(sum1Table3/sumTable3)*document.getElementById("FDM-row13").value
cell10.innerHTML =document.getElementById("LOM-row13").value;
cell11.innerHTML =(sum3/sum)*(sum1Table3/sumTable3)*document.getElementById("LOM-row13").value
cell12.innerHTML =document.getElementById("3DP-row13").value;
cell13.innerHTML =(sum3/sum)*(sum1Table3/sumTable3)*document.getElementById("3DP-row13").value
cell14.innerHTML =document.getElementById("SGC-row13").value;
cell15.innerHTML =(sum3/sum)*(sum1Table3/sumTable3)*document.getElementById("SGC-row13").value;

//   row 5 ended

// row 6 started

var row6 = table.insertRow(0);
var cell1 = row6.insertCell(0);
var cell2 = row6.insertCell(1);
var cell3 = row6.insertCell(2);
var cell4 = row6.insertCell(3);
var cell5 = row6.insertCell(4);
var cell6 = row6.insertCell(5);
var cell7 = row6.insertCell(6);
var cell8 = row6.insertCell(7);
var cell9 = row6.insertCell(8);
var cell10 = row6.insertCell(9);
var cell11 = row6.insertCell(10);
var cell12= row6.insertCell(11);
var cell13 = row6.insertCell(12);
var cell14= row6.insertCell(13);
var cell15 = row6.insertCell(14);
cell1.innerHTML = "Office freindliness";
cell2.innerHTML =sum3/sum;
cell3.innerHTML =sum2Table3/sumTable3; 
cell4.innerHTML =document.getElementById("SLA-row12").value;

cell5.innerHTML =(sum3/sum)*(sum2Table3/sumTable3)*document.getElementById("SLA-row12").value;
cell6.innerHTML =document.getElementById("SLS-row12").value;
cell7.innerHTML =(sum3/sum)*(sum2Table3/sumTable3)*document.getElementById("SLS-row12").value
cell8.innerHTML = document.getElementById("FDM-row12").value;
cell9.innerHTML = (sum3/sum)*(sum2Table3/sumTable3)*document.getElementById("FDM-row12").value
cell10.innerHTML =document.getElementById("LOM-row12").value;
cell11.innerHTML =(sum3/sum)*(sum2Table3/sumTable3)*document.getElementById("LOM-row12").value
cell12.innerHTML =document.getElementById("3DP-row12").value;
cell13.innerHTML =(sum3/sum)*(sum2Table3/sumTable3)*document.getElementById("3DP-row12").value
cell14.innerHTML =document.getElementById("SGC-row12").value;
cell15.innerHTML =(sum3/sum)*(sum2Table3/sumTable3)*document.getElementById("SGC-row12").value;
// row 6 end

//row 7
var row7 = table.insertRow(0);
var cell1 = row7.insertCell(0);
var cell2 = row7.insertCell(1);
var cell3 = row7.insertCell(2);
var cell4 = row7.insertCell(3);
var cell5 = row7.insertCell(4);
var cell6 = row7.insertCell(5);
var cell7 = row7.insertCell(6);
var cell8 = row7.insertCell(7);
var cell9 = row7.insertCell(8);
var cell10 = row7.insertCell(9);
var cell11 = row7.insertCell(10);
var cell12= row7.insertCell(11);
var cell13 = row7.insertCell(12);
var cell14= row7.insertCell(13);
var cell15 = row7.insertCell(14);
cell1.innerHTML = "Employee skill and training";
cell2.innerHTML =sum3/sum;
cell3.innerHTML =sum3Table3/sumTable3; 
cell4.innerHTML =document.getElementById("SLA-row11").value;
cell5.innerHTML =(sum3/sum)*(sum3Table3/sumTable3)*document.getElementById("SLA-row11").value;
cell6.innerHTML =document.getElementById("SLS-row11").value;
cell7.innerHTML =(sum3/sum)*(sum3Table3/sumTable3)*document.getElementById("SLS-row11").value
cell8.innerHTML = document.getElementById("FDM-row11").value;
cell9.innerHTML = (sum3/sum)*(sum3Table3/sumTable3)*document.getElementById("FDM-row11").value
cell10.innerHTML =document.getElementById("LOM-row11").value;
cell11.innerHTML =(sum3/sum)*(sum3Table3/sumTable3)*document.getElementById("LOM-row11").value
cell12.innerHTML =document.getElementById("3DP-row11").value;
cell13.innerHTML =(sum3/sum)*(sum3Table3/sumTable3)*document.getElementById("3DP-row11").value
cell14.innerHTML =document.getElementById("SGC-row11").value;
cell15.innerHTML =(sum3/sum)*(sum3Table3/sumTable3)*document.getElementById("SGC-row11").value;
// row 7 ended

// row 8
var row8 = table.insertRow(0);
var cell1 = row8.insertCell(0);
var cell2 = row8.insertCell(1);
var cell3 = row8.insertCell(2);
var cell4 = row8.insertCell(3);
var cell5 = row8.insertCell(4);
var cell6 = row8.insertCell(5);
var cell7 = row8.insertCell(6);
var cell8 = row8.insertCell(7);
var cell9 = row8.insertCell(8);
var cell10 = row8.insertCell(9);
var cell11 = row8.insertCell(10);
var cell12= row8.insertCell(11);
var cell13 = row8.insertCell(12);
var cell14= row8.insertCell(13);
var cell15 = row8.insertCell(14);
cell1.innerHTML = "Flexibility";
cell2.innerHTML =sum2/sum;
cell3.innerHTML =sum1Table4/sumTable4; 
cell4.innerHTML =document.getElementById("SLA-row10").value;
cell5.innerHTML =(sum2/sum)*(sum1Table4/sumTable4)*document.getElementById("SLA-row10").value;
cell6.innerHTML =document.getElementById("SLS-row10").value;
cell7.innerHTML =(sum2/sum)*(sum1Table4/sumTable4)*document.getElementById("SLS-row10").value
cell8.innerHTML = document.getElementById("FDM-row10").value;
cell9.innerHTML = (sum2/sum)*(sum1Table4/sumTable4)*document.getElementById("FDM-row10").value
cell10.innerHTML =document.getElementById("LOM-row10").value;
cell11.innerHTML =(sum2/sum)*(sum1Table4/sumTable4)*document.getElementById("LOM-row10").value
cell12.innerHTML =document.getElementById("3DP-row10").value;
cell13.innerHTML =(sum2/sum)*(sum1Table4/sumTable4)*document.getElementById("3DP-row10").value
cell14.innerHTML =document.getElementById("SGC-row10").value;
cell15.innerHTML =(sum2/sum)*(sum1Table4/sumTable4)*document.getElementById("SGC-row10").value;

// row 8 ended

// row 9


var row9 = table.insertRow(0);
var cell1 = row9.insertCell(0);
var cell2 = row9.insertCell(1);
var cell3 = row9.insertCell(2);
var cell4 = row9.insertCell(3);
var cell5 = row9.insertCell(4);
var cell6 = row9.insertCell(5);
var cell7 = row9.insertCell(6);
var cell8 = row9.insertCell(7);
var cell9 = row9.insertCell(8);
var cell10 = row9.insertCell(9);
var cell11 = row9.insertCell(10);
var cell12= row9.insertCell(11);
var cell13 = row9.insertCell(12);
var cell14= row9.insertCell(13);
var cell15 = row9.insertCell(14);
cell1.innerHTML = "Maturity of technology";
cell2.innerHTML =sum2/sum;
cell3.innerHTML =sum2Table4/sumTable4; 
cell4.innerHTML =document.getElementById("SLA-row9").value;
cell5.innerHTML =(sum2/sum)*(sum2Table4/sumTable4)*document.getElementById("SLA-row9").value;
cell6.innerHTML =document.getElementById("SLS-row9").value;
cell7.innerHTML =(sum2/sum)*(sum2Table4/sumTable4)*document.getElementById("SLS-row9").value
cell8.innerHTML = document.getElementById("FDM-row9").value;
cell9.innerHTML = (sum2/sum)*(sum2Table4/sumTable4)*document.getElementById("FDM-row9").value
cell10.innerHTML =document.getElementById("LOM-row9").value;
cell11.innerHTML =(sum2/sum)*(sum2Table4/sumTable4)*document.getElementById("LOM-row9").value
cell12.innerHTML =document.getElementById("3DP-row9").value;
cell13.innerHTML =(sum2/sum)*(sum2Table4/sumTable4)*document.getElementById("3DP-row9").value
cell14.innerHTML =document.getElementById("SGC-row9").value;
cell15.innerHTML =(sum2/sum)*(sum2Table4/sumTable4)*document.getElementById("SGC-row9").value;

// row 9 ended

// row 10

var row10 = table.insertRow(0);
var cell1 = row10.insertCell(0);
var cell2 = row10.insertCell(1);
var cell3 = row10.insertCell(2);
var cell4 = row10.insertCell(3);
var cell5 = row10.insertCell(4);
var cell6 = row10.insertCell(5);
var cell7 = row10.insertCell(6);
var cell8 = row10.insertCell(7);
var cell9 = row10.insertCell(8);
var cell10 = row10.insertCell(9);
var cell11 = row10.insertCell(10);
var cell12= row10.insertCell(11);
var cell13 = row10.insertCell(12);
var cell14= row10.insertCell(13);
var cell15 = row10.insertCell(14);
cell1.innerHTML = "Location of availibilty of technology";
cell2.innerHTML =sum2/sum;
cell3.innerHTML =sum3Table4/sumTable4; 
cell4.innerHTML =document.getElementById("SLA-row8").value;
cell5.innerHTML =(sum2/sum)*(sum3Table4/sumTable4)*document.getElementById("SLA-row8").value;
cell6.innerHTML =document.getElementById("SLS-row8").value;
cell7.innerHTML =(sum2/sum)*(sum3Table4/sumTable4)*document.getElementById("SLS-row8").value
cell8.innerHTML = document.getElementById("FDM-row8").value;
cell9.innerHTML = (sum2/sum)*(sum3Table4/sumTable4)*document.getElementById("FDM-row8").value
cell10.innerHTML =document.getElementById("LOM-row8").value;
cell11.innerHTML =(sum2/sum)*(sum3Table4/sumTable4)*document.getElementById("LOM-row8").value
cell12.innerHTML =document.getElementById("3DP-row8").value;
cell13.innerHTML =(sum2/sum)*(sum3Table4/sumTable4)*document.getElementById("3DP-row8").value
cell14.innerHTML =document.getElementById("SGC-row8").value;
cell15.innerHTML =(sum2/sum)*(sum3Table4/sumTable4)*document.getElementById("SGC-row8").value;

// row 10 ended

// row 11 
var row11 = table.insertRow(0);
var cell1 = row11.insertCell(0);
var cell2 = row11.insertCell(1);
var cell3 = row11.insertCell(2);
var cell4 = row11.insertCell(3);
var cell5 = row11.insertCell(4);
var cell6 = row11.insertCell(5);
var cell7 = row11.insertCell(6);
var cell8 = row11.insertCell(7);
var cell9 = row11.insertCell(8);
var cell10 = row11.insertCell(9);
var cell11 = row11.insertCell(10);
var cell12= row11.insertCell(11);
var cell13 = row11.insertCell(12);
var cell14= row11.insertCell(13);
var cell15 = row11.insertCell(14);
cell1.innerHTML = "Relaibility";
cell2.innerHTML =sum2/sum;
cell3.innerHTML =sum4Table4/sumTable4; 
cell4.innerHTML =document.getElementById("SLA-row7").value;
cell5.innerHTML =(sum2/sum)*(sum4Table4/sumTable4)*document.getElementById("SLA-row7").value;
cell6.innerHTML =document.getElementById("SLS-row7").value;
cell7.innerHTML =(sum2/sum)*(sum4Table4/sumTable4)*document.getElementById("SLS-row7").value
cell8.innerHTML = document.getElementById("FDM-row7").value;
cell9.innerHTML = (sum2/sum)*(sum4Table4/sumTable4)*document.getElementById("FDM-row7").value
cell10.innerHTML =document.getElementById("LOM-row7").value;
cell11.innerHTML =(sum2/sum)*(sum4Table4/sumTable4)*document.getElementById("LOM-row7").value
cell12.innerHTML =document.getElementById("3DP-row7").value;
cell13.innerHTML =(sum2/sum)*(sum4Table4/sumTable4)*document.getElementById("3DP-row7").value
cell14.innerHTML =document.getElementById("SGC-row7").value;
cell15.innerHTML =(sum2/sum)*(sum4Table4/sumTable4)*document.getElementById("SGC-row7").value;

// row 11 ended

// row 12 
var row12 = table.insertRow(0);
var cell1 = row12.insertCell(0);
var cell2 = row12.insertCell(1);
var cell3 = row12.insertCell(2);
var cell4 = row12.insertCell(3);
var cell5 = row12.insertCell(4);
var cell6 = row12.insertCell(5);
var cell7 = row12.insertCell(6);
var cell8 = row12.insertCell(7);
var cell9 = row12.insertCell(8);
var cell10 = row12.insertCell(9);
var cell11 = row12.insertCell(10);
var cell12= row12.insertCell(11);
var cell13 = row12.insertCell(12);
var cell14= row12.insertCell(13);
var cell15 = row12.insertCell(14);
cell1.innerHTML = "Max Part size";
cell2.innerHTML =sum1/sum;
cell3.innerHTML =sum1Table2/sumTable2; 
cell4.innerHTML =document.getElementById("SLA-row6").value;
cell5.innerHTML =(sum1/sum)*(sum1Table2/sumTable2)*document.getElementById("SLA-row6").value;
cell6.innerHTML =document.getElementById("SLS-row6").value;
cell7.innerHTML =(sum1/sum)*(sum1Table2/sumTable2)*document.getElementById("SLS-row6").value
cell8.innerHTML = document.getElementById("FDM-row6").value;
cell9.innerHTML = (sum1/sum)*(sum1Table2/sumTable2)*document.getElementById("FDM-row6").value
cell10.innerHTML =document.getElementById("LOM-row6").value;
cell11.innerHTML =(sum1/sum)*(sum1Table2/sumTable2)*document.getElementById("LOM-row6").value
cell12.innerHTML =document.getElementById("3DP-row6").value;
cell13.innerHTML =(sum1/sum)*(sum1Table2/sumTable2)*document.getElementById("3DP-row6").value
cell14.innerHTML =document.getElementById("SGC-row6").value;
cell15.innerHTML =(sum1/sum)*(sum1Table2/sumTable2)*document.getElementById("SGC-row6").value;

// row 12 ended

// row 13 
var row13= table.insertRow(0);
var cell1 = row13.insertCell(0);
var cell2 = row13.insertCell(1);
var cell3 = row13.insertCell(2);
var cell4 = row13.insertCell(3);
var cell5 = row13.insertCell(4);
var cell6 = row13.insertCell(5);
var cell7 = row13.insertCell(6);
var cell8 = row13.insertCell(7);
var cell9 = row13.insertCell(8);
var cell10 = row13.insertCell(9);
var cell11 = row13.insertCell(10);
var cell12= row13.insertCell(11);
var cell13 =row13.insertCell(12);
var cell14= row13.insertCell(13);
var cell15 = row13.insertCell(14);
cell1.innerHTML = "Price";
cell2.innerHTML =sum1/sum;
cell3.innerHTML =sum2Table2/sumTable2; 
cell4.innerHTML =document.getElementById("SLA-row5").value;
cell5.innerHTML =(sum1/sum)*(sum2Table2/sumTable2)*document.getElementById("SLA-row5").value;
cell6.innerHTML =document.getElementById("SLS-row5").value;
cell7.innerHTML =(sum1/sum)*(sum2Table2/sumTable2)*document.getElementById("SLS-row5").value
cell8.innerHTML = document.getElementById("FDM-row5").value;
cell9.innerHTML = (sum1/sum)*(sum2Table2/sumTable2)*document.getElementById("FDM-row5").value
cell10.innerHTML =document.getElementById("LOM-row4").value;
cell11.innerHTML =(sum1/sum)*(sum2Table2/sumTable2)*document.getElementById("LOM-row5").value
cell12.innerHTML =document.getElementById("3DP-row5").value;
cell13.innerHTML =(sum1/sum)*(sum2Table2/sumTable2)*document.getElementById("3DP-row5").value
cell14.innerHTML =document.getElementById("SGC-row5").value;
cell15.innerHTML =(sum1/sum)*(sum2Table2/sumTable2)*document.getElementById("SGC-row5").value;

// row 13 ended

// row 14

var row14 = table.insertRow(0);
var cell1 = row14.insertCell(0);
var cell2 = row14.insertCell(1);
var cell3 = row14.insertCell(2);
var cell4 = row14.insertCell(3);
var cell5 = row14.insertCell(4);
var cell6 = row14.insertCell(5);
var cell7 = row14.insertCell(6);
var cell8 = row14.insertCell(7);
var cell9 = row14.insertCell(8);
var cell10 = row14.insertCell(9);
var cell11 = row14.insertCell(10);
var cell12= row14.insertCell(11);
var cell13 = row14.insertCell(12);
var cell14= row14.insertCell(13);
var cell15 = row14.insertCell(14);
cell1.innerHTML = "Prod. Cost";
cell2.innerHTML =sum1/sum;
cell3.innerHTML =sum3Table2/sumTable2; 
cell4.innerHTML =document.getElementById("SLA-row4").value;
cell5.innerHTML =(sum1/sum)*(sum3Table2/sumTable2)*document.getElementById("SLA-row4").value;
cell6.innerHTML =document.getElementById("SLS-row4").value;
cell7.innerHTML =(sum1/sum)*(sum3Table2/sumTable2)*document.getElementById("SLS-row4").value
cell8.innerHTML = document.getElementById("FDM-row4").value;
cell9.innerHTML = (sum1/sum)*(sum3Table2/sumTable2)*document.getElementById("FDM-row4").value
cell10.innerHTML =document.getElementById("LOM-row4").value;
cell11.innerHTML =(sum1/sum)*(sum3Table2/sumTable2)*document.getElementById("LOM-row4").value
cell12.innerHTML =document.getElementById("3DP-row4").value;
cell13.innerHTML =(sum1/sum)*(sum3Table2/sumTable2)*document.getElementById("3DP-row4").value
cell14.innerHTML =document.getElementById("SGC-row4").value;
cell15.innerHTML =(sum1/sum)*(sum3Table2/sumTable2)*document.getElementById("SGC-row4").value;
// row 14 ended 

var row15 = table.insertRow(0);
var cell1 = row15.insertCell(0);
var cell2 = row15.insertCell(1);
var cell3 = row15.insertCell(2);
var cell4 = row15.insertCell(3);
var cell5 = row15.insertCell(4);
var cell6 = row15.insertCell(5);
var cell7 = row15.insertCell(6);
var cell8 = row15.insertCell(7);
var cell9 = row15.insertCell(8);
var cell10 = row15.insertCell(9);
var cell11 = row15.insertCell(10);
var cell12= row15.insertCell(11);
var cell13 = row15.insertCell(12);
var cell14= row15.insertCell(13);
var cell15 = row15.insertCell(14);
cell1.innerHTML = "Surface Finish";
cell2.innerHTML =sum1/sum;
cell3.innerHTML =sum4Table2/sumTable2; 
cell4.innerHTML =document.getElementById("SLA-row3").value;
cell5.innerHTML =(sum1/sum)*(sum4Table2/sumTable2)*document.getElementById("SLA-row3").value;
cell6.innerHTML =document.getElementById("SLS-row3").value;
cell7.innerHTML =(sum1/sum)*(sum4Table2/sumTable2)*document.getElementById("SLS-row3").value
cell8.innerHTML = document.getElementById("FDM-row3").value;
cell9.innerHTML = (sum1/sum)*(sum4Table2/sumTable2)*document.getElementById("FDM-row3").value
cell10.innerHTML =document.getElementById("LOM-row3").value;
cell11.innerHTML =(sum1/sum)*(sum4Table2/sumTable2)*document.getElementById("LOM-row3").value
cell12.innerHTML =document.getElementById("3DP-row3").value;
cell13.innerHTML =(sum1/sum)*(sum4Table2/sumTable2)*document.getElementById("3DP-row3").value
cell14.innerHTML =document.getElementById("SGC-row3").value;
cell15.innerHTML =(sum1/sum)*(sum4Table2/sumTable2)*document.getElementById("SGC-row3").value;
// row 15 ended


var row16 = table.insertRow(0);
var cell1 = row16.insertCell(0);
var cell2 = row16.insertCell(1);
var cell3 = row16.insertCell(2);
var cell4 = row16.insertCell(3);
var cell5 = row16.insertCell(4);
var cell6 = row16.insertCell(5);
var cell7 = row16.insertCell(6);
var cell8 = row16.insertCell(7);
var cell9 = row16.insertCell(8);
var cell10 = row16.insertCell(9);
var cell11 = row16.insertCell(10);
var cell12= row16.insertCell(11);
var cell13 = row16.insertCell(12);
var cell14= row16.insertCell(13);
var cell15 = row16.insertCell(14);
cell1.innerHTML = "Variety";
cell2.innerHTML =sum1/sum;
cell3.innerHTML =sum5Table2/sumTable2; 
cell4.innerHTML =document.getElementById("SLA-row2").value;
cell5.innerHTML =(sum1/sum)*(sum5Table2/sumTable2)*document.getElementById("SLA-row2").value;
cell6.innerHTML =document.getElementById("SLS-row2").value;
cell7.innerHTML =(sum1/sum)*(sum5Table2/sumTable2)*document.getElementById("SLS-row2").value
cell8.innerHTML = document.getElementById("FDM-row2").value;
cell9.innerHTML = (sum1/sum)*(sum5Table2/sumTable2)*document.getElementById("FDM-row2").value
cell10.innerHTML =document.getElementById("LOM-row2").value;
cell11.innerHTML =(sum1/sum)*(sum5Table2/sumTable2)*document.getElementById("LOM-row2").value
cell12.innerHTML =document.getElementById("3DP-row2").value;
cell13.innerHTML =(sum1/sum)*(sum5Table2/sumTable2)*document.getElementById("3DP-row2").value
cell14.innerHTML =document.getElementById("SGC-row2").value;
cell15.innerHTML =(sum1/sum)*(sum5Table2/sumTable2)*document.getElementById("SGC-row2").value;
// 
// row 16 ended

var row17 = table.insertRow(0);
var cell1 = row17.insertCell(0);
var cell2 = row17.insertCell(1);
var cell3 = row17.insertCell(2);
var cell4 = row17.insertCell(3);
var cell5 = row17.insertCell(4);
var cell6 = row17.insertCell(5);
var cell7 = row17.insertCell(6);
var cell8 = row17.insertCell(7);
var cell9 = row17.insertCell(8);
var cell10 = row17.insertCell(9);
var cell11 = row17.insertCell(10);
var cell12= row17.insertCell(11);
var cell13 = row17.insertCell(12);
var cell14= row17.insertCell(13);
var cell15 = row17.insertCell(14);
cell1.innerHTML = "Speed";
cell2.innerHTML =sum1/sum;
cell3.innerHTML =sum6Table2/sumTable2; 
console.log(sum6Table2/sumTable2);
cell4.innerHTML =document.getElementById("SLA-row1").value;
cell5.innerHTML =(sum1/sum)*(sum6Table2/sumTable2)*document.getElementById("SLA-row1").value;
cell6.innerHTML =document.getElementById("SLS-row1").value;
cell7.innerHTML =(sum1/sum)*(sum6Table2/sumTable2)*document.getElementById("SLS-row1").value
cell8.innerHTML = document.getElementById("FDM-row1").value;
cell9.innerHTML = (sum1/sum)*(sum6Table2/sumTable2)*document.getElementById("FDM-row1").value
cell10.innerHTML =document.getElementById("LOM-row1").value;
cell11.innerHTML =(sum1/sum)*(sum6Table2/sumTable2)*document.getElementById("LOM-row1").value
cell12.innerHTML =document.getElementById("3DP-row1").value;
cell13.innerHTML =(sum1/sum)*(sum6Table2/sumTable2)*document.getElementById("3DP-row1").value
cell14.innerHTML =document.getElementById("SGC-row1").value;
cell15.innerHTML =(sum1/sum)*(sum6Table2/sumTable2)*document.getElementById("SGC-row1").value;
// row 17 ended

var SLAgrandRating=(sum4/sum)*(sum1Table5/sumTable5)*document.getElementById("SLA-row17").value+(sum1/sum)*(sum6Table2/sumTable2)*document.getElementById("SLA-row1").value
+(sum1/sum)*(sum5Table2/sumTable2)*document.getElementById("SLA-row2").value+(sum1/sum)*(sum4Table2/sumTable2)*document.getElementById("SLA-row3").value
+(sum1/sum)*(sum3Table2/sumTable2)*document.getElementById("SLA-row4").value +(sum1/sum)*(sum2Table2/sumTable2)*document.getElementById("SLA-row5").value
+(sum1/sum)*(sum1Table2/sumTable2)*document.getElementById("SLA-row6").value
+(sum2/sum)*(sum4Table4/sumTable4)*document.getElementById("SLA-row7").value
+(sum2/sum)*(sum3Table4/sumTable4)*document.getElementById("SLA-row8").value
+(sum2/sum)*(sum2Table4/sumTable4)*document.getElementById("SLA-row9").value
+(sum2/sum)*(sum1Table4/sumTable4)*document.getElementById("SLA-row10").value
+(sum3/sum)*(sum3Table3/sumTable3)*document.getElementById("SLA-row11").value
+(sum3/sum)*(sum2Table3/sumTable3)*document.getElementById("SLA-row12").value
+(sum3/sum)*(sum1Table3/sumTable3)*document.getElementById("SLA-row13").value
+(sum4/sum)*(sum4Table5/sumTable5)*document.getElementById("SLA-row14").value
+(sum4/sum)*(sum3Table5/sumTable5)*document.getElementById("SLA-row15").value
+(sum4/sum)*(sum2Table5/sumTable5)*document.getElementById("SLA-row16").value

var SLSgrandRating=(sum1/sum)*(sum6Table2/sumTable2)*document.getElementById("SLS-row1").value
+(sum1/sum)*(sum5Table2/sumTable2)*document.getElementById("SLS-row2").value
+(sum1/sum)*(sum4Table2/sumTable2)*document.getElementById("SLS-row3").value
+(sum1/sum)*(sum3Table2/sumTable2)*document.getElementById("SLS-row4").value
+(sum1/sum)*(sum2Table2/sumTable2)*document.getElementById("SLS-row5").value
+(sum1/sum)*(sum1Table2/sumTable2)*document.getElementById("SLS-row6").value
+(sum2/sum)*(sum4Table4/sumTable4)*document.getElementById("SLS-row7").value
+(sum2/sum)*(sum3Table4/sumTable4)*document.getElementById("SLS-row8").value
+(sum2/sum)*(sum2Table4/sumTable4)*document.getElementById("SLS-row9").value
+(sum2/sum)*(sum2Table4/sumTable4)*document.getElementById("SLS-row9").value
+(sum2/sum)*(sum1Table4/sumTable4)*document.getElementById("SLS-row10").value
+(sum3/sum)*(sum3Table3/sumTable3)*document.getElementById("SLS-row11").value
+(sum3/sum)*(sum2Table3/sumTable3)*document.getElementById("SLS-row12").value
+(sum3/sum)*(sum1Table3/sumTable3)*document.getElementById("SLS-row13").value
+(sum4/sum)*(sum4Table5/sumTable5)*document.getElementById("SLS-row14").value
+(sum4/sum)*(sum3Table5/sumTable5)*document.getElementById("SLS-row15").value
+(sum4/sum)*(sum2Table5/sumTable5)*document.getElementById("SLS-row16").value
+(sum4/sum)*(sum1Table5/sumTable5)*document.getElementById("SLS-row17").value;

var FDMgrandRating=(sum1/sum)*(sum6Table2/sumTable2)*document.getElementById("FDM-row1").value
+(sum1/sum)*(sum5Table2/sumTable2)*document.getElementById("FDM-row2").value
+(sum1/sum)*(sum4Table2/sumTable2)*document.getElementById("FDM-row3").value
+(sum1/sum)*(sum3Table2/sumTable2)*document.getElementById("FDM-row4").value
+(sum1/sum)*(sum2Table2/sumTable2)*document.getElementById("FDM-row5").value
+(sum1/sum)*(sum1Table2/sumTable2)*document.getElementById("FDM-row6").value
+(sum2/sum)*(sum4Table4/sumTable4)*document.getElementById("SLS-row7").value
+(sum2/sum)*(sum3Table4/sumTable4)*document.getElementById("FDM-row8").value
+(sum2/sum)*(sum2Table4/sumTable4)*document.getElementById("FDM-row9").value
+(sum2/sum)*(sum1Table4/sumTable4)*document.getElementById("FDM-row10").value
+(sum3/sum)*(sum3Table3/sumTable3)*document.getElementById("FDM-row11").value
+(sum3/sum)*(sum2Table3/sumTable3)*document.getElementById("FDM-row12").value
+(sum3/sum)*(sum1Table3/sumTable3)*document.getElementById("FDM-row13").value
+(sum4/sum)*(sum4Table5/sumTable5)*document.getElementById("FDM-row14").value
+(sum4/sum)*(sum3Table5/sumTable5)*document.getElementById("FDM-row15").value
+ (sum4/sum)*(sum2Table5/sumTable5)*document.getElementById("FDM-row16").value
+ (sum4/sum)*(sum1Table5/sumTable5)*document.getElementById("FDM-row17").value


var LOMgrandRating=(sum1/sum)*(sum6Table2/sumTable2)*document.getElementById("LOM-row1").value
+(sum1/sum)*(sum5Table2/sumTable2)*document.getElementById("LOM-row2").value
+(sum1/sum)*(sum4Table2/sumTable2)*document.getElementById("LOM-row3").value
+(sum1/sum)*(sum3Table2/sumTable2)*document.getElementById("LOM-row4").value
+(sum1/sum)*(sum2Table2/sumTable2)*document.getElementById("LOM-row5").value
+(sum1/sum)*(sum1Table2/sumTable2)*document.getElementById("LOM-row6").value
+(sum2/sum)*(sum4Table4/sumTable4)*document.getElementById("LOM-row7").value
+(sum2/sum)*(sum3Table4/sumTable4)*document.getElementById("LOM-row8").value
+(sum2/sum)*(sum2Table4/sumTable4)*document.getElementById("LOM-row9").value
+(sum2/sum)*(sum1Table4/sumTable4)*document.getElementById("LOM-row10").value
+(sum3/sum)*(sum3Table3/sumTable3)*document.getElementById("LOM-row11").value
+(sum3/sum)*(sum2Table3/sumTable3)*document.getElementById("LOM-row12").value
+(sum3/sum)*(sum1Table3/sumTable3)*document.getElementById("LOM-row13").value
+(sum4/sum)*(sum4Table5/sumTable5)*document.getElementById("LOM-row14").value
+(sum4/sum)*(sum3Table5/sumTable5)*document.getElementById("LOM-row15").value
+(sum4/sum)*(sum2Table5/sumTable5)*document.getElementById("LOM-row16").value
+(sum4/sum)*(sum1Table5/sumTable5)*document.getElementById("LOM-row17").value;


var ThDPgrandRating=(sum1/sum)*(sum6Table2/sumTable2)*document.getElementById("3DP-row1").value
+(sum1/sum)*(sum5Table2/sumTable2)*document.getElementById("3DP-row2").value
+(sum1/sum)*(sum4Table2/sumTable2)*document.getElementById("3DP-row3").value
+(sum1/sum)*(sum3Table2/sumTable2)*document.getElementById("3DP-row4").value
+(sum1/sum)*(sum2Table2/sumTable2)*document.getElementById("3DP-row5").value
+(sum1/sum)*(sum1Table2/sumTable2)*document.getElementById("3DP-row6").value
+(sum2/sum)*(sum4Table4/sumTable4)*document.getElementById("3DP-row7").value
+(sum2/sum)*(sum3Table4/sumTable4)*document.getElementById("3DP-row8").value
+(sum2/sum)*(sum2Table4/sumTable4)*document.getElementById("3DP-row9").value
+(sum2/sum)*(sum1Table4/sumTable4)*document.getElementById("3DP-row10").value
+(sum3/sum)*(sum3Table3/sumTable3)*document.getElementById("3DP-row11").value
+(sum3/sum)*(sum2Table3/sumTable3)*document.getElementById("3DP-row12").value
+(sum3/sum)*(sum1Table3/sumTable3)*document.getElementById("3DP-row13").value
+(sum4/sum)*(sum4Table5/sumTable5)*document.getElementById("3DP-row14").value
+(sum4/sum)*(sum3Table5/sumTable5)*document.getElementById("3DP-row15").value
+(sum4/sum)*(sum2Table5/sumTable5)*document.getElementById("3DP-row16").value
+(sum4/sum)*(sum1Table5/sumTable5)*document.getElementById("3DP-row17").value

var SGCgrandRating=(sum1/sum)*(sum6Table2/sumTable2)*document.getElementById("SGC-row1").value
+(sum1/sum)*(sum5Table2/sumTable2)*document.getElementById("SGC-row2").value
+(sum1/sum)*(sum4Table2/sumTable2)*document.getElementById("SGC-row3").value
+(sum1/sum)*(sum3Table2/sumTable2)*document.getElementById("SGC-row4").value
+(sum1/sum)*(sum2Table2/sumTable2)*document.getElementById("SGC-row5").value
+(sum1/sum)*(sum1Table2/sumTable2)*document.getElementById("SGC-row6").value
+(sum2/sum)*(sum4Table4/sumTable4)*document.getElementById("SGC-row7").value
+(sum2/sum)*(sum3Table4/sumTable4)*document.getElementById("SGC-row8").value
+(sum2/sum)*(sum2Table4/sumTable4)*document.getElementById("SGC-row9").value
+(sum2/sum)*(sum1Table4/sumTable4)*document.getElementById("SGC-row10").value
+(sum3/sum)*(sum3Table3/sumTable3)*document.getElementById("SGC-row11").value
+(sum3/sum)*(sum2Table3/sumTable3)*document.getElementById("SGC-row12").value
+(sum3/sum)*(sum1Table3/sumTable3)*document.getElementById("SGC-row13").value
+(sum4/sum)*(sum4Table5/sumTable5)*document.getElementById("SGC-row14").value
+(sum4/sum)*(sum3Table5/sumTable5)*document.getElementById("SGC-row15").value
+(sum4/sum)*(sum2Table5/sumTable5)*document.getElementById("SGC-row16").value
+(sum4/sum)*(sum1Table5/sumTable5)*document.getElementById("SGC-row17").value;







var table1 = document.getElementById("finalAns");
var row1= table1.insertRow(0)
var cell1=row1.insertCell(0);
var cell2=row1.insertCell(1);
cell1.innerHTML="SLA";
cell2.innerHTML=SLAgrandRating;


var row2= table1.insertRow(0)
var cell1=row2.insertCell(0);
var cell2=row2.insertCell(1);
cell1.innerHTML="SLS";
cell2.innerHTML=SLSgrandRating;

var row3= table1.insertRow(0)
var cell1=row3.insertCell(0);
var cell2=row3.insertCell(1);
cell1.innerHTML="FDM";
cell2.innerHTML=FDMgrandRating;

var row4= table1.insertRow(0)
var cell1=row4.insertCell(0);
var cell2=row4.insertCell(1);
cell1.innerHTML="LOM";
cell2.innerHTML=LOMgrandRating;

var row5= table1.insertRow(0)
var cell1=row5.insertCell(0);
var cell2=row5.insertCell(1);
cell1.innerHTML="3DP";
cell2.innerHTML=ThDPgrandRating;

var row6= table1.insertRow(0)
var cell1=row6.insertCell(0);
var cell2=row6.insertCell(1);
cell1.innerHTML="SGC";
cell2.innerHTML=SGCgrandRating;


var row7= table1.insertRow(0)
var cell1=row7.insertCell(0);
var cell2=row7.insertCell(1);
cell1.innerHTML="GRAND RATING POINT"
}