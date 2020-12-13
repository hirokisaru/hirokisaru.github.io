
// JustTry***
//must edit

// (this is not include kitchen and cashier)
// JustTry***    <- less edit T1 or Table1 (just the one relate to JSON)
// must edit     <- edit everything with  T1 or Table1 and etc


// <<<<< *** Mark all 6 table ***  
//  *** Mark all 6 table ***  >>>>>
// at this page (customer-table-1)
// and dont for get to edit in HTML file too !!!!!!!!!!!!!!
// e.g. >>>>>>>>>>> clickOrderTable1MenuList0
// e.g. >>>>>>>>>>> id="myTableT1"



// check how to change language !!!

// then duplication 

// up to github


// <<<<< *** Mark all 6 table ***  
// Make "customer-table-(1to6)-order-list.js"
// Try not touching  Table1 or T1 code
// but need to look at "kTable1Item" (next to JSON)
//  *** Mark all 6 table ***  >>>>>
















// language change

var textStaffIsComingVar = "Staff is coming, please wait.";
var textStaffIsComingBtnVar = "Staff is coming.";
var thxForOrder1Var = "Thank you for your order.";
var thxForOrder2Var = "Please make your payment at the cashier when you finish.";   
var notToDoubleWorkVar = "Please wait until the previous customer finish the payment.";   
var btnCallStaffVar = "CALL STAFF FOR HELP";


function langEn() {

    document.getElementById("startOverBtn").innerHTML = "START OVER";   
    document.getElementById("btn-confirmOrder").innerHTML = "CONFIRM ORDER";   
    document.getElementById("btn-cancelLastOrder").innerHTML = "Cancel the previous order"; 
    document.getElementById("btn-callStaff").innerHTML  = "CALL STAFF FOR HELP";   
    btnCallStaffVar = "CALL STAFF FOR HELP";   
    var xRow = document.getElementById("tableHead").rows[0].cells;
    xRow[0].innerHTML = "MENU";
    xRow[1].innerHTML = "SERVE";
    xRow[2].innerHTML = "PRICE";
    menuList[0].menuListHereOrHome= "Here";
    menuList[1].menuListHereOrHome= "Here";
    menuList[2].menuListHereOrHome= "Here";
    menuList[3].menuListHereOrHome= "Here";
    menuList[4].menuListHereOrHome= "Away";
    menuList[5].menuListHereOrHome= "Away";             
    textStaffIsComingVar = "Staff is coming, please wait.";
    textStaffIsComingBtnVar = "Staff is coming.";
    thxForOrder1Var = "Thank you for your order.";
    thxForOrder2Var = "Please make your payment at the cashier when you finish.";   
    notToDoubleWorkVar = "Please wait until the previous customer finish the payment.";   
            if (lockTable === true) {
                document.getElementById("thxForOrder1").innerHTML = "";
                document.getElementById("thxForOrder2").innerHTML = "";
                document.getElementById("notToDoubleWork").innerHTML = notToDoubleWorkVar;
            } 


    
}


function langJp() {

    document.getElementById("startOverBtn").innerHTML = " リセット";   
    document.getElementById("btn-confirmOrder").innerHTML = "注文決定";   
    document.getElementById("btn-cancelLastOrder").innerHTML = "取り消し"; 
    document.getElementById("btn-callStaff").innerHTML  = "店員呼び出し";   
    btnCallStaffVar = "店員呼び出し";   
    var xRow = document.getElementById("tableHead").rows[0].cells;
    xRow[0].innerHTML = "メニュー";
    xRow[1].innerHTML = "店内／持ち帰り";
    xRow[2].innerHTML = "値段";
    menuList[0].menuListHereOrHome= "店内";
    menuList[1].menuListHereOrHome= "店内";
    menuList[2].menuListHereOrHome= "店内";
    menuList[3].menuListHereOrHome= "店内";
    menuList[4].menuListHereOrHome= "持ち帰り";
    menuList[5].menuListHereOrHome= "持ち帰り";             
    textStaffIsComingVar = "店員が参ります、少々お待ちください。";
    textStaffIsComingBtnVar = "店員が参ります。";
    thxForOrder1Var = "ご注文いただきありがとうございます。";
    thxForOrder2Var = "お食事がお済みになりましたら、お支払いはレジでお願い致します。";   
    notToDoubleWorkVar = "前の方が会計中です、恐れ入りますが少々お待ちください。";   
            if (lockTable === true) {
                document.getElementById("thxForOrder1").innerHTML = "";
                document.getElementById("thxForOrder2").innerHTML = "";
                document.getElementById("notToDoubleWork").innerHTML = notToDoubleWorkVar;
            } 

    
}

