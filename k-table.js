// and dont for get to edit in HTML file too !!!!!!!!!!!!!!
// e.g.  >>>>>>> kTable1GetG

// <<<<< *** Mark all 6 table ***  
//  *** Mark all 6 table ***  >>>>>

var kitchenListLenNow = 0;
// kitchenListLenNow ---> count reason --> add row to the main table

var kitchenBackListLenNow = 0;
// kitchenBackListLenNow ---> count reason --> add row to the backup table

var kitchenBackList = [];
// kitchenBackList.push.apply(kitchenBackList, table1ConfirmedKitchen);

var kitchenQueue = 1;
// kitchenBackList.push.apply(kitchenBackList, table1ConfirmedKitchen);

document.getElementById("btnDoneOne").disabled = true;
document.getElementById("btnDoneAll").disabled = true;








// function kTablAllGetG() {
//         // <<<<< *** Mark all 6 table ***  
//         kTable1GetG();
//         //  *** Mark all 6 table ***  >>>>>
//         kTable2GetG(); 

//         // kTable3GetG(); 
//         // kTable4GetG(); 
//         // kTable5GetG(); 
//         // kTable6GetG();     
//         if (kitchenListLenNow > 0){
//             document.getElementById("btnDoneOne").disabled = false;
//             document.getElementById("btnDoneAll").disabled = false;    
//         }                  
// }


  // Selecting button element
    var kTablAllGetG = document.getElementById("btnKTablAllGetG");
     
    // Assigning event listeners to the button
    kTablAllGetG.addEventListener("click", kTable1GetG);
                                                //must edit
    kTablAllGetG.addEventListener("click", kTable2GetG);

    kTablAllGetG.addEventListener("click", kTable3GetG);

    kTablAllGetG.addEventListener("click", kTable4GetG);

    kTablAllGetG.addEventListener("click", kTable5GetG);

    kTablAllGetG.addEventListener("click", kTable6GetG);



// <<<<< *** Mark all 6 table ***  
function kTable1GetG() {
         //must edit (maybe this kTable1GetG can get all 6 table in one btn)
  var table1ConfirmedKitchen = JSON.parse(localStorage.getItem("kTable1Item")); 
          //must edit                                            //must edit
  console.log(table1ConfirmedKitchen);
              //must edit
  kitchenBackList.push.apply(kitchenBackList, table1ConfirmedKitchen);
                                               //must edit     
  console.log(kitchenBackList);

  var kitchenTable = document.getElementById("k-table-display");
    var table1KitchenLen = table1ConfirmedKitchen.length;
          //must edit         //must edit

        for (var i = 0; i < table1KitchenLen; i++){          
                              //must edit
              var xRow = kitchenTable.insertRow();
              var cell1 = xRow.insertCell(0);
              var cell2 = xRow.insertCell(1);
              var cell3 = xRow.insertCell(2);
              var cell4 = xRow.insertCell(3);
              var cell5 = xRow.insertCell(4);
              cell1.innerHTML = "-";
              cell2.innerHTML = "-";
              cell3.innerHTML = "-";
              cell4.innerHTML = "-";
              cell5.innerHTML = "-";

            var xRow = document.getElementById("k-table-display").rows[i+kitchenListLenNow].cells;
            xRow[0].innerHTML = kitchenQueue+"&nbsp; &nbsp;";
            xRow[1].innerHTML = table1ConfirmedKitchen[i].menuListCode+"&nbsp; &nbsp; &nbsp;";
                                  //must edit
            xRow[2].innerHTML = table1ConfirmedKitchen[i].menuListName;
                                  //must edit
            xRow[3].innerHTML = table1ConfirmedKitchen[i].menuListTableNum;
                                  //must edit      
            var time = new Date();
            xRow[4].innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();

            kitchenQueue ++;
              
        }  


           // for (var i = 0; i < table1KitchenLen; i++){              
                  // the below 2 lines are  for back up list 
                  // kitchenBackList.push(table1ConfirmedKitchen[i]);
                  // console.log("kitchenBackList "+kitchenBackList[i].menuListName);

                  // BUT !!! I dont need it any more because I have 
                  // the syntax like .....
                  // kitchenBackList.push.apply(kitchenBackList, table1ConfirmedKitchen);
           // }           


kitchenListLenNow = kitchenListLenNow+table1KitchenLen;
                                      //must edit


// this need to remove because this is just test get data from table 2 !!!!!!!
if (kitchenListLenNow > 0){
            document.getElementById("btnDoneOne").disabled = false;
            document.getElementById("btnDoneAll").disabled = false;    
        }
// this need to remove because this is just test get data from table 2 !!!!!!!



console.log("table1KitchenLen");
              //must edit
console.log(table1KitchenLen);
              //must edit
console.log("kitchenListLenNow");
console.log(kitchenListLenNow);
localStorage.setItem("kTable1Item", null);
                         //must edit     

}

