
// function for table 2
function myCreateFunction2() {
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

  var table = document.getElementById("table2");
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
  
  cell1.innerHTML = "max-part-size";
  cell2.innerHTML = 1/speedVSmaxPartSize;
  cell3.innerHTML =1/varietyVSmaxPartSize;
  cell4.innerHTML =1/surfaceFinishVSmaxPartSize ;
  cell5.innerHTML = 1/prodCostVSmaxPartSize;
  cell6.innerHTML = 1/priceVSmaxPartSize;
  cell7.innerHTML = 1;
  cell8.innerHTML =sum1Table2;
  cell9.innerHTML =sum1Table2/sumTable2; 

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
  
  cell1.innerHTML = "price";
  cell2.innerHTML = 1/speedVSprice;
  cell3.innerHTML =1/varietyVSprice;
  cell4.innerHTML =1/surfaceFinishVSprice ;
  cell5.innerHTML = 1/prodCostVSprice;
  cell6.innerHTML = 1;
  cell7.innerHTML =priceVSmaxPartSize ;
  cell8.innerHTML =sum2Table2;
  cell9.innerHTML =sum2Table2/sumTable2; 
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
  
  cell1.innerHTML = "prod. cost";
  cell2.innerHTML = 1/speedVSprodCost;
  cell3.innerHTML =1/varietyVSprodCost;
  cell4.innerHTML =1/surfaceFinishVSprodCost ;
  cell5.innerHTML = 1;
  cell6.innerHTML = prodCostVSprice;
  cell7.innerHTML = prodCostVSmaxPartSize;
  cell8.innerHTML =sum3Table2;
  cell9.innerHTML =sum3Table2/sumTable2; 

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
  cell1.innerHTML = "Surface finsish";
  cell2.innerHTML = 1/speedVSsurfaceFinish;
  cell3.innerHTML =1/varietyVSsurfaceFinish;
  cell4.innerHTML =1 ;
  cell5.innerHTML = surfaceFinishVSprodCost;
  cell6.innerHTML = surfaceFinishVSprice;
  cell7.innerHTML = surfaceFinishVSmaxPartSize;
  cell8.innerHTML =sum4Table2;
  cell9.innerHTML =sum4Table2/sumTable2; 
  // row5 started
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
  cell1.innerHTML = "variety";
  cell2.innerHTML = 1/speedVSvariety;
  cell3.innerHTML =1;
  cell4.innerHTML =varietyVSsurfaceFinish;
  cell5.innerHTML = varietyVSprodCost;
  cell6.innerHTML = varietyVSprice;
  cell7.innerHTML = varietyVSmaxPartSize;
  cell8.innerHTML =sum5Table2;
  cell9.innerHTML =sum5Table2/sumTable2; 

  // row5 ended

  //row 6 started
  var row6 = table.insertRow(0);
  var cell1 = row6.insertCell(0);
  var cell2= row6.insertCell(1);
  var cell3 = row6.insertCell(2);
  var cell4= row6.insertCell(3);
  var cell5 = row6.insertCell(4);
  var cell6 = row6.insertCell(5);
  var cell7 = row6.insertCell(6);
  var cell8 = row6.insertCell(7);
  var cell9 = row6.insertCell(8);
  cell1.innerHTML = "speed";
  cell2.innerHTML =1 ;
  cell3.innerHTML =speedVSvariety;
  cell4.innerHTML =speedVSsurfaceFinish;
  cell5.innerHTML = speedVSprodCost;
  cell6.innerHTML = speedVSprice;
  cell7.innerHTML = speedVSmaxPartSize;
  cell8.innerHTML =sum6Table2;
  cell9.innerHTML =sum6Table2/sumTable2; 
  // row 6 ended


  //row 7 started
  var row6 = table.insertRow(0);
  var cell1= row6.insertCell(0);
  var cell2 = row6.insertCell(1);
  var cell3 = row6.insertCell(2);
  var cell4 = row6.insertCell(3);
  var cell5 = row6.insertCell(4);
  var cell6 = row6.insertCell(5);
  var cell7 = row6.insertCell(6);
  var cell8= row6.insertCell(7);
  var cell9= row6.insertCell(8);
  cell1.innerHTML = "";
  cell2.innerHTML ="speed" ;
  cell3.innerHTML ="Variety";
  cell4.innerHTML ="Surface Finish";
  cell5.innerHTML = "Prod. Cost";
  cell6.innerHTML = "Price";
  cell7.innerHTML = "Max Part Size";
  cell8.innerHTML ="Eigen Values";
  cell9.innerHTML ="consistency ratio"; 

  // row 7 ended
  

}





