function langTh() {

    document.getElementById("startOverBtn").innerHTML = "เริ่มใหม่";   
    document.getElementById("btn-confirmOrder").innerHTML = "ยืนยันเมนู";   
    document.getElementById("btn-cancelLastOrder").innerHTML = "ยกเลิกล่าสุด"; 
    document.getElementById("btn-callStaff").innerHTML = "เรียกพนักงาน";   
    btnCallStaffVar = "เรียกพนักงาน";  
    var xRow = document.getElementById("tableHead").rows[0].cells;
    xRow[0].innerHTML = "เมนู";
    xRow[1].innerHTML = "ในร้าน/รับกลับ";
    xRow[2].innerHTML = "ราคา";
    menuList[0].menuListHereOrHome= "ในร้าน";
    menuList[1].menuListHereOrHome= "ในร้าน";
    menuList[2].menuListHereOrHome= "ในร้าน";
    menuList[3].menuListHereOrHome= "ในร้าน";
    menuList[4].menuListHereOrHome= "รับกลับ";
    menuList[5].menuListHereOrHome= "รับกลับ";
    textStaffIsComingVar = "โปรดรอสักครู่พนักงานกำลังมาค่ะ";
    textStaffIsComingBtnVar = "พนักงานกำลังมาค่ะ";
    thxForOrder1Var = "ขอบคุณที่อุดหนุน";
    thxForOrder2Var = "เมื่อท่านรับประทานเรียบร้อยแล้ว สามารถชำระค่าบริการได้ที่แคชเชียร์ค่ะ";   
    notToDoubleWorkVar = "โปรดรอคุณลูกค้าท่านก่อนชำระเงินสักครู่ค่ะ";   
            if (lockTable === true) {
                document.getElementById("thxForOrder1").innerHTML = "";
                document.getElementById("thxForOrder2").innerHTML = "";
                document.getElementById("notToDoubleWork").innerHTML = notToDoubleWorkVar;
            } 

    
}

// language change































var lockTable = false;

lockTable = JSON.parse(localStorage.getItem("lockT4"));
                                            // JustTry*** 
                                            //must edit
                                        

var varCallStaff = false;
// false is not call staff , true is calling staff
varCallStaff = JSON.parse(localStorage.getItem("jsonCallStaffT4")); 
                                                    // JustTry***
                                                    //must edit



if (lockTable === true) {

                    // document.getElementById("btn-confirmOrder").disabled = true;

                document.getElementById("myTableT1").style.color = "#bbbbbb";
                                    //must edit
                document.getElementById("myTableT1").style.fontStyle = "italic";
                                    //must edit
                document.getElementById("btn-confirmOrder").disabled = true;
                document.getElementById("btn-cancelLastOrder").disabled = true;
                document.getElementById("img01").style.display='none';
                document.getElementById("img02").style.display='none';
                document.getElementById("img03").style.display='none';
                document.getElementById("img04").style.display='none';
                document.getElementById("img05").style.display='none';
                document.getElementById("img06").style.display='none';
                document.getElementById("notToDoubleWork").innerHTML = notToDoubleWorkVar;
                // document.getElementById("notToDoubleWork").disabled = false;
} 
// else {

//}               



 