//  *** Mark all 6 table ***  >>>>>


function kTable2GetG() {
         //must edit (maybe this kTable1GetG can get all 6 table in one btn)
  var table2ConfirmedKitchen = JSON.parse(localStorage.getItem("kTable2Item")); 
          //must edit                                            //must edit
  console.log(table2ConfirmedKitchen);
              //must edit
  kitchenBackList.push.apply(kitchenBackList, table2ConfirmedKitchen);
                                               //must edit     
  console.log(kitchenBackList);

  var kitchenTable = document.getElementById("k-table-display");
    var table2KitchenLen = table2ConfirmedKitchen.length;
          //must edit         //must edit

        for (var i = 0; i < table2KitchenLen; i++){          
                              //must edit
              var xRow = kitchenTable.insertRow();
              var cell1 = xRow.insertCell(0);
              var cell2 = xRow.insertCell(1);
              var cell3 = xRow.insertCell(2);
              var cell4 = xRow.insertCell(3);
              var cell5 = xRow.insertCell(4);
              cell1.innerHTML = "-";
              cell2.innerHTML = "-";
              cell3.innerHTML = "-";
              cell4.innerHTML = "-";
              cell5.innerHTML = "-";

            var xRow = document.getElementById("k-table-display").rows[i+kitchenListLenNow].cells;
            xRow[0].innerHTML = kitchenQueue+"&nbsp; &nbsp;";
            xRow[1].innerHTML = table2ConfirmedKitchen[i].menuListCode+"&nbsp; &nbsp; &nbsp;";
                                  //must edit
            xRow[2].innerHTML = table2ConfirmedKitchen[i].menuListName;
                                  //must edit
            xRow[3].innerHTML = table2ConfirmedKitchen[i].menuListTableNum;
                                  //must edit      
            var time = new Date();
            xRow[4].innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();

            kitchenQueue ++;
              
        }  


kitchenListLenNow = kitchenListLenNow+table2KitchenLen;
                                      //must edit


// this need to remove because this is just test get data from table 2 !!!!!!!
if (kitchenListLenNow > 0){
            document.getElementById("btnDoneOne").disabled = false;
            document.getElementById("btnDoneAll").disabled = false;    
        }
// this need to remove because this is just test get data from table 2 !!!!!!!


console.log("table2KitchenLen");
              //must edit
console.log(table2KitchenLen);
              //must edit
console.log("kitchenListLenNow");
console.log(kitchenListLenNow);
localStorage.setItem("kTable2Item", null);
                         //must edit     


}

///////////////////

