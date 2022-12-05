
function myCreateFunction1() {
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







  console.log(sum);
  console.log("welcome");
  var table = document.getElementById("table1");
  // row 1
  var row1 = table.insertRow(0);
  var cell1 = row1.insertCell(0);
  var cell2 = row1.insertCell(1);
  var cell3 = row1.insertCell(2);
  var cell4 = row1.insertCell(3);
  var cell5 = row1.insertCell(4);
  var cell6 = row1.insertCell(5);
  var cell7 = row1.insertCell(6);
  cell1.innerHTML = "Other issues of company";
  cell2.innerHTML = 1/productReqVsOtherIssuesOfComp;
  cell3.innerHTML =reverseProcessReqVsOtherIssuesOfComp;
  cell4.innerHTML =reverseSocialIssuesVsOtherIssuesOfComp ;
  cell5.innerHTML = 1;
  cell6.innerHTML = sum4;
  cell7.innerHTML = sum4/sum;

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
  cell1.innerHTML = "Social & Env issues";
  cell2.innerHTML =reverseProductReqVsSocialEnv;
  cell3.innerHTML =1/processReqVsSocialReqIssues;
  cell4.innerHTML = 1;
  cell5.innerHTML = reverseProcessReqVsSocialReqIssues;
  cell6.innerHTML = sum3;
  cell7.innerHTML = sum3/sum;
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
  cell1.innerHTML = "Process req. issues";
  cell2.innerHTML =reverseProductReqVsProcessReq;
  cell3.innerHTML = 1;
  cell4.innerHTML = processReqVsSocialReqIssues;
  cell5.innerHTML = processReqVsOtherIssuesOfComp;
  cell6.innerHTML = sum2;
  cell7.innerHTML = sum2/sum;

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
  cell1.innerHTML = "Prod. req. issues";
  cell2.innerHTML = 1;
  cell3.innerHTML = productReqVsProcessReq;
  cell4.innerHTML = productReqVsSocialEnv;
  cell5.innerHTML = productReqVsOtherIssuesOfComp;
  cell6.innerHTML = `(${productReqVsProcessReq}  * ${productReqVsSocialEnv} *  ${productReqVsOtherIssuesOfComp}  ) 1/4 =
   ${sum1}`;
  cell7.innerHTML = sum1/sum;
  // row5 started
  var row5 = table.insertRow(0);
  var cell1 = row5.insertCell(0);
  var cell2 = row5.insertCell(1);
  var cell3 = row5.insertCell(2);
  var cell4 = row5.insertCell(3);
  var cell5 = row5.insertCell(4);
  var cell6 = row5.insertCell(5);
  var cell7 = row5.insertCell(6);
  cell1.innerHTML = "";
  cell2.innerHTML = "Prod. req. issues";
  cell3.innerHTML = "Process req. issues";
  cell4.innerHTML = "Social & Env issues";
  cell5.innerHTML = "Other issues of company";
  cell6.innerHTML = "Eigen values(geometric mean)";
  cell7.innerHTML = "Consistency ratio of weight";

  // row5 ended

  



}