var menuList = [
    {
        menuListCode: "H01",
        menuListName: "Pumpkin pie",
        menuListHereOrHome: "Here",
        menuListTax: "10%",
        menuListNetPrice: 360,
        menuListTableNum: "Table 4"
                        // JustTry***
                        //must edit
    },
    {
        menuListCode: "H02",
        menuListName: "Almond pie",
        menuListHereOrHome: "Here",
        menuListTax: "10%",
        menuListNetPrice: 360,
        menuListTableNum: "Table 4"
                        // JustTry***
                        //must edit
    },
    {
        menuListCode: "H03",
        menuListName: "Berry pie",
        menuListHereOrHome: "Here",
        menuListTax: "10%",
        menuListNetPrice: 390,
        menuListTableNum: "Table 4"
                        // JustTry***
                        //must edit
    },
    {
        menuListCode: "H04",
        menuListName: "Apple pie",
        menuListHereOrHome: "Here",
        menuListTax: "10%",
        menuListNetPrice: 420,
        menuListTableNum: "Table 4"
                        // JustTry***
                        //must edit
    },
    {
        menuListCode: "A11",
        menuListName: "Croissant",
        menuListHereOrHome: "Away",
        menuListTax: "8%",
        menuListNetPrice: 190,
        menuListTableNum: "Table 4"
                        // JustTry***
                        //must edit
    },
    {
        menuListCode: "A12",
        menuListName: "Petit pie",
        menuListHereOrHome: "Away",
        menuListTax: "8%",
        menuListNetPrice: 200,
        menuListTableNum: "Table 4"
                        // JustTry***
                        //must edit
    }
];

var orderTable1MenuList = [];
            //must edit


var orderTable1cal = 0; 
            //must edit
// For Payment

        if (orderTable1cal < 1) {
                //must edit
                document.getElementById("btn-cancelLastOrder").disabled = true;
                document.getElementById("btn-confirmOrder").disabled = true;
            } else {
                document.getElementById("btn-cancelLastOrder").disabled = false;
                document.getElementById("btn-confirmOrder").disabled = false;
            }
   


var lastPriceTable1ForMinus = [];
                //must edit


var table1CalValue = document.getElementById("table1CalDisplay").innerHTML;
    //must edit


if (orderTable1cal < 1) {
            //must edit
                document.getElementById("btn-cancelLastOrder").disabled = true;
            } else {
                document.getElementById("btn-cancelLastOrder").disabled = false;
            }

// THE CONCEPT IS JUST SYNC ALL TABEL CELL TO ARRAY ALL THE TIME
// WHEN THE MENU (ARRAY) HAS CHANGED SO THE TABLE FOLLOW

// ↑ NO!!!!!  right now I can push one by one 
// but html table (chart) need to creat the blank cell of tabel (chart)






// Startover just refresh

function thisTableStartOver() {
                
        var tableStartOver = window.confirm("Please confirm?\nよろしいですか？\nโปรดยืนยัน");
          if (tableStartOver) {                        
            location.reload();
        }

  
}

// Startover just refresh






































//Pumpkin pie
function clickOrderTable1MenuList0() {
                    //must edit
    orderTable1MenuList.push(menuList[0]);
            //must edit
    lastPriceTable1ForMinus.push(menuList[0].menuListNetPrice);             
            //must edit
    var orderTable1MenuListLen = orderTable1MenuList.length;
            //must edit             //must edit
    console.log(orderTable1MenuList);
                    //must edit
    orderTable1cal = orderTable1cal+menuList[0].menuListNetPrice;
        //must edit         //must edit
    console.log(orderTable1cal);
                    //must edit
    document.getElementById("table1CalDisplay").innerHTML = "¥"+orderTable1cal;
                            //must edit                             //must edit
        if  (orderTable1MenuListLen < 11){    
                    //must edit
            for (var i = 0; i < orderTable1MenuListLen; i++){
                                    //must edit
                    var xRow = document.getElementById("myTableT1").rows[orderTable1MenuListLen-1].cells;
                                                        //must edit             //must edit
                    xRow[0].innerHTML = orderTable1MenuList[orderTable1MenuListLen-1].menuListName;
                                                //must edit         //must edit
                    xRow[1].innerHTML = orderTable1MenuList[orderTable1MenuListLen-1].menuListHereOrHome;
                                                //must edit         //must edit
                    xRow[2].innerHTML = "¥"+orderTable1MenuList[orderTable1MenuListLen-1].menuListNetPrice;
                                                //must edit         //must edit
                    
            } 
        } 
        else { 
        alert("Maximum is 10");
        orderTable1MenuList.pop(10);
                //must edit
        lastPriceTable1ForMinus.pop(10);
                //must edit
        console.log(orderTable1MenuList);
                        //must edit
        orderTable1cal = orderTable1cal-menuList[0].menuListNetPrice;
            //must edit         //must edit
        console.log(orderTable1cal);
                        //must edit
        document.getElementById("table1CalDisplay").innerHTML = "¥"+orderTable1cal;
                                    //must edit                         //must edit
        }
    console.log(lastPriceTable1ForMinus);
                            //must edit
    if (orderTable1cal < 1) {
            //must edit
                document.getElementById("btn-cancelLastOrder").disabled = true;
                document.getElementById("btn-confirmOrder").disabled = true;
            } else {
                document.getElementById("btn-cancelLastOrder").disabled = false;
                document.getElementById("btn-confirmOrder").disabled = false;
            }        

}