function kTable3GetG() {
         //must edit (maybe this kTable1GetG can get all 6 table in one btn)
  var table3ConfirmedKitchen = JSON.parse(localStorage.getItem("kTable3Item")); 
          //must edit                                            //must edit
  console.log(table3ConfirmedKitchen);
              //must edit
  kitchenBackList.push.apply(kitchenBackList, table3ConfirmedKitchen);
                                               //must edit     
  console.log(kitchenBackList);

  var kitchenTable = document.getElementById("k-table-display");
    var table3KitchenLen = table3ConfirmedKitchen.length;
          //must edit         //must edit

        for (var i = 0; i < table3KitchenLen; i++){          
                              //must edit
              var xRow = kitchenTable.insertRow();
              var cell1 = xRow.insertCell(0);
              var cell2 = xRow.insertCell(1);
              var cell3 = xRow.insertCell(2);
              var cell4 = xRow.insertCell(3);
              var cell5 = xRow.insertCell(4);
              cell1.innerHTML = "-";
              cell2.innerHTML = "-";
              cell3.innerHTML = "-";
              cell4.innerHTML = "-";
              cell5.innerHTML = "-";

            var xRow = document.getElementById("k-table-display").rows[i+kitchenListLenNow].cells;
            xRow[0].innerHTML = kitchenQueue+"&nbsp; &nbsp;";
            xRow[1].innerHTML = table3ConfirmedKitchen[i].menuListCode+"&nbsp; &nbsp; &nbsp;";
                                  //must edit
            xRow[2].innerHTML = table3ConfirmedKitchen[i].menuListName;
                                  //must edit
            xRow[3].innerHTML = table3ConfirmedKitchen[i].menuListTableNum;
                                  //must edit      
            var time = new Date();
            xRow[4].innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();

            kitchenQueue ++;
              
        }  


kitchenListLenNow = kitchenListLenNow+table3KitchenLen;
                                      //must edit


// this need to remove because this is just test get data from table 2 !!!!!!!
if (kitchenListLenNow > 0){
            document.getElementById("btnDoneOne").disabled = false;
            document.getElementById("btnDoneAll").disabled = false;    
        }
// this need to remove because this is just test get data from table 2 !!!!!!!


console.log("table3KitchenLen");
              //must edit
console.log(table3KitchenLen);
              //must edit
console.log("kitchenListLenNow");
console.log(kitchenListLenNow);
localStorage.setItem("kTable3Item", null);
                         //must edit     


}

///////////////////

function kTable4GetG() {
         //must edit (maybe this kTable1GetG can get all 6 table in one btn)
  var table4ConfirmedKitchen = JSON.parse(localStorage.getItem("kTable4Item")); 
          //must edit                                            //must edit
  console.log(table4ConfirmedKitchen);
              //must edit
  kitchenBackList.push.apply(kitchenBackList, table4ConfirmedKitchen);
                                               //must edit     
  console.log(kitchenBackList);

  var kitchenTable = document.getElementById("k-table-display");
    var table4KitchenLen = table4ConfirmedKitchen.length;
          //must edit         //must edit

        for (var i = 0; i < table4KitchenLen; i++){          
                              //must edit
              var xRow = kitchenTable.insertRow();
              var cell1 = xRow.insertCell(0);
              var cell2 = xRow.insertCell(1);
              var cell3 = xRow.insertCell(2);
              var cell4 = xRow.insertCell(3);
              var cell5 = xRow.insertCell(4);
              cell1.innerHTML = "-";
              cell2.innerHTML = "-";
              cell3.innerHTML = "-";
              cell4.innerHTML = "-";
              cell5.innerHTML = "-";

            var xRow = document.getElementById("k-table-display").rows[i+kitchenListLenNow].cells;
            xRow[0].innerHTML = kitchenQueue+"&nbsp; &nbsp;";
            xRow[1].innerHTML = table4ConfirmedKitchen[i].menuListCode+"&nbsp; &nbsp; &nbsp;";
                                  //must edit
            xRow[2].innerHTML = table4ConfirmedKitchen[i].menuListName;
                                  //must edit
            xRow[3].innerHTML = table4ConfirmedKitchen[i].menuListTableNum;
                                  //must edit      
            var time = new Date();
            xRow[4].innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();

            kitchenQueue ++;
              
        }  


kitchenListLenNow = kitchenListLenNow+table4KitchenLen;
                                      //must edit


// this need to remove because this is just test get data from table 2 !!!!!!!
if (kitchenListLenNow > 0){
            document.getElementById("btnDoneOne").disabled = false;
            document.getElementById("btnDoneAll").disabled = false;    
        }
// this need to remove because this is just test get data from table 2 !!!!!!!


console.log("table4KitchenLen");
              //must edit
console.log(table4KitchenLen);
              //must edit
console.log("kitchenListLenNow");
console.log(kitchenListLenNow);
localStorage.setItem("kTable4Item", null);
                         //must edit     


}


///////////////////


function kTable5GetG() {
         //must edit (maybe this kTable1GetG can get all 6 table in one btn)
  var table5ConfirmedKitchen = JSON.parse(localStorage.getItem("kTable5Item")); 
          //must edit                                            //must edit
  console.log(table5ConfirmedKitchen);
              //must edit
  kitchenBackList.push.apply(kitchenBackList, table5ConfirmedKitchen);
                                               //must edit     
  console.log(kitchenBackList);

  var kitchenTable = document.getElementById("k-table-display");
    var table5KitchenLen = table5ConfirmedKitchen.length;
          //must edit         //must edit

        for (var i = 0; i < table5KitchenLen; i++){          
                              //must edit
              var xRow = kitchenTable.insertRow();
              var cell1 = xRow.insertCell(0);
              var cell2 = xRow.insertCell(1);
              var cell3 = xRow.insertCell(2);
              var cell4 = xRow.insertCell(3);
              var cell5 = xRow.insertCell(4);
              cell1.innerHTML = "-";
              cell2.innerHTML = "-";
              cell3.innerHTML = "-";
              cell4.innerHTML = "-";
              cell5.innerHTML = "-";

            var xRow = document.getElementById("k-table-display").rows[i+kitchenListLenNow].cells;
            xRow[0].innerHTML = kitchenQueue+"&nbsp; &nbsp;";
            xRow[1].innerHTML = table5ConfirmedKitchen[i].menuListCode+"&nbsp; &nbsp; &nbsp;";
                                  //must edit
            xRow[2].innerHTML = table5ConfirmedKitchen[i].menuListName;
                                  //must edit
            xRow[3].innerHTML = table5ConfirmedKitchen[i].menuListTableNum;
                                  //must edit      
            var time = new Date();
            xRow[4].innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();

            kitchenQueue ++;
              
        }  


kitchenListLenNow = kitchenListLenNow+table5KitchenLen;
                                      //must edit


// this need to remove because this is just test get data from table 2 !!!!!!!
if (kitchenListLenNow > 0){
            document.getElementById("btnDoneOne").disabled = false;
            document.getElementById("btnDoneAll").disabled = false;    
        }
// this need to remove because this is just test get data from table 2 !!!!!!!


console.log("table5KitchenLen");
              //must edit
console.log(table5KitchenLen);
              //must edit
console.log("kitchenListLenNow");
console.log(kitchenListLenNow);
localStorage.setItem("kTable5Item", null);
                         //must edit     


}



///////////////////