//Almond pie    
function clickOrderTable1MenuList1() {
                    //must edit
    orderTable1MenuList.push(menuList[1]);
            //must edit
    lastPriceTable1ForMinus.push(menuList[1].menuListNetPrice);
            //must edit
    var orderTable1MenuListLen = orderTable1MenuList.length;
            //must edit                 //must edit
    console.log(orderTable1MenuList);
                        //must edit
    orderTable1cal = orderTable1cal+menuList[1].menuListNetPrice;
        //must edit         //must edit
    console.log(orderTable1cal);
                    //must edit
    document.getElementById("table1CalDisplay").innerHTML = "¥"+orderTable1cal;
                                //must edit                         //must edit
        if  (orderTable1MenuListLen < 11){    
                    //must edit
            for (var i = 0; i < orderTable1MenuListLen; i++){
                                        //must edit
                    var xRow = document.getElementById("myTableT1").rows[orderTable1MenuListLen-1].cells;
                                                            //must edit         //must edit
                    xRow[0].innerHTML = orderTable1MenuList[orderTable1MenuListLen-1].menuListName;
                                            //must edit         //must edit
                    xRow[1].innerHTML = orderTable1MenuList[orderTable1MenuListLen-1].menuListHereOrHome;
                                            //must edit         //must edit
                    xRow[2].innerHTML = "¥"+orderTable1MenuList[orderTable1MenuListLen-1].menuListNetPrice;
                                            //must edit         //must edit
            } 
        } 
        else { 
        alert("Maximum is 10");
        orderTable1MenuList.pop(10);
                //must edit
        lastPriceTable1ForMinus.pop(10);
                //must edit
        console.log(orderTable1MenuList);
                        //must edit
        orderTable1cal = orderTable1cal-menuList[1].menuListNetPrice;
            //must edit         //must edit
        console.log(orderTable1cal);
                    //must edit
        document.getElementById("table1CalDisplay").innerHTML = "¥"+orderTable1cal;
                                    //must edit                         //must edit
        }
        console.log(lastPriceTable1ForMinus);
                                //must edit
        if (orderTable1cal < 1) {
                //must edit
                document.getElementById("btn-cancelLastOrder").disabled = true;
                document.getElementById("btn-confirmOrder").disabled = true;
            } else {
                document.getElementById("btn-cancelLastOrder").disabled = false;
                document.getElementById("btn-confirmOrder").disabled = false;
            }
}