function kTable6GetG() {
         //must edit (maybe this kTable1GetG can get all 6 table in one btn)
  var table6ConfirmedKitchen = JSON.parse(localStorage.getItem("kTable6Item")); 
          //must edit                                            //must edit
  console.log(table6ConfirmedKitchen);
              //must edit
  kitchenBackList.push.apply(kitchenBackList, table6ConfirmedKitchen);
                                               //must edit     
  console.log(kitchenBackList);

  var kitchenTable = document.getElementById("k-table-display");
    var table6KitchenLen = table6ConfirmedKitchen.length;
          //must edit         //must edit

        for (var i = 0; i < table6KitchenLen; i++){          
                              //must edit
              var xRow = kitchenTable.insertRow();
              var cell1 = xRow.insertCell(0);
              var cell2 = xRow.insertCell(1);
              var cell3 = xRow.insertCell(2);
              var cell4 = xRow.insertCell(3);
              var cell5 = xRow.insertCell(4);
              cell1.innerHTML = "-";
              cell2.innerHTML = "-";
              cell3.innerHTML = "-";
              cell4.innerHTML = "-";
              cell5.innerHTML = "-";

            var xRow = document.getElementById("k-table-display").rows[i+kitchenListLenNow].cells;
            xRow[0].innerHTML = kitchenQueue+"&nbsp; &nbsp;";
            xRow[1].innerHTML = table6ConfirmedKitchen[i].menuListCode+"&nbsp; &nbsp; &nbsp;";
                                  //must edit
            xRow[2].innerHTML = table6ConfirmedKitchen[i].menuListName;
                                  //must edit
            xRow[3].innerHTML = table6ConfirmedKitchen[i].menuListTableNum;
                                  //must edit      
            var time = new Date();
            xRow[4].innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();

            kitchenQueue ++;
              
        }  


kitchenListLenNow = kitchenListLenNow+table6KitchenLen;
                                      //must edit


// this need to remove because this is just test get data from table 2 !!!!!!!
if (kitchenListLenNow > 0){
            document.getElementById("btnDoneOne").disabled = false;
            document.getElementById("btnDoneAll").disabled = false;    
        }
// this need to remove because this is just test get data from table 2 !!!!!!!


console.log("table6KitchenLen");
              //must edit
console.log(table6KitchenLen);
              //must edit
console.log("kitchenListLenNow");
console.log(kitchenListLenNow);
localStorage.setItem("kTable6Item", null);
                         //must edit     


}



































// <<<<< *** Mark all 6 table ***  

//==========================================================
// auto click getting --> JSON.parse(localStorage.getItem("kTable1Item")
//every 5mins = 30000 (1sec = 1000)
// Now I just shut it down to save the computer 

// var varInterval;
//    function myInterval() {
//       varInterval = setInterval(kTable1GetG, 5000);
//    }
// myInterval();

// auto click getting --> JSON.parse(localStorage.getItem("kTable1Item")
//every 5mins = 30000 (1sec = 1000)
// Now I just shut it down to save the computer 
//==========================================================

//  *** Mark all 6 table ***  >>>>>


// realtime ----------------------
var kTable1GetGInterval;
var kTable2GetGInterval;
var kTable3GetGInterval;
var kTable4GetGInterval;
var kTable5GetGInterval;
var kTable6GetGInterval;

   //must edit
   function GetGInterval() {
      kTable1GetGInterval = setInterval(kTable1GetG, 5000);
      kTable2GetGInterval = setInterval(kTable2GetG, 5000);
      kTable3GetGInterval = setInterval(kTable3GetG, 5000);
      kTable4GetGInterval = setInterval(kTable4GetG, 5000);
      kTable5GetGInterval = setInterval(kTable5GetG, 5000);
      kTable6GetGInterval = setInterval(kTable6GetG, 5000);
   }
GetGInterval();
// realtime ----------------------












// var kTableHtmlRowLenNow = document.getElementById("k-table-display").rows.length;

//"Done Button" by one