//Berry pie
function clickOrderTable1MenuList2() {
                    //must edit
    orderTable1MenuList.push(menuList[2]);
        //must edit
    lastPriceTable1ForMinus.push(menuList[2].menuListNetPrice);
            //must edit
    var orderTable1MenuListLen = orderTable1MenuList.length;
            //must edit                   //must edit
    console.log(orderTable1MenuList);
                        //must edit
    orderTable1cal = orderTable1cal+menuList[2].menuListNetPrice;
        //must edit         //must edit
    console.log(orderTable1cal);
                    //must edit
    document.getElementById("table1CalDisplay").innerHTML = "¥"+orderTable1cal;
                                //must edit                         //must edit
        if  (orderTable1MenuListLen < 11){    
                    //must edit
            for (var i = 0; i < orderTable1MenuListLen; i++){
                                    //must edit
                    var xRow = document.getElementById("myTableT1").rows[orderTable1MenuListLen-1].cells;
                                                        //must edit             //must edit
                    xRow[0].innerHTML = orderTable1MenuList[orderTable1MenuListLen-1].menuListName;
                                                //must edit         //must edit
                    xRow[1].innerHTML = orderTable1MenuList[orderTable1MenuListLen-1].menuListHereOrHome;
                                                //must edit         //must edit
                    xRow[2].innerHTML = "¥"+orderTable1MenuList[orderTable1MenuListLen-1].menuListNetPrice;
                                                //must edit             //must edit
                    
            } 
        } 
        else { 
        alert("Maximum is 10");
        orderTable1MenuList.pop(10);
                //must edit
        lastPriceTable1ForMinus.pop(10);
                    //must edit
        console.log(orderTable1MenuList);
                        //must edit
        orderTable1cal = orderTable1cal-menuList[2].menuListNetPrice;
            //must edit         //must edit
        console.log(orderTable1cal);
                        //must edit
        document.getElementById("table1CalDisplay").innerHTML = "¥"+orderTable1cal;
                                //must edit                             //must edit
        }
        console.log(lastPriceTable1ForMinus);
                                //must edit
        if (orderTable1cal < 1) {
                //must edit
                document.getElementById("btn-cancelLastOrder").disabled = true;
                document.getElementById("btn-confirmOrder").disabled = true;
            } else {
                document.getElementById("btn-cancelLastOrder").disabled = false;
                document.getElementById("btn-confirmOrder").disabled = false;
            }
}



//Apple pie 
function clickOrderTable1MenuList3() {
                //must edit
    orderTable1MenuList.push(menuList[3]);
        //must edit
    lastPriceTable1ForMinus.push(menuList[3].menuListNetPrice);
            //must edit
    var orderTable1MenuListLen = orderTable1MenuList.length;
            //must edit                 //must edit
    console.log(orderTable1MenuList);
                       //must edit 
    orderTable1cal = orderTable1cal+menuList[3].menuListNetPrice;
        //must edit         //must edit
    console.log(orderTable1cal);
                    //must edit
    document.getElementById("table1CalDisplay").innerHTML = "¥"+orderTable1cal;
                            //must edit                          //must edit
        if  (orderTable1MenuListLen < 11){    
                    //must edit
            for (var i = 0; i < orderTable1MenuListLen; i++){
                                    //must edit
                    var xRow = document.getElementById("myTableT1").rows[orderTable1MenuListLen-1].cells;
                                                        //must edit         //must edit
                    xRow[0].innerHTML = orderTable1MenuList[orderTable1MenuListLen-1].menuListName;
                                                //must edit         //must edit
                    xRow[1].innerHTML = orderTable1MenuList[orderTable1MenuListLen-1].menuListHereOrHome;
                                                //must edit         //must edit    
                    xRow[2].innerHTML = "¥"+orderTable1MenuList[orderTable1MenuListLen-1].menuListNetPrice;              
                                                //must edit            //must edit        
            } 
        } 
        else { 
        alert("Maximum is 10");
        orderTable1MenuList.pop(10);
                //must edit
        lastPriceTable1ForMinus.pop(10);
                    //must edit
        console.log(orderTable1MenuList);
                        //must edit
        orderTable1cal = orderTable1cal-menuList[3].menuListNetPrice;
                //must edit     //must edit
        console.log(orderTable1cal);
                    //must edit
        document.getElementById("table1CalDisplay").innerHTML = "¥"+orderTable1cal;
                                    //must edit                             //must edit
        }
        console.log(lastPriceTable1ForMinus);
                            //must edit
        if (orderTable1cal < 1) {
                //must edit
                document.getElementById("btn-cancelLastOrder").disabled = true;
                document.getElementById("btn-confirmOrder").disabled = true;
            } else {
                document.getElementById("btn-cancelLastOrder").disabled = false;
                document.getElementById("btn-confirmOrder").disabled = false;
            }
}


//Croissant 
function clickOrderTable1MenuList4() {
                //must edit
    orderTable1MenuList.push(menuList[4]);
            //must edit
    lastPriceTable1ForMinus.push(menuList[4].menuListNetPrice);
            //must edit
    var orderTable1MenuListLen = orderTable1MenuList.length;
                //must edit             //must edit
    console.log(orderTable1MenuList);
                    //must edit
    orderTable1cal = orderTable1cal+menuList[4].menuListNetPrice;
        //must edit         //must edit
    console.log(orderTable1cal);
                        //must edit
    document.getElementById("table1CalDisplay").innerHTML = "¥"+orderTable1cal;
                            //must edit                                 //must edit
        if  (orderTable1MenuListLen < 11){    
                    //must edit
            for (var i = 0; i < orderTable1MenuListLen; i++){
                                        //must edit
                    var xRow = document.getElementById("myTableT1").rows[orderTable1MenuListLen-1].cells;
                                                        //must edit               //must edit
                    xRow[0].innerHTML = orderTable1MenuList[orderTable1MenuListLen-1].menuListName;
                                                //must edit         //must edit
                    xRow[1].innerHTML = orderTable1MenuList[orderTable1MenuListLen-1].menuListHereOrHome;
                                            //must edit             //must edit
                    xRow[2].innerHTML = "¥"+orderTable1MenuList[orderTable1MenuListLen-1].menuListNetPrice;              
                                                //must edit            //must edit 
                    
            } 
        } 
        else { 
        alert("Maximum is 10");
        orderTable1MenuList.pop(10);
            //must edit
        lastPriceTable1ForMinus.pop(10);
                    //must edit
        console.log(orderTable1MenuList);
                        //must edit
        orderTable1cal = orderTable1cal-menuList[4].menuListNetPrice;
                //must edit     //must edit
        console.log(orderTable1cal);
                        //must edit
        document.getElementById("table1CalDisplay").innerHTML = "¥"+orderTable1cal;
                                    //must edit                             //must edit
        }
        console.log(lastPriceTable1ForMinus);
                            //must edit
        if (orderTable1cal < 1) {
                    //must edit
                document.getElementById("btn-cancelLastOrder").disabled = true;
                document.getElementById("btn-confirmOrder").disabled = true;
            } else {
                document.getElementById("btn-cancelLastOrder").disabled = false;
                document.getElementById("btn-confirmOrder").disabled = false;
            }
}



//Petit pie 
function clickOrderTable1MenuList5() {
                       //must edit     
    orderTable1MenuList.push(menuList[5]);
            //must edit
    lastPriceTable1ForMinus.push(menuList[5].menuListNetPrice);
                //must edit
    var orderTable1MenuListLen = orderTable1MenuList.length;
                //must edit             //must edit
    console.log(orderTable1MenuList);
                        //must edit
    orderTable1cal = orderTable1cal+menuList[5].menuListNetPrice;
            //must edit     //must edit
    console.log(orderTable1cal);
                    //must edit
    document.getElementById("table1CalDisplay").innerHTML = "¥"+orderTable1cal;
                            //must edit                          //must edit
        if  (orderTable1MenuListLen < 11){    
                    //must edit
            for (var i = 0; i < orderTable1MenuListLen; i++){
                                        //must edit
                    var xRow = document.getElementById("myTableT1").rows[orderTable1MenuListLen-1].cells;
                                                        //must edit               //must edit
                    xRow[0].innerHTML = orderTable1MenuList[orderTable1MenuListLen-1].menuListName;
                                            //must edit             //must edit
                    xRow[1].innerHTML = orderTable1MenuList[orderTable1MenuListLen-1].menuListHereOrHome;
                                            //must edit             //must edit
                    xRow[2].innerHTML = "¥"+orderTable1MenuList[orderTable1MenuListLen-1].menuListNetPrice;              
                                                //must edit         //must edit                                                
                    
            } 
        } 
        else { 
        alert("Maximum is 10");
        orderTable1MenuList.pop(10);
                //must edit
        lastPriceTable1ForMinus.pop(10);
                //must edit
        console.log(orderTable1MenuList);
                            //must edit
        orderTable1cal = orderTable1cal-menuList[5].menuListNetPrice;
                //must edit     //must edit
        console.log(orderTable1cal);
                        //must edit
        document.getElementById("table1CalDisplay").innerHTML = "¥"+orderTable1cal;
                                //must edit                         //must edit
        }
        console.log(lastPriceTable1ForMinus);
                        //must edit
        if (orderTable1cal < 1) {
                //must edit
                document.getElementById("btn-cancelLastOrder").disabled = true;
                document.getElementById("btn-confirmOrder").disabled = true;
            } else {
                document.getElementById("btn-cancelLastOrder").disabled = false;
                document.getElementById("btn-confirmOrder").disabled = false;
            }
}