function kitchenListToBackOne() {
  console.log("kitchenBackListLen");
  console.log(kitchenBackList);
  console.log("kitchenBackListLenNow "+kitchenBackListLenNow);

  var kitchenBackTable = document.getElementById("k-back-table-display");
    var kitchenBackListLen = kitchenBackList.length;



 if  (kitchenBackListLen > 0){    
            var xRow = kitchenBackTable.insertRow();
              var cell1 = xRow.insertCell(0);
              var cell2 = xRow.insertCell(1);
              var cell3 = xRow.insertCell(2);
              var cell4 = xRow.insertCell(3);
              var cell5 = xRow.insertCell(4);
              cell1.innerHTML = "-";
              cell2.innerHTML = "-";
              cell3.innerHTML = "-";
              cell4.innerHTML = "-";
              cell5.innerHTML = "-";
          
        } 
            
                          
        
                var xRow = document.getElementById("k-back-table-display").rows[kitchenBackListLenNow].cells;
                  // xRow[0].innerHTML = kitchenBackList[0].menuListName;                  
                  xRow[0].innerHTML = document.getElementById("k-table-display").rows[0].cells[0].innerHTML;
                  xRow[1].innerHTML = document.getElementById("k-table-display").rows[0].cells[1].innerHTML;
                  xRow[2].innerHTML = document.getElementById("k-table-display").rows[0].cells[2].innerHTML;
                  xRow[3].innerHTML = document.getElementById("k-table-display").rows[0].cells[3].innerHTML;
                  xRow[4].innerHTML = document.getElementById("k-table-display").rows[0].cells[4].innerHTML;
                  
        



kitchenBackListLenNow++;
console.log("kitchenBackList");
console.log(kitchenBackList);
console.log("kitchenBackListLenNow "+kitchenBackListLenNow);


          kitchenBackList.shift();              

console.log("kitchenBackList");
console.log(kitchenBackList);
console.log("kitchenBackListLen "+kitchenBackListLen);
console.log("kitchenBackListLenNow "+kitchenBackListLenNow);

// delete the first row of the main table
  var kTableHtmlRowLenNow = document.getElementById("k-table-display").rows.length;
        if (kTableHtmlRowLenNow > 1){
             document.getElementById("k-table-display").deleteRow(0);
             kitchenListLenNow--;             
                if (kitchenListLenNow < 1) {
                    document.getElementById("btnDoneOne").disabled = true;
                    document.getElementById("btnDoneAll").disabled = true;
                }       
        } 
// have to -1 for kitchenListLenNow because when the new order come
  

console.log("kitchenListLenNow");
console.log(kitchenListLenNow);

}

//"Done Button" by one
















//"Done Button" for the whole big Session

function kitchenListToBackSet() {
  var cfmKitchenListToBackSet = window.confirm("Have you done it all?\n全て提供済みで間違いないですか？\nโปรดยืนยันว่าทำครบทุกออเดอร์เรียบร้อยแล้ว");
      if (cfmKitchenListToBackSet) {
          console.log("kitchenBackListLen");
          console.log(kitchenBackList);
          console.log("kitchenBackListLenNow "+kitchenBackListLenNow);

          var kitchenBackTable = document.getElementById("k-back-table-display");
            var kitchenBackListLen = kitchenBackList.length;

                  for (var i = 0; i < kitchenBackListLen; i++){          
                  var xRow = kitchenBackTable.insertRow();
                      var cell1 = xRow.insertCell(0);
                      var cell2 = xRow.insertCell(1);
                      var cell3 = xRow.insertCell(2);
                      var cell4 = xRow.insertCell(3);
                      var cell5 = xRow.insertCell(4);
                      cell1.innerHTML = "-";
                      cell2.innerHTML = "-";
                      cell3.innerHTML = "-";
                      cell4.innerHTML = "-";
                      cell5.innerHTML = "-";
                      
                }  

                for (var i = 0; i < kitchenBackListLen; i++){
                        var xRow = document.getElementById("k-back-table-display").rows[i+kitchenBackListLenNow].cells;
                          
                        // xRow[0].innerHTML = kitchenBackList[i].menuListName;                  
                  xRow[0].innerHTML = document.getElementById("k-table-display").rows[0].cells[0].innerHTML;
                  xRow[1].innerHTML = document.getElementById("k-table-display").rows[0].cells[1].innerHTML;
                  xRow[2].innerHTML = document.getElementById("k-table-display").rows[0].cells[2].innerHTML;
                  xRow[3].innerHTML = document.getElementById("k-table-display").rows[0].cells[3].innerHTML;
                  xRow[4].innerHTML = document.getElementById("k-table-display").rows[0].cells[4].innerHTML;

                        // delete the first row of the main table (in this loop)
                          document.getElementById("k-table-display").deleteRow(0);
                        // have to -1  (in this loop) for kitchenListLenNow because when the new order come
                          kitchenListLenNow--;                                    
                   }           

        kitchenBackListLenNow = kitchenBackListLenNow+kitchenBackListLen;
        console.log("kitchenBackListLen");
        console.log(kitchenBackList);
        console.log("kitchenBackListLenNow "+kitchenBackListLenNow);

                  for (var i = kitchenBackListLen; i > 0; i--){          
                  kitchenBackList.pop();              
                }  
        console.log("kitchenBackList");
        console.log(kitchenBackList);
        console.log("kitchenBackListLen "+kitchenBackListLen);
        console.log("kitchenBackListLenNow "+kitchenBackListLenNow);

        document.getElementById("btnDoneOne").disabled = true;
        document.getElementById("btnDoneAll").disabled = true;

      }

}