// function clickOrderTable1MenuList0() {
//     orderTable1MenuList.push(menuList[0]);
//     var orderTable1MenuListLen = orderTable1MenuList.length;
//     for (var i = 0; i < orderTable1MenuListLen; i++){   
//     var xRow = document.getElementById("myTableT1").rows[orderTable1MenuListLen-1].cells;
//     xRow[0].innerHTML = orderTable1MenuList[orderTable1MenuListLen-1].menuListName;
//     xRow[1].innerHTML = orderTable1MenuList[orderTable1MenuListLen-1].menuListHereOrHome;              
//     }    
//   }

// function clickOrderTable1MenuList1() {
//     orderTable1MenuList.push(menuList[1]);
//     var orderTable1MenuListLen = orderTable1MenuList.length;
//     for (var i = 0; i < orderTable1MenuListLen; i++){   
//     var xRow = document.getElementById("myTableT1").rows[orderTable1MenuListLen-1].cells;
//     xRow[0].innerHTML = orderTable1MenuList[orderTable1MenuListLen-1].menuListName;
//     xRow[1].innerHTML = orderTable1MenuList[orderTable1MenuListLen-1].menuListHereOrHome;              
//     }    
//   }


  // function clickOrderTable1MenuList2() {
  //   orderTable1MenuList.push(menuList[2]);
  //   var orderTable1MenuListLen = orderTable1MenuList.length;
  //   for (var i = 0; i < orderTable1MenuListLen; i++){   
  //   var xRow = document.getElementById("myTableT1").rows[orderTable1MenuListLen-1].cells;
  //   xRow[0].innerHTML = orderTable1MenuList[orderTable1MenuListLen-1].menuListName;
  //   xRow[1].innerHTML = orderTable1MenuList[orderTable1MenuListLen-1].menuListHereOrHome;              
  //   }    
  // }

// check log
function consoleLog() {
console.log(orderTable1MenuList);
                //must edit
console.log(orderTable1cal);
                //must edit
}    

//Cancel the previous order
function cancelLastOrder (){
        orderTable1MenuList.pop();
                //must edit
        console.log(orderTable1MenuList);
                        //must edit
        var orderTable1MenuListLen = orderTable1MenuList.length;
                    //must edit             //must edit
        var xRow = document.getElementById("myTableT1").rows[orderTable1MenuListLen].cells;
                                            //must edit               //must edit
            xRow[0].innerHTML = "_";
            xRow[1].innerHTML = "_";
            xRow[2].innerHTML = "_";
        orderTable1cal = orderTable1cal-lastPriceTable1ForMinus[orderTable1MenuList.length];
             //must edit        //must edit         //must edit           //must edit
        lastPriceTable1ForMinus.pop();
                //must edit
        console.log(orderTable1cal);
                        //must edit
        console.log(lastPriceTable1ForMinus);
                            //must edit
        document.getElementById("table1CalDisplay").innerHTML = "¥"+orderTable1cal;
                                    //must edit                         //must edit
                if (orderTable1cal < 1) {
                            //must edit
                document.getElementById("btn-cancelLastOrder").disabled = true;
                document.getElementById("btn-confirmOrder").disabled = true;
            } else {
                document.getElementById("btn-cancelLastOrder").disabled = false;
                document.getElementById("btn-confirmOrder").disabled = false;
            }
}


// HOW TO SEND TO ANOTHER PAGE  
// https://www.w3schools.com/jsref/met_storage_setitem.asp


//store --> orderTable1MenuList --> for sending to another page
function confirmkTable1SetS(){
                    //must edit
    var cfmkTable1SetS = window.confirm("Please confirm?\nよろしいですか？\nโปรดยืนยัน");
                //must edit
        if (cfmkTable1SetS) {
                    //must edit

                
                localStorage.setItem("kTable4Item", JSON.stringify(orderTable1MenuList));
                                        // JustTry***
                                        //must edit                     //must edit
                localStorage.setItem("kTable4Pay", JSON.stringify(orderTable1MenuList));
                                        // JustTry***
                                        //must edit                     //must edit
                lockTable = true;
                console.log("lockTable");
                console.log(lockTable);
                localStorage.setItem("lockT4", JSON.stringify(lockTable));
                                        // JustTry***
                                        //must edit
                console.log("orderTable1MenuList");
                                        //must edit
                console.log(orderTable1MenuList);
                                        //must edit

// <<<<< *** Mark all 6 table ***  

//  "kTable1Item"  (need to change the number "1")

//  *** Mark all 6 table ***  >>>>>

                document.getElementById("myTableT1").style.color = "#bbbbbb";
                                            //must edit
                document.getElementById("myTableT1").style.fontStyle = "italic";
                                            //must edit    
                document.getElementById("btn-confirmOrder").disabled = true;
                document.getElementById("btn-cancelLastOrder").disabled = true;
                document.getElementById("img01").style.display='none';
                document.getElementById("img02").style.display='none';
                document.getElementById("img03").style.display='none';
                document.getElementById("img04").style.display='none';
                document.getElementById("img05").style.display='none';
                document.getElementById("img06").style.display='none';
                document.getElementById("thxForOrder1").innerHTML = thxForOrder1Var;
                document.getElementById("thxForOrder2").innerHTML = thxForOrder2Var;
        }
}


//get back in another page
// -> -> -> k-table.js
// -> -> -> search for
// -> -> -> kTable1GetG() 






























function funcCallStaff(){
    
    document.getElementById("textStaffIsComing").innerHTML = textStaffIsComingVar;
    document.getElementById("btn-callStaff").innerHTML = textStaffIsComingBtnVar;
    varCallStaff = true;
    localStorage.setItem("jsonCallStaffT4", JSON.stringify(varCallStaff));
                                // JustTry***
                                //must edit
    setTimeout(function(){ document.getElementById("textStaffIsComing").innerHTML = ""; }, 3000);
    setTimeout(function(){ document.getElementById("btn-callStaff").innerHTML = btnCallStaffVar; }, 3000);
    console.log(varCallStaff);    

}








// orderTable1MenuListLen is the length of current order item
// orderTable1MenuListLen-1 reason = I did push so it become +1 so I have to -1 to make to current


// exportTableToExcel but not complete yet
// https://www.codexworld.com/export-html-table-data-to-excel-using-javascript/
function exportTableToExcel(tableID, filename = ''){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file name
    filename = filename?filename+'.xls':'excel_data.xls';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
}
// https://www.codexworld.com/export-html-table-data-to-excel-using-javascript/
// exportTableToExcel but not complete yet



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


// https://www.codexworld.com/export-html-table-data-to-csv-using-javascript/
// export Table To csv <<<<<<<<<<< !!!!!! CSV << this one work perfect!!!




  // function OrderTable1SyncMenuFunction() {
  //   var xRow1 = document.getElementById("myTableT1").rows[0].cells;
  //   xRow1[0].innerHTML = orderTable1MenuList[0].menuListName;
  //   xRow1[1].innerHTML = orderTable1MenuList[0].menuListHereOrHome;
  //   var xRow2 = document.getElementById("myTableT1").rows[1].cells;
  //   xRow2[0].innerHTML = orderTable1MenuList[1].menuListName;
  //   xRow2[1].innerHTML = orderTable1MenuList[1].menuListHereOrHome;
  //   var xRow3 = document.getElementById("myTableT1").rows[2].cells;
  //   xRow2[0].innerHTML = orderTable1MenuList[2].menuListName;
  //   xRow2[1].innerHTML = orderTable1MenuList[2].menuListHereOrHome;
  //   var xRow4 = document.getElementById("myTableT1").rows[3].cells;
  //   xRow2[0].innerHTML = orderTable1MenuList[2].menuListName;
  //   xRow2[1].innerHTML = orderTable1MenuList[2].menuListHereOrHome;
  //   var xRow5 = document.getElementById("myTableT1").rows[4].cells;
  //   xRow2[0].innerHTML = orderTable1MenuList[2].menuListName;
  //   xRow2[1].innerHTML = orderTable1MenuList[2].menuListHereOrHome;
  // }