//"Done Button" for the whole big Session









function logCheck() {
console.log("-----");
console.log("-----");

      console.log("kitchenListLenNow");
      console.log(kitchenListLenNow);

console.log("-----");

      console.log("kitchenBackListLen");
      console.log(kitchenBackList);
      // console.log("kitchenBackListLen "+kitchenBackListLen);
      console.log("kitchenBackListLenNow "+kitchenBackListLenNow);

console.log("-----");
console.log("-----");
}
























// export Table To csv <<<<<<<<<<< !!!!!! CSV << this one work perfect!!!
// https://www.codexworld.com/export-html-table-data-to-csv-using-javascript/

function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV file
    csvFile = new Blob([csv], {type: "text/csv"});

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // Create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Hide download link
    downloadLink.style.display = "none";

    // Add the link to DOM
    document.body.appendChild(downloadLink);

    // Click download link
    downloadLink.click();
}

function exportTableToCSV(filename) {
    var cfmExportTableToCSV = window.confirm("Please confirm?\nよろしいですか？\nโปรดยืนยัน");
      if (cfmExportTableToCSV) {    
          var csv = [];
          var rows = document.querySelectorAll("table tr");
          
          for (var i = 0; i < rows.length; i++) {
              var row = [], cols = rows[i].querySelectorAll("td, th");
              
              for (var j = 0; j < cols.length; j++) 
                  row.push(cols[j].innerText);
              
              csv.push(row.join(","));        
          }

          // Download CSV file
          downloadCSV(csv.join("\n"), filename);

    }      
}


// https://www.codexworld.com/export-html-table-data-to-csv-using-javascript/
// export Table To csv <<<<<<<<<<< !!!!!! CSV << this one work perfect!!!















// Clear Kitchen Backup list just refresh

function kitchenBackClear() {
  var kitchenBackClearPass;

  // Get the value of the input field with id="kitchenClearPin"
  kitchenBackClearPass = document.getElementById("kitchenClearPin").value;
  console.log(kitchenBackClearPass);
  // If x is Not a Number or less than one or greater than 10
        if (kitchenBackClearPass === "1234") {
                
                    var kitchenBackClearSure = window.confirm("Please confirm?\nよろしいですか？\nโปรดยืนยัน");
                      if (kitchenBackClearSure) {
                        exportTableToCSV('KitchenTaskToday');
                        alert("All information has been cleared");
                        location.reload();
                    }

        } else {
                alert("wrong password");
          
        }
  
}

// Clear Kitchen Backup list just refresh






// Protect closing window

window.onbeforeunload = confirmExit;
    function confirmExit() {
        return "Did you backup the data before reload the page?";
    }

function closedWin() {
    confirm("close ?");
    return false; /* which will not allow to close the window */
}
if(window.addEventListener) {
     window.addEventListener("close", closedWin, false);
}

window.onclose = closedWin;

// Protect closing window
