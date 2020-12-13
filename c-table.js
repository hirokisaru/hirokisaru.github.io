// and dont for get to edit in HTML file too !!!!!!!!!!!!!!
// e.g.  >>>>>>> cTable1GetG



// <<<<< *** Mark all 6 table ***  
//  *** Mark all 6 table ***  >>>>>
//must edit




var cashierListLenNow = 0;
// cashierListLenNow ---> count reason --> add row to the main table

var cashierBackListLenNow = 0;
// cashierBackListLenNow ---> count reason --> add row to the backup table

var cashierBackList = [];
// cashierBackList.push.apply(cashierBackList, table1ConfirmedCashier);


var totalAmount = 0; 
// For Payment
// moved var start point into  "cTable1GetG" each table
// have to make it >>> totalAmount = 0; everytime on payment 

var nowPayTable = 0;
// to indicate which table (1-6) in payment process right now
// 0 mean no indicate any table 
// incase of Table1 so -> nowPayTable is 1, 2is2 3is3 4is4 5is5 6is6

var cashReceive = 0;
var cashChange = 0;
// display cash change


var countOtherPay = 0;
var countCreditPay = 0;
var countCashPay = 0;

var sumOtherPay = 0;
var sumCreditPay = 0;
var sumCashPay = 0;

//var payOtherComment;  <<< this is inside function scope
var listOtherPay = [];
var listCreditPay = [];
var listCashPay = [];



var timeListOtherPay = [];
var timeListCreditPay = [];
var timeListCashPay = [];




//                 MEMO   ***********************
//  *********** var countOther, countCredit, countCash ( outside of this function )
//  *********** var sumOther, sumCredit, sumCash  ( outside of this function )


//  *********** display report time stamp! ( in this function before loop of database )  
//  *********** display countOther, countCredit, countCash ( in this function before loop of database )
//  *********** display sumOther, sumCredit, sumCash   ( in this function before loop of database )
//                 MEMO   ***********************



document.getElementById("btn-PayCredit").disabled = true;

document.getElementById("creditReceiveSpace-btn").disabled = true;
document.getElementById("btn-PayOther").disabled = true;

document.getElementById("cashReceiveSpace-btn").disabled = true;
document.getElementById("btn-PayCash").disabled = true;





// !!!!! important to control all 6 customer page !!!!!
// test unlock table 1 
// for the real one this function should be in switch (for table 1 condition)

// <<<<< *** Mark all 6 table ***  
function unlockT1(){
          //must edit
    var lockTable1 = false;
          //must edit
      console.log("lockTable1");
                   //must edit
      console.log(lockTable1);
                  //must edit
     localStorage.setItem("lockT1", JSON.stringify(lockTable1));
                           //must edit                //must edit
}
//  *** Mark all 6 table ***  >>>>>

function unlockT2(){
          //must edit
    var lockTable2 = false;
          //must edit
      console.log("lockTable2");
                   //must edit
      console.log(lockTable2);
                  //must edit
     localStorage.setItem("lockT2", JSON.stringify(lockTable2));
                           //must edit                //must edit
}

/////////////////////
function unlockT3(){
          //must edit
    var lockTable3 = false;
          //must edit
      console.log("lockTable3");
                   //must edit
      console.log(lockTable3);
                  //must edit
     localStorage.setItem("lockT3", JSON.stringify(lockTable3));
                           //must edit                //must edit
}

/////////////////////
function unlockT4(){
          //must edit
    var lockTable4 = false;
          //must edit
      console.log("lockTable4");
                   //must edit
      console.log(lockTable4);
                  //must edit
     localStorage.setItem("lockT4", JSON.stringify(lockTable4));
                           //must edit                //must edit
}

/////////////////////
function unlockT5(){
          //must edit
    var lockTable5 = false;
          //must edit
      console.log("lockTable5");
                   //must edit
      console.log(lockTable5);
                  //must edit
     localStorage.setItem("lockT5", JSON.stringify(lockTable5));
                           //must edit                //must edit
}

/////////////////////
function unlockT6(){
          //must edit
    var lockTable6 = false;
          //must edit
      console.log("lockTable6");
                   //must edit
      console.log(lockTable6);
                  //must edit
     localStorage.setItem("lockT6", JSON.stringify(lockTable6));
                           //must edit                //must edit
}

/////////////////////





// this is no using 
// function unlockPayBtn(){
//     lockPayBtn = false;
//       console.log("lockPayBtn");
//       console.log(lockPayBtn);      
// }









function payReceiveCash() {

        // <<<<< *** Mark all 6 table ***  
        // <<<<< Maybe this part is not using 
        if (nowPayTable === 1){
          // document.getElementById("btn-PayCash").disabled = false;
        }
        // Maybe this part is not using >>>>>
        //  *** Mark all 6 table ***  >>>>>


        if(document.getElementById("cashReceiveSpace").value.length === 0)
        {
            alert("Please input the received amount　金額をご入力下さい")
            document.getElementById("btn-PayCash").disabled = true;
        } else if (document.getElementById("cashReceiveSpace").value < totalAmount) {
            alert("The payment is not enough　恐れ入ります、入金不足です")
            document.getElementById("btn-PayCash").disabled = true;
        } else {
              cashReceive = document.getElementById("cashReceiveSpace").value;      
              cashChange = cashReceive - totalAmount;

                console.log("totalAmount");
                console.log(totalAmount);      
                console.log("cashReceive");
                console.log(cashReceive);      
                console.log("cashChange");
                console.log(cashChange);  

              document.getElementById("return-output").innerHTML = "Change お釣り ¥"+cashChange;    

              document.getElementById("btn-PayCredit").disabled = true;
              document.getElementById("btn-PayCash").disabled = false;

        }
}

function payCash() {
// <<<<< *** Mark all 6 table ***          
    if (nowPayTable === 1){
                    //must edit
         unlockT1();
         // must edit
         // unlockT2();
         // unlockT3();
         // unlockT4();
         // unlockT5();
         // unlockT6();



         listCashPay.push(totalAmount);

         var time = new Date();
         
         console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
         timeListCashPay.push(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
            
            console.log("listCashPay");
            console.log(listCashPay);      
      
            console.log("timeListCashPay");
            console.log(timeListCashPay);      
            
          
         countCashPay = countCashPay+1;

         sumCashPay = sumCashPay+totalAmount;

         localStorage.setItem("kTable1Pay", null);
                          // must edit here
         // dont duplicate here
         // nowPayTable <<< look at this

                 console.log("countCashPay");
                console.log(countCashPay);      
                console.log("sumCashPay");
                console.log(sumCashPay);      
                console.log("totalAmount");
                console.log(totalAmount);      

        totalAmount = 0;

                console.log("totalAmount after clear");
                console.log(totalAmount);      


          for (var i = 0; i < cashierListLenNow;){          
                  
                  // delete the first row of the main table
                  document.getElementById("c-table-display").deleteRow(0);
                  // have to -1 for cashierListLenNow because when the new order come
                  cashierListLenNow--;
         
                }  

    }  
       //  *** Mark all 6 table ***   (add else)  >>>>> 

       else if (nowPayTable === 2){
                    //must edit
         unlockT2();
         // must edit
         
         listCashPay.push(totalAmount);

         var time = new Date();
         
         console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
         timeListCashPay.push(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
            
            console.log("listCashPay");
            console.log(listCashPay);      
      
            console.log("timeListCashPay");
            console.log(timeListCashPay);      
            
          
         countCashPay = countCashPay+1;

         sumCashPay = sumCashPay+totalAmount;

         localStorage.setItem("kTable2Pay", null);
                          // must edit here
         // dont duplicate here
         // nowPayTable <<< look at this

                 console.log("countCashPay");
                console.log(countCashPay);      
                console.log("sumCashPay");
                console.log(sumCashPay);      
                console.log("totalAmount");
                console.log(totalAmount);      

        totalAmount = 0;

                console.log("totalAmount after clear");
                console.log(totalAmount);      


          for (var i = 0; i < cashierListLenNow;){          
                  
                  // delete the first row of the main table
                  document.getElementById("c-table-display").deleteRow(0);
                  // have to -1 for cashierListLenNow because when the new order come
                  cashierListLenNow--;
         
                }  

    }
      // add else 
         else if (nowPayTable === 3){
                    //must edit
         unlockT3();
         // must edit
         
         listCashPay.push(totalAmount);

         var time = new Date();
         
         console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
         timeListCashPay.push(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
            
            console.log("listCashPay");
            console.log(listCashPay);      
      
            console.log("timeListCashPay");
            console.log(timeListCashPay);      
            
          
         countCashPay = countCashPay+1;

         sumCashPay = sumCashPay+totalAmount;

         localStorage.setItem("kTable3Pay", null);
                          // must edit here
         // dont duplicate here
         // nowPayTable <<< look at this

                 console.log("countCashPay");
                console.log(countCashPay);      
                console.log("sumCashPay");
                console.log(sumCashPay);      
                console.log("totalAmount");
                console.log(totalAmount);      

        totalAmount = 0;

                console.log("totalAmount after clear");
                console.log(totalAmount);      


          for (var i = 0; i < cashierListLenNow;){          
                  
                  // delete the first row of the main table
                  document.getElementById("c-table-display").deleteRow(0);
                  // have to -1 for cashierListLenNow because when the new order come
                  cashierListLenNow--;
         
                }  

    }
        // add else 

           else if (nowPayTable === 4){
                    //must edit
         unlockT4();
         // must edit
         
         listCashPay.push(totalAmount);

         var time = new Date();
         
         console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
         timeListCashPay.push(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
            
            console.log("listCashPay");
            console.log(listCashPay);      
      
            console.log("timeListCashPay");
            console.log(timeListCashPay);      
            
          
         countCashPay = countCashPay+1;

         sumCashPay = sumCashPay+totalAmount;

         localStorage.setItem("kTable4Pay", null);
                          // must edit here
         // dont duplicate here
         // nowPayTable <<< look at this

                 console.log("countCashPay");
                console.log(countCashPay);      
                console.log("sumCashPay");
                console.log(sumCashPay);      
                console.log("totalAmount");
                console.log(totalAmount);      

        totalAmount = 0;

                console.log("totalAmount after clear");
                console.log(totalAmount);      


          for (var i = 0; i < cashierListLenNow;){          
                  
                  // delete the first row of the main table
                  document.getElementById("c-table-display").deleteRow(0);
                  // have to -1 for cashierListLenNow because when the new order come
                  cashierListLenNow--;
         
                }  

    }
        // add else
         else if (nowPayTable === 5){
                    //must edit
         unlockT5();
         // must edit
         
         listCashPay.push(totalAmount);

         var time = new Date();
         
         console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
         timeListCashPay.push(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
            
            console.log("listCashPay");
            console.log(listCashPay);      
      
            console.log("timeListCashPay");
            console.log(timeListCashPay);      
            
          
         countCashPay = countCashPay+1;

         sumCashPay = sumCashPay+totalAmount;

         localStorage.setItem("kTable5Pay", null);
                          // must edit here
         // dont duplicate here
         // nowPayTable <<< look at this

                 console.log("countCashPay");
                console.log(countCashPay);      
                console.log("sumCashPay");
                console.log(sumCashPay);      
                console.log("totalAmount");
                console.log(totalAmount);      

        totalAmount = 0;

                console.log("totalAmount after clear");
                console.log(totalAmount);      


          for (var i = 0; i < cashierListLenNow;){          
                  
                  // delete the first row of the main table
                  document.getElementById("c-table-display").deleteRow(0);
                  // have to -1 for cashierListLenNow because when the new order come
                  cashierListLenNow--;
         
                }  

    }
        // add else  
         else if (nowPayTable === 6){
                    //must edit
         unlockT6();
         // must edit
         
         listCashPay.push(totalAmount);

         var time = new Date();
         
         console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
         timeListCashPay.push(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
            
            console.log("listCashPay");
            console.log(listCashPay);      
      
            console.log("timeListCashPay");
            console.log(timeListCashPay);      
            
          
         countCashPay = countCashPay+1;

         sumCashPay = sumCashPay+totalAmount;

         localStorage.setItem("kTable6Pay", null);
                          // must edit here
         // dont duplicate here
         // nowPayTable <<< look at this

                 console.log("countCashPay");
                console.log(countCashPay);      
                console.log("sumCashPay");
                console.log(sumCashPay);      
                console.log("totalAmount");
                console.log(totalAmount);      

        totalAmount = 0;

                console.log("totalAmount after clear");
                console.log(totalAmount);      


          for (var i = 0; i < cashierListLenNow;){          
                  
                  // delete the first row of the main table
                  document.getElementById("c-table-display").deleteRow(0);
                  // have to -1 for cashierListLenNow because when the new order come
                  cashierListLenNow--;
         
                }  

    }
        //////////////////// 


  document.getElementById("btn-T1").disabled = false;
  document.getElementById("btn-T2").disabled = false;
  document.getElementById("btn-T3").disabled = false;
  document.getElementById("btn-T4").disabled = false;
  document.getElementById("btn-T5").disabled = false;
  document.getElementById("btn-T6").disabled = false;
  
    document.getElementById("btn-PayCredit").disabled = true;

    document.getElementById("creditReceiveSpace-btn").disabled = true;
    document.getElementById("btn-PayOther").disabled = true;

    document.getElementById("cashReceiveSpace-btn").disabled = true;
    document.getElementById("btn-PayCash").disabled = true;

    document.getElementById("cashierReport").disabled = false;

  // document.getElementById("cashReceiveSpace").innerHTML = "0";
  // document.getElementById("cashReceiveSpace").defaultValue = "0";
  // document.getElementById("cashReceiveSpace").value = "0";
  nowPayTable = 0;
  console.log("nowPayTable");
  console.log(nowPayTable);

  document.getElementById("table-number-output").innerHTML = "Table ?";

  document.getElementById("creditReceiveSpace").value = "";
  document.getElementById("cashReceiveSpace").value = "0";
  // document.getElementById('cashReceiveSpace').value = "0";
  document.getElementById("main-output").innerHTML = "¥ 0";

console.log("cashierListLenNow");
console.log(cashierListLenNow);


console.log("cashierBackList");
console.log(cashierBackList);


}






















function payReceiveCredit() {

        // <<<<< *** Mark all 6 table ***  
        // <<<<< Maybe this part is not using 
        if (nowPayTable === 1){
          // document.getElementById("btn-PayCash").disabled = false;
        }
        // Maybe this part is not using >>>>>
        //  *** Mark all 6 table ***  >>>>>




        if(document.getElementById("creditReceiveSpace").value.length === 0)
        {
            alert("Please input card number　カード番号をご入力下さい")
            document.getElementById("btn-PayCredit").disabled = true;
        }  else {
              

                console.log("totalAmount");
                console.log(totalAmount);      
                

              document.getElementById("return-output").innerHTML = "Change お釣り ¥0";    

              document.getElementById("btn-PayCredit").disabled = false;
              document.getElementById("btn-PayCash").disabled = true;

        }
}


function payCredit() {
// <<<<< *** Mark all 6 table ***          
    if (nowPayTable === 1){
                  //must edit
         unlockT1();
         // must edit
         // unlockT2();
         // unlockT3();
         // unlockT4();
         // unlockT5();
         // unlockT6();

         

            listCreditPay.push(document.getElementById("creditReceiveSpace").value);
            

         var time = new Date();   
         
         console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
         timeListCreditPay.push(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());

            
            console.log("listCreditPay");
            console.log(listCreditPay);      
            
            console.log("timeListCreditPay");
            console.log(timeListCreditPay);      
            
         countCreditPay = countCreditPay+1;

         sumCreditPay = sumCreditPay+totalAmount;

         localStorage.setItem("kTable1Pay", null);
                            // must edit

                 console.log("countCreditPay");
                console.log(countCreditPay);      
                console.log("sumCreditPay");
                console.log(sumCreditPay);      
                console.log("totalAmount");
                console.log(totalAmount);      

                

        totalAmount = 0;

                console.log("totalAmount after clear");
                console.log(totalAmount);      


          for (var i = 0; i < cashierListLenNow;){          
                  
                  // delete the first row of the main table
                  document.getElementById("c-table-display").deleteRow(0);
                  // have to -1 for cashierListLenNow because when the new order come
                  cashierListLenNow--;
         
                }  

    } 
//  *** Mark all 6 table *** (add else)  >>>>>
      else if (nowPayTable === 2){
                  //must edit
         unlockT2();
         // must edit
         // unlockT2();
         // unlockT3();
         // unlockT4();
         // unlockT5();
         // unlockT6();

         

            listCreditPay.push(document.getElementById("creditReceiveSpace").value);
            

         var time = new Date();   
         
         console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
         timeListCreditPay.push(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());

            
            console.log("listCreditPay");
            console.log(listCreditPay);      
            
            console.log("timeListCreditPay");
            console.log(timeListCreditPay);      
            
         countCreditPay = countCreditPay+1;

         sumCreditPay = sumCreditPay+totalAmount;

         localStorage.setItem("kTable2Pay", null);
                            // must edit

                 console.log("countCreditPay");
                console.log(countCreditPay);      
                console.log("sumCreditPay");
                console.log(sumCreditPay);      
                console.log("totalAmount");
                console.log(totalAmount);      

                

        totalAmount = 0;

                console.log("totalAmount after clear");
                console.log(totalAmount);      


          for (var i = 0; i < cashierListLenNow;){          
                  
                  // delete the first row of the main table
                  document.getElementById("c-table-display").deleteRow(0);
                  // have to -1 for cashierListLenNow because when the new order come
                  cashierListLenNow--;
         
                }  

    } 
      // add else
      else if (nowPayTable === 3){
                  //must edit
         unlockT3();
         // must edit
         
            listCreditPay.push(document.getElementById("creditReceiveSpace").value);
            

         var time = new Date();   
         
         console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
         timeListCreditPay.push(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());

            
            console.log("listCreditPay");
            console.log(listCreditPay);      
            
            console.log("timeListCreditPay");
            console.log(timeListCreditPay);      
            
         countCreditPay = countCreditPay+1;

         sumCreditPay = sumCreditPay+totalAmount;

         localStorage.setItem("kTable3Pay", null);
                            // must edit

                 console.log("countCreditPay");
                console.log(countCreditPay);      
                console.log("sumCreditPay");
                console.log(sumCreditPay);      
                console.log("totalAmount");
                console.log(totalAmount);      

                

        totalAmount = 0;

                console.log("totalAmount after clear");
                console.log(totalAmount);      


          for (var i = 0; i < cashierListLenNow;){          
                  
                  // delete the first row of the main table
                  document.getElementById("c-table-display").deleteRow(0);
                  // have to -1 for cashierListLenNow because when the new order come
                  cashierListLenNow--;
         
                }  

    } 
      // add else
      else if (nowPayTable === 4){
                  //must edit
         unlockT4();
         // must edit
         
            listCreditPay.push(document.getElementById("creditReceiveSpace").value);
            

         var time = new Date();   
         
         console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
         timeListCreditPay.push(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());

            
            console.log("listCreditPay");
            console.log(listCreditPay);      
            
            console.log("timeListCreditPay");
            console.log(timeListCreditPay);      
            
         countCreditPay = countCreditPay+1;

         sumCreditPay = sumCreditPay+totalAmount;

         localStorage.setItem("kTable4Pay", null);
                            // must edit

                 console.log("countCreditPay");
                console.log(countCreditPay);      
                console.log("sumCreditPay");
                console.log(sumCreditPay);      
                console.log("totalAmount");
                console.log(totalAmount);      

                

        totalAmount = 0;

                console.log("totalAmount after clear");
                console.log(totalAmount);      


          for (var i = 0; i < cashierListLenNow;){          
                  
                  // delete the first row of the main table
                  document.getElementById("c-table-display").deleteRow(0);
                  // have to -1 for cashierListLenNow because when the new order come
                  cashierListLenNow--;
         
                }  

    } 
      // add else
      else if (nowPayTable === 5){
                  //must edit
         unlockT5();
         // must edit
         
            listCreditPay.push(document.getElementById("creditReceiveSpace").value);
            

         var time = new Date();   
         
         console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
         timeListCreditPay.push(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());

            
            console.log("listCreditPay");
            console.log(listCreditPay);      
            
            console.log("timeListCreditPay");
            console.log(timeListCreditPay);      
            
         countCreditPay = countCreditPay+1;

         sumCreditPay = sumCreditPay+totalAmount;

         localStorage.setItem("kTable5Pay", null);
                            // must edit

                 console.log("countCreditPay");
                console.log(countCreditPay);      
                console.log("sumCreditPay");
                console.log(sumCreditPay);      
                console.log("totalAmount");
                console.log(totalAmount);      

                

        totalAmount = 0;

                console.log("totalAmount after clear");
                console.log(totalAmount);      


          for (var i = 0; i < cashierListLenNow;){          
                  
                  // delete the first row of the main table
                  document.getElementById("c-table-display").deleteRow(0);
                  // have to -1 for cashierListLenNow because when the new order come
                  cashierListLenNow--;
         
                }  

    } 
      // add else
      else if (nowPayTable === 6){
                  //must edit
         unlockT6();
         // must edit
         
            listCreditPay.push(document.getElementById("creditReceiveSpace").value);
            

         var time = new Date();   
         
         console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
         timeListCreditPay.push(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());

            
            console.log("listCreditPay");
            console.log(listCreditPay);      
            
            console.log("timeListCreditPay");
            console.log(timeListCreditPay);      
            
         countCreditPay = countCreditPay+1;

         sumCreditPay = sumCreditPay+totalAmount;

         localStorage.setItem("kTable6Pay", null);
                            // must edit

                 console.log("countCreditPay");
                console.log(countCreditPay);      
                console.log("sumCreditPay");
                console.log(sumCreditPay);      
                console.log("totalAmount");
                console.log(totalAmount);      

                

        totalAmount = 0;

                console.log("totalAmount after clear");
                console.log(totalAmount);      


          for (var i = 0; i < cashierListLenNow;){          
                  
                  // delete the first row of the main table
                  document.getElementById("c-table-display").deleteRow(0);
                  // have to -1 for cashierListLenNow because when the new order come
                  cashierListLenNow--;
         
                }  

    } 
      ///////////////////////


  document.getElementById("btn-T1").disabled = false;
  document.getElementById("btn-T2").disabled = false;
  document.getElementById("btn-T3").disabled = false;
  document.getElementById("btn-T4").disabled = false;
  document.getElementById("btn-T5").disabled = false;
  document.getElementById("btn-T6").disabled = false;
  
    document.getElementById("btn-PayCredit").disabled = true;

    document.getElementById("creditReceiveSpace-btn").disabled = true;
    document.getElementById("btn-PayOther").disabled = true;

    document.getElementById("cashReceiveSpace-btn").disabled = true;
    document.getElementById("btn-PayCash").disabled = true;

    document.getElementById("cashierReport").disabled = false;


  // document.getElementById("cashReceiveSpace").innerHTML = "0";
  // document.getElementById("cashReceiveSpace").defaultValue = "0";
  // document.getElementById("cashReceiveSpace").value = "0";
  nowPayTable = 0;
  console.log("nowPayTable");
  console.log(nowPayTable);

  document.getElementById("table-number-output").innerHTML = "Table ?";
  document.getElementById("creditReceiveSpace").value = "";
  document.getElementById("cashReceiveSpace").value = "0";
  // document.getElementById('cashReceiveSpace').value = "0";
  document.getElementById("main-output").innerHTML = "¥ 0";

console.log("cashierListLenNow");
console.log(cashierListLenNow);


console.log("cashierBackList");
console.log(cashierBackList);


}















//"OTHER PAY Button" 

function payOther() {
  var cfmPayOther = window.confirm("Please confirm?\nよろしいですか？\nโปรดยืนยัน");
      if (cfmPayOther) {
           var payOtherComment = prompt("Please leave a comment\n詳細をご記入下さい\nโปรดกรอกรายละเอียด", "Please specify more details");
           if (payOtherComment!="Please specify more details"&&payOtherComment!=""){
                     listOtherPay.push(payOtherComment);
                     
                     var time = new Date();
                     
                     console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
                     timeListOtherPay.push(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());

                     console.log("payOtherComment");
                     console.log(payOtherComment);           
                     console.log("listOtherPay");   
                     console.log(listOtherPay);     
                     console.log("timeListOtherPay");     
                     console.log(timeListOtherPay);
                      console.log("totalAmount");
                      console.log(totalAmount);      
                          
                   countOtherPay = countOtherPay+1;

                   sumOtherPay = sumOtherPay+totalAmount;
                   // This line make sure that the customer paid

                          console.log("countOtherPay");
                          console.log(countOtherPay);      
                          console.log("sumOtherPay");
                          console.log(sumOtherPay);      

                        document.getElementById("return-output").innerHTML = "Change お釣り ¥0";    
                        
                        document.getElementById("btn-T1").disabled = false;
                        document.getElementById("btn-T2").disabled = false;
                        document.getElementById("btn-T3").disabled = false;
                        document.getElementById("btn-T4").disabled = false;
                        document.getElementById("btn-T5").disabled = false;
                        document.getElementById("btn-T6").disabled = false;
                          
                          document.getElementById("btn-PayOther").disabled = true;
                          
                          document.getElementById("creditReceiveSpace-btn").disabled = true;
                          document.getElementById("btn-PayCredit").disabled = true;

                          document.getElementById("cashReceiveSpace-btn").disabled = true;
                          document.getElementById("btn-PayCash").disabled = true;

                           document.getElementById("cashierReport").disabled = false; 

                           
                        document.getElementById("table-number-output").innerHTML = "Table ?";
                        document.getElementById("creditReceiveSpace").value = "";
                        document.getElementById("cashReceiveSpace").value = "0";
                        document.getElementById("main-output").innerHTML = "¥ 0";

                      console.log("cashierListLenNow");
                      console.log(cashierListLenNow);


                      console.log("cashierBackList");
                      console.log(cashierBackList);







                            // <<<<< *** Mark all 6 table ***                
                            if (nowPayTable === 1){
                                      //must edit
                             unlockT1();
                             // must edit
                             // unlockT2();
                             // unlockT3();
                             // unlockT4();
                             // unlockT5();
                             // unlockT6();

                                localStorage.setItem("kTable1Pay", null);
                                                    // must edit
                                totalAmount = 0;
                                    console.log("totalAmount after clear");
                                    console.log(totalAmount);      
                                   for (var i = 0; i < cashierListLenNow;){                            
                                      // delete the first row of the main table
                                      document.getElementById("c-table-display").deleteRow(0);
                                      // have to -1 for cashierListLenNow because when the new order come
                                      cashierListLenNow--;
                                    }  

                                    nowPayTable = 0;
                                    console.log("nowPayTable");
                                    console.log(nowPayTable);


                            }
                            //  *** Mark all 6 table (add else) ***  >>>>>       
                              else if (nowPayTable === 2){
                                      //must edit
                             unlockT2();
                             // must edit
                             

                                localStorage.setItem("kTable2Pay", null);
                                                    // must edit
                                totalAmount = 0;
                                    console.log("totalAmount after clear");
                                    console.log(totalAmount);      
                                   for (var i = 0; i < cashierListLenNow;){                            
                                      // delete the first row of the main table
                                      document.getElementById("c-table-display").deleteRow(0);
                                      // have to -1 for cashierListLenNow because when the new order come
                                      cashierListLenNow--;
                                    }  

                                    nowPayTable = 0;
                                    console.log("nowPayTable");
                                    console.log(nowPayTable);


                            }
                                //  (add else) 
                                else if (nowPayTable === 3){
                                      //must edit
                             unlockT3();
                             // must edit
                             

                                localStorage.setItem("kTable3Pay", null);
                                                    // must edit
                                totalAmount = 0;
                                    console.log("totalAmount after clear");
                                    console.log(totalAmount);      
                                   for (var i = 0; i < cashierListLenNow;){                            
                                      // delete the first row of the main table
                                      document.getElementById("c-table-display").deleteRow(0);
                                      // have to -1 for cashierListLenNow because when the new order come
                                      cashierListLenNow--;
                                    }  

                                    nowPayTable = 0;
                                    console.log("nowPayTable");
                                    console.log(nowPayTable);


                            }
                                  //  (add else) 
                                  else if (nowPayTable === 4){
                                      //must edit
                             unlockT4();
                             // must edit
                             

                                localStorage.setItem("kTable4Pay", null);
                                                    // must edit
                                totalAmount = 0;
                                    console.log("totalAmount after clear");
                                    console.log(totalAmount);      
                                   for (var i = 0; i < cashierListLenNow;){                            
                                      // delete the first row of the main table
                                      document.getElementById("c-table-display").deleteRow(0);
                                      // have to -1 for cashierListLenNow because when the new order come
                                      cashierListLenNow--;
                                    }  

                                    nowPayTable = 0;
                                    console.log("nowPayTable");
                                    console.log(nowPayTable);


                            }
                                  //  (add else) 
                                  else if (nowPayTable === 5){
                                      //must edit
                             unlockT5();
                             // must edit
                             

                                localStorage.setItem("kTable5Pay", null);
                                                    // must edit
                                totalAmount = 0;
                                    console.log("totalAmount after clear");
                                    console.log(totalAmount);      
                                   for (var i = 0; i < cashierListLenNow;){                            
                                      // delete the first row of the main table
                                      document.getElementById("c-table-display").deleteRow(0);
                                      // have to -1 for cashierListLenNow because when the new order come
                                      cashierListLenNow--;
                                    }  

                                    nowPayTable = 0;
                                    console.log("nowPayTable");
                                    console.log(nowPayTable);


                            }
                                  //  (add else) 
                                  else if (nowPayTable === 6){
                                      //must edit
                             unlockT6();
                             // must edit
                             

                                localStorage.setItem("kTable6Pay", null);
                                                    // must edit
                                totalAmount = 0;
                                    console.log("totalAmount after clear");
                                    console.log(totalAmount);      
                                   for (var i = 0; i < cashierListLenNow;){                            
                                      // delete the first row of the main table
                                      document.getElementById("c-table-display").deleteRow(0);
                                      // have to -1 for cashierListLenNow because when the new order come
                                      cashierListLenNow--;
                                    }  

                                    nowPayTable = 0;
                                    console.log("nowPayTable");
                                    console.log(nowPayTable);


                            }
                                  //////////////////////
















            }  else {
              alert("Please specify more details typing any information\n恐れ入ります、詳細をご記入下さい\nขออภัยค่ะ รบกวนกรอกรายละเอียด");
            }           
      }
  
}


//"OTHER PAY Button" 


























// Call data from each customer table

// <<<<< *** Mark all 6 table ***  
function cTable1GetG() {
          //must edit
// var totalAmount = 0; 
  var table1ConfirmedCashier = JSON.parse(localStorage.getItem("kTable1Pay")); 
      // must edit                                                // must edit
  console.log("table1ConfirmedCashier");
              //must edit      
  console.log(table1ConfirmedCashier);
             // must edit
  cashierBackList.push.apply(cashierBackList, table1ConfirmedCashier);
                                           //must edit

  console.log("cashierBackList");
  console.log(cashierBackList);

  nowPayTable = 1;
      // must edit
  console.log("nowPayTable");
  console.log(nowPayTable);
  document.getElementById("table-number-output").innerHTML = "Table 1";
                                                          //must edit


              // if that table has no data yet so the button wont lock
          if (table1ConfirmedCashier.length != 0) {
               // must edit
          document.getElementById("btn-T1").disabled = true;
          document.getElementById("btn-T2").disabled = true;
          document.getElementById("btn-T3").disabled = true;
          document.getElementById("btn-T4").disabled = true;
          document.getElementById("btn-T5").disabled = true;
          document.getElementById("btn-T6").disabled = true;
          document.getElementById("cashierReport").disabled = true;
          document.getElementById("cashReceiveSpace-btn").disabled = false;
          document.getElementById("creditReceiveSpace-btn").disabled = false;
          document.getElementById("btn-PayOther").disabled = false; 


          }
  

  var cashierTable = document.getElementById("c-table-display");
    var table1CashierLen = table1ConfirmedCashier.length;
    // must edit            //must edit


        for (var i = 0; i < table1CashierLen; i++){
                            //must edit          
              var xRow = cashierTable.insertRow();
              var cell1 = xRow.insertCell(0);
              var cell2 = xRow.insertCell(1);
              var cell3 = xRow.insertCell(2);
              var cell4 = xRow.insertCell(3);
              var cell5 = xRow.insertCell(4);
              var cell6 = xRow.insertCell(5);
              cell1.innerHTML = "-";
              cell2.innerHTML = "-";
              cell3.innerHTML = "-";
              cell4.innerHTML = "-";
              cell5.innerHTML = "-";
              cell6.innerHTML = "-";

            var xRow = document.getElementById("c-table-display").rows[i+cashierListLenNow].cells;
            xRow[0].innerHTML = i+1+"&nbsp;";
            xRow[1].innerHTML = table1ConfirmedCashier[i].menuListCode+"&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp";
                                //must edit
            xRow[2].innerHTML = table1ConfirmedCashier[i].menuListName+"&nbsp;";
                               //must edit
            xRow[3].innerHTML = table1ConfirmedCashier[i].menuListTableNum+"&nbsp;";
                                //must edit
            xRow[4].innerHTML = table1ConfirmedCashier[i].menuListTax;
                                //must edit
            xRow[5].innerHTML = "¥ "+table1ConfirmedCashier[i].menuListNetPrice;
                                //must edit
            totalAmount = totalAmount+table1ConfirmedCashier[i].menuListNetPrice;
                               //must edit
            console.log("totalAmount");
            console.log(totalAmount);
            document.getElementById("main-output").innerHTML = "¥ "+totalAmount;
                      
        }  

cashierListLenNow = cashierListLenNow+table1CashierLen;
                                      //must edit
console.log("cashierListLenNow");
console.log(cashierListLenNow);
console.log("cashierBackList");
console.log(cashierBackList);

console.log("totalAmount");
console.log(totalAmount);

}

//  *** Mark all 6 table ***  >>>>>



function cTable2GetG() {
          //must edit
// var totalAmount = 0; 
  var table2ConfirmedCashier = JSON.parse(localStorage.getItem("kTable2Pay")); 
       // must edit                                              // must edit
  console.log("table2ConfirmedCashier");
              //must edit      
  console.log(table2ConfirmedCashier);
             // must edit
  cashierBackList.push.apply(cashierBackList, table2ConfirmedCashier);
                                           //must edit

  console.log("cashierBackList");
  console.log(cashierBackList);

  nowPayTable = 2;
      // must edit
  console.log("nowPayTable");
  console.log(nowPayTable);
  document.getElementById("table-number-output").innerHTML = "Table 2";
                                                          //must edit


              // if that table has no data yet so the button wont lock
          if (table2ConfirmedCashier.length != 0) {
               // must edit
          document.getElementById("btn-T1").disabled = true;
          document.getElementById("btn-T2").disabled = true;
          document.getElementById("btn-T3").disabled = true;
          document.getElementById("btn-T4").disabled = true;
          document.getElementById("btn-T5").disabled = true;
          document.getElementById("btn-T6").disabled = true;
          document.getElementById("cashierReport").disabled = true;
          document.getElementById("cashReceiveSpace-btn").disabled = false;
          document.getElementById("creditReceiveSpace-btn").disabled = false;
          document.getElementById("btn-PayOther").disabled = false; 


          }
  

  var cashierTable = document.getElementById("c-table-display");
    var table2CashierLen = table2ConfirmedCashier.length;
    // must edit            //must edit


        for (var i = 0; i < table2CashierLen; i++){
                            //must edit          
              var xRow = cashierTable.insertRow();
              var cell1 = xRow.insertCell(0);
              var cell2 = xRow.insertCell(1);
              var cell3 = xRow.insertCell(2);
              var cell4 = xRow.insertCell(3);
              var cell5 = xRow.insertCell(4);
              var cell6 = xRow.insertCell(5);
              cell1.innerHTML = "-";
              cell2.innerHTML = "-";
              cell3.innerHTML = "-";
              cell4.innerHTML = "-";
              cell5.innerHTML = "-";
              cell6.innerHTML = "-";

            var xRow = document.getElementById("c-table-display").rows[i+cashierListLenNow].cells;
            xRow[0].innerHTML = i+1+"&nbsp;";
            xRow[1].innerHTML = table2ConfirmedCashier[i].menuListCode+"&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp";
                                //must edit
            xRow[2].innerHTML = table2ConfirmedCashier[i].menuListName+"&nbsp;";
                               //must edit
            xRow[3].innerHTML = table2ConfirmedCashier[i].menuListTableNum+"&nbsp;";
                                //must edit
            xRow[4].innerHTML = table2ConfirmedCashier[i].menuListTax;
                                //must edit
            xRow[5].innerHTML = "¥ "+table2ConfirmedCashier[i].menuListNetPrice;
                                //must edit
            totalAmount = totalAmount+table2ConfirmedCashier[i].menuListNetPrice;
                               //must edit
            console.log("totalAmount");
            console.log(totalAmount);
            document.getElementById("main-output").innerHTML = "¥ "+totalAmount;
                      
        }  

cashierListLenNow = cashierListLenNow+table2CashierLen;
                                      //must edit
console.log("cashierListLenNow");
console.log(cashierListLenNow);
console.log("cashierBackList");
console.log(cashierBackList);

console.log("totalAmount");
console.log(totalAmount);

}


////////////////////////

function cTable3GetG() {
          //must edit
// var totalAmount = 0; 
  var table3ConfirmedCashier = JSON.parse(localStorage.getItem("kTable3Pay")); 
       // must edit                                              // must edit
  console.log("table3ConfirmedCashier");
              //must edit      
  console.log(table3ConfirmedCashier);
             // must edit
  cashierBackList.push.apply(cashierBackList, table3ConfirmedCashier);
                                           //must edit

  console.log("cashierBackList");
  console.log(cashierBackList);

  nowPayTable = 3;
      // must edit
  console.log("nowPayTable");
  console.log(nowPayTable);
  document.getElementById("table-number-output").innerHTML = "Table 3";
                                                          //must edit


              // if that table has no data yet so the button wont lock
          if (table3ConfirmedCashier.length != 0) {
               // must edit
          document.getElementById("btn-T1").disabled = true;
          document.getElementById("btn-T2").disabled = true;
          document.getElementById("btn-T3").disabled = true;
          document.getElementById("btn-T4").disabled = true;
          document.getElementById("btn-T5").disabled = true;
          document.getElementById("btn-T6").disabled = true;
          document.getElementById("cashierReport").disabled = true;
          document.getElementById("cashReceiveSpace-btn").disabled = false;
          document.getElementById("creditReceiveSpace-btn").disabled = false;
          document.getElementById("btn-PayOther").disabled = false; 


          }
  

  var cashierTable = document.getElementById("c-table-display");
    var table3CashierLen = table3ConfirmedCashier.length;
    // must edit            //must edit


        for (var i = 0; i < table3CashierLen; i++){
                            //must edit          
              var xRow = cashierTable.insertRow();
              var cell1 = xRow.insertCell(0);
              var cell2 = xRow.insertCell(1);
              var cell3 = xRow.insertCell(2);
              var cell4 = xRow.insertCell(3);
              var cell5 = xRow.insertCell(4);
              var cell6 = xRow.insertCell(5);
              cell1.innerHTML = "-";
              cell2.innerHTML = "-";
              cell3.innerHTML = "-";
              cell4.innerHTML = "-";
              cell5.innerHTML = "-";
              cell6.innerHTML = "-";

            var xRow = document.getElementById("c-table-display").rows[i+cashierListLenNow].cells;
            xRow[0].innerHTML = i+1+"&nbsp;";
            xRow[1].innerHTML = table3ConfirmedCashier[i].menuListCode+"&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp";
                                //must edit
            xRow[2].innerHTML = table3ConfirmedCashier[i].menuListName+"&nbsp;";
                               //must edit
            xRow[3].innerHTML = table3ConfirmedCashier[i].menuListTableNum+"&nbsp;";
                                //must edit
            xRow[4].innerHTML = table3ConfirmedCashier[i].menuListTax;
                                //must edit
            xRow[5].innerHTML = "¥ "+table3ConfirmedCashier[i].menuListNetPrice;
                                //must edit
            totalAmount = totalAmount+table3ConfirmedCashier[i].menuListNetPrice;
                               //must edit
            console.log("totalAmount");
            console.log(totalAmount);
            document.getElementById("main-output").innerHTML = "¥ "+totalAmount;
                      
        }  

cashierListLenNow = cashierListLenNow+table3CashierLen;
                                      //must edit
console.log("cashierListLenNow");
console.log(cashierListLenNow);
console.log("cashierBackList");
console.log(cashierBackList);

console.log("totalAmount");
console.log(totalAmount);

}

////////////////////////


function cTable4GetG() {
          //must edit
// var totalAmount = 0; 
  var table4ConfirmedCashier = JSON.parse(localStorage.getItem("kTable4Pay")); 
       // must edit                                              // must edit
  console.log("table4ConfirmedCashier");
              //must edit      
  console.log(table4ConfirmedCashier);
             // must edit
  cashierBackList.push.apply(cashierBackList, table4ConfirmedCashier);
                                           //must edit

  console.log("cashierBackList");
  console.log(cashierBackList);

  nowPayTable = 4;
      // must edit
  console.log("nowPayTable");
  console.log(nowPayTable);
  document.getElementById("table-number-output").innerHTML = "Table 4";
                                                          //must edit


              // if that table has no data yet so the button wont lock
          if (table4ConfirmedCashier.length != 0) {
               // must edit
          document.getElementById("btn-T1").disabled = true;
          document.getElementById("btn-T2").disabled = true;
          document.getElementById("btn-T3").disabled = true;
          document.getElementById("btn-T4").disabled = true;
          document.getElementById("btn-T5").disabled = true;
          document.getElementById("btn-T6").disabled = true;
          document.getElementById("cashierReport").disabled = true;
          document.getElementById("cashReceiveSpace-btn").disabled = false;
          document.getElementById("creditReceiveSpace-btn").disabled = false;
          document.getElementById("btn-PayOther").disabled = false; 


          }
  

  var cashierTable = document.getElementById("c-table-display");
    var table4CashierLen = table4ConfirmedCashier.length;
    // must edit            //must edit


        for (var i = 0; i < table4CashierLen; i++){
                            //must edit          
              var xRow = cashierTable.insertRow();
              var cell1 = xRow.insertCell(0);
              var cell2 = xRow.insertCell(1);
              var cell3 = xRow.insertCell(2);
              var cell4 = xRow.insertCell(3);
              var cell5 = xRow.insertCell(4);
              var cell6 = xRow.insertCell(5);
              cell1.innerHTML = "-";
              cell2.innerHTML = "-";
              cell3.innerHTML = "-";
              cell4.innerHTML = "-";
              cell5.innerHTML = "-";
              cell6.innerHTML = "-";

            var xRow = document.getElementById("c-table-display").rows[i+cashierListLenNow].cells;
            xRow[0].innerHTML = i+1+"&nbsp;";
            xRow[1].innerHTML = table4ConfirmedCashier[i].menuListCode+"&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp";
                                //must edit
            xRow[2].innerHTML = table4ConfirmedCashier[i].menuListName+"&nbsp;";
                               //must edit
            xRow[3].innerHTML = table4ConfirmedCashier[i].menuListTableNum+"&nbsp;";
                                //must edit
            xRow[4].innerHTML = table4ConfirmedCashier[i].menuListTax;
                                //must edit
            xRow[5].innerHTML = "¥ "+table4ConfirmedCashier[i].menuListNetPrice;
                                //must edit
            totalAmount = totalAmount+table4ConfirmedCashier[i].menuListNetPrice;
                               //must edit
            console.log("totalAmount");
            console.log(totalAmount);
            document.getElementById("main-output").innerHTML = "¥ "+totalAmount;
                      
        }  

cashierListLenNow = cashierListLenNow+table4CashierLen;
                                      //must edit
console.log("cashierListLenNow");
console.log(cashierListLenNow);
console.log("cashierBackList");
console.log(cashierBackList);

console.log("totalAmount");
console.log(totalAmount);

}

////////////////////////


function cTable5GetG() {
          //must edit
// var totalAmount = 0; 
  var table5ConfirmedCashier = JSON.parse(localStorage.getItem("kTable5Pay")); 
       // must edit                                              // must edit
  console.log("table5ConfirmedCashier");
              //must edit      
  console.log(table5ConfirmedCashier);
             // must edit
  cashierBackList.push.apply(cashierBackList, table5ConfirmedCashier);
                                           //must edit

  console.log("cashierBackList");
  console.log(cashierBackList);

  nowPayTable = 5;
      // must edit
  console.log("nowPayTable");
  console.log(nowPayTable);
  document.getElementById("table-number-output").innerHTML = "Table 5";
                                                          //must edit


              // if that table has no data yet so the button wont lock
          if (table5ConfirmedCashier.length != 0) {
               // must edit
          document.getElementById("btn-T1").disabled = true;
          document.getElementById("btn-T2").disabled = true;
          document.getElementById("btn-T3").disabled = true;
          document.getElementById("btn-T4").disabled = true;
          document.getElementById("btn-T5").disabled = true;
          document.getElementById("btn-T6").disabled = true;
          document.getElementById("cashierReport").disabled = true;
          document.getElementById("cashReceiveSpace-btn").disabled = false;
          document.getElementById("creditReceiveSpace-btn").disabled = false;
          document.getElementById("btn-PayOther").disabled = false; 


          }
  

  var cashierTable = document.getElementById("c-table-display");
    var table5CashierLen = table5ConfirmedCashier.length;
    // must edit            //must edit


        for (var i = 0; i < table5CashierLen; i++){
                            //must edit          
              var xRow = cashierTable.insertRow();
              var cell1 = xRow.insertCell(0);
              var cell2 = xRow.insertCell(1);
              var cell3 = xRow.insertCell(2);
              var cell4 = xRow.insertCell(3);
              var cell5 = xRow.insertCell(4);
              var cell6 = xRow.insertCell(5);
              cell1.innerHTML = "-";
              cell2.innerHTML = "-";
              cell3.innerHTML = "-";
              cell4.innerHTML = "-";
              cell5.innerHTML = "-";
              cell6.innerHTML = "-";

            var xRow = document.getElementById("c-table-display").rows[i+cashierListLenNow].cells;
            xRow[0].innerHTML = i+1+"&nbsp;";
            xRow[1].innerHTML = table5ConfirmedCashier[i].menuListCode+"&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp";
                                //must edit
            xRow[2].innerHTML = table5ConfirmedCashier[i].menuListName+"&nbsp;";
                               //must edit
            xRow[3].innerHTML = table5ConfirmedCashier[i].menuListTableNum+"&nbsp;";
                                //must edit
            xRow[4].innerHTML = table5ConfirmedCashier[i].menuListTax;
                                //must edit
            xRow[5].innerHTML = "¥ "+table5ConfirmedCashier[i].menuListNetPrice;
                                //must edit
            totalAmount = totalAmount+table5ConfirmedCashier[i].menuListNetPrice;
                               //must edit
            console.log("totalAmount");
            console.log(totalAmount);
            document.getElementById("main-output").innerHTML = "¥ "+totalAmount;
                      
        }  

cashierListLenNow = cashierListLenNow+table5CashierLen;
                                      //must edit
console.log("cashierListLenNow");
console.log(cashierListLenNow);
console.log("cashierBackList");
console.log(cashierBackList);

console.log("totalAmount");
console.log(totalAmount);

}


////////////////////////


function cTable6GetG() {
          //must edit
// var totalAmount = 0; 
  var table6ConfirmedCashier = JSON.parse(localStorage.getItem("kTable6Pay")); 
       // must edit                                              // must edit
  console.log("table6ConfirmedCashier");
              //must edit      
  console.log(table6ConfirmedCashier);
             // must edit
  cashierBackList.push.apply(cashierBackList, table6ConfirmedCashier);
                                           //must edit

  console.log("cashierBackList");
  console.log(cashierBackList);

  nowPayTable = 6;
      // must edit
  console.log("nowPayTable");
  console.log(nowPayTable);
  document.getElementById("table-number-output").innerHTML = "Table 6";
                                                          //must edit


              // if that table has no data yet so the button wont lock
          if (table6ConfirmedCashier.length != 0) {
               // must edit
          document.getElementById("btn-T1").disabled = true;
          document.getElementById("btn-T2").disabled = true;
          document.getElementById("btn-T3").disabled = true;
          document.getElementById("btn-T4").disabled = true;
          document.getElementById("btn-T5").disabled = true;
          document.getElementById("btn-T6").disabled = true;
          document.getElementById("cashierReport").disabled = true;
          document.getElementById("cashReceiveSpace-btn").disabled = false;
          document.getElementById("creditReceiveSpace-btn").disabled = false;
          document.getElementById("btn-PayOther").disabled = false; 


          }
  

  var cashierTable = document.getElementById("c-table-display");
    var table6CashierLen = table6ConfirmedCashier.length;
    // must edit            //must edit


        for (var i = 0; i < table6CashierLen; i++){
                            //must edit          
              var xRow = cashierTable.insertRow();
              var cell1 = xRow.insertCell(0);
              var cell2 = xRow.insertCell(1);
              var cell3 = xRow.insertCell(2);
              var cell4 = xRow.insertCell(3);
              var cell5 = xRow.insertCell(4);
              var cell6 = xRow.insertCell(5);
              cell1.innerHTML = "-";
              cell2.innerHTML = "-";
              cell3.innerHTML = "-";
              cell4.innerHTML = "-";
              cell5.innerHTML = "-";
              cell6.innerHTML = "-";

            var xRow = document.getElementById("c-table-display").rows[i+cashierListLenNow].cells;
            xRow[0].innerHTML = i+1+"&nbsp;";
            xRow[1].innerHTML = table6ConfirmedCashier[i].menuListCode+"&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp";
                                //must edit
            xRow[2].innerHTML = table6ConfirmedCashier[i].menuListName+"&nbsp;";
                               //must edit
            xRow[3].innerHTML = table6ConfirmedCashier[i].menuListTableNum+"&nbsp;";
                                //must edit
            xRow[4].innerHTML = table6ConfirmedCashier[i].menuListTax;
                                //must edit
            xRow[5].innerHTML = "¥ "+table6ConfirmedCashier[i].menuListNetPrice;
                                //must edit
            totalAmount = totalAmount+table6ConfirmedCashier[i].menuListNetPrice;
                               //must edit
            console.log("totalAmount");
            console.log(totalAmount);
            document.getElementById("main-output").innerHTML = "¥ "+totalAmount;
                      
        }  

cashierListLenNow = cashierListLenNow+table6CashierLen;
                                      //must edit
console.log("cashierListLenNow");
console.log(cashierListLenNow);
console.log("cashierBackList");
console.log(cashierBackList);

console.log("totalAmount");
console.log(totalAmount);

}


////////////////////////












































// 20201213
var varTable1Payget = false ;
      //must edit 20201213
// Call data from each customer table
//  *** Mark all 6 table ***  >>>>>
var varTable2PayGet = false ;
var varTable3PayGet = false ;
var varTable4PayGet = false ;
var varTable5PayGet = false ;
var varTable6PayGet = false ;

//////////// get json check if there is any order ?

function notifPayGetT1() {
                //must edit 20201213
// var totalAmount = 0; 
  varTable1PayGet = JSON.parse(localStorage.getItem("lockT1")); 
    //must edit 20201213                        //must edit 20201213
  console.log("varTable1PayGet");
                //must edit 20201213
  console.log(varTable1PayGet);
                //must edit 20201213
}


function notifPayGetT2() {
                //must edit 20201213
// var totalAmount = 0; 
  varTable2PayGet = JSON.parse(localStorage.getItem("lockT2")); 
    //must edit 20201213                        //must edit 20201213
  console.log("varTable2PayGet");
                //must edit 20201213
  console.log(varTable2PayGet);
                //must edit 20201213
}


function notifPayGetT3() {
                //must edit 20201213
// var totalAmount = 0; 
  varTable3PayGet = JSON.parse(localStorage.getItem("lockT3")); 
    //must edit 20201213                        //must edit 20201213
  console.log("varTable3PayGet");
                //must edit 20201213
  console.log(varTable3PayGet);
                //must edit 20201213
}


function notifPayGetT4() {
                //must edit 20201213
// var totalAmount = 0; 
  varTable4PayGet = JSON.parse(localStorage.getItem("lockT4")); 
    //must edit 20201213                        //must edit 20201213
  console.log("varTable4PayGet");
                //must edit 20201213
  console.log(varTable4PayGet);
                //must edit 20201213
}


function notifPayGetT5() {
                //must edit 20201213
// var totalAmount = 0; 
  varTable5PayGet = JSON.parse(localStorage.getItem("lockT5")); 
    //must edit 20201213                        //must edit 20201213
  console.log("varTable5PayGet");
                //must edit 20201213
  console.log(varTable5PayGet);
                //must edit 20201213
}


function notifPayGetT6() {
                //must edit 20201213
// var totalAmount = 0; 
  varTable6PayGet = JSON.parse(localStorage.getItem("lockT6")); 
    //must edit 20201213                        //must edit 20201213
  console.log("varTable6PayGet");
                //must edit 20201213
  console.log(varTable6PayGet);
                //must edit 20201213
}

//////////// get json check if there is any order ?













////// turn on yellow notification if there is data

function checkNotifPayGetT1(){
        //must edit 20201213
            $(document).ready(function(){
                 $("#btn-log-check").click(function(){    

                        if (varTable1PayGet === true){
                            //must edit 20201213
                              $("#btn-T1").addClass("btn-warning");
                                //must edit 20201213      //must edit 20201213

                        }
                  });
            });       
}



function checkNotifPayGetT2(){
        //must edit 20201213
            $(document).ready(function(){
                 $("#btn-log-check").click(function(){    

                        if (varTable2PayGet === true){
                            //must edit 20201213
                              $("#btn-T2").addClass("btn-warning");
                                //must edit 20201213      //must edit 20201213

                        }
                  });
            });       
}


function checkNotifPayGetT3(){
        //must edit 20201213
            $(document).ready(function(){
                 $("#btn-log-check").click(function(){    

                        if (varTable3PayGet === true){
                            //must edit 20201213
                              $("#btn-T3").addClass("btn-warning");
                                //must edit 20201213      //must edit 20201213

                        }
                  });
            });       
}


function checkNotifPayGetT4(){
        //must edit 20201213
            $(document).ready(function(){
                 $("#btn-log-check").click(function(){    

                        if (varTable4PayGet === true){
                            //must edit 20201213
                              $("#btn-T4").addClass("btn-warning");
                                //must edit 20201213      //must edit 20201213

                        }
                  });
            });       
}


function checkNotifPayGetT5(){
        //must edit 20201213
            $(document).ready(function(){
                 $("#btn-log-check").click(function(){    

                        if (varTable5PayGet === true){
                            //must edit 20201213
                              $("#btn-T5").addClass("btn-warning");
                                //must edit 20201213      //must edit 20201213

                        }
                  });
            });       
}


function checkNotifPayGetT6(){
        //must edit 20201213
            $(document).ready(function(){
                 $("#btn-log-check").click(function(){    

                        if (varTable6PayGet === true){
                            //must edit 20201213
                              $("#btn-T6").addClass("btn-warning");
                                //must edit 20201213      //must edit 20201213

                        }
                  });
            });       
}

////// turn on yellow notification if there is data
















// remove yellow notification

$(document).ready(function(){
                 $("#btn-T1").click(function(){  
                  //must edit 20201213
                          $("#btn-T1").removeClass("btn-warning");
                             //must edit 20201213
                  });
            });

$(document).ready(function(){
                 $("#btn-T2").click(function(){  
                  //must edit 20201213
                          $("#btn-T2").removeClass("btn-warning");
                             //must edit 20201213
                  });
            });

$(document).ready(function(){
                 $("#btn-T3").click(function(){  
                  //must edit 20201213
                          $("#btn-T3").removeClass("btn-warning");
                             //must edit 20201213
                  });
            });

$(document).ready(function(){
                 $("#btn-T4").click(function(){  
                  //must edit 20201213
                          $("#btn-T4").removeClass("btn-warning");
                             //must edit 20201213
                  });
            });

$(document).ready(function(){
                 $("#btn-T5").click(function(){  
                  //must edit 20201213
                          $("#btn-T5").removeClass("btn-warning");
                             //must edit 20201213
                  });
            });

$(document).ready(function(){
                 $("#btn-T6").click(function(){  
                  //must edit 20201213
                          $("#btn-T6").removeClass("btn-warning");
                             //must edit 20201213
                  });
            });




$(document).ready(function(){
                 $("#btn-PayOther").click(function(){  
                  //must edit 20201213
                          $("#btn-T1").removeClass("btn-warning");
                          //must edit 20201213
                          $("#btn-T2").removeClass("btn-warning");
                          $("#btn-T3").removeClass("btn-warning");
                          $("#btn-T4").removeClass("btn-warning");
                          $("#btn-T5").removeClass("btn-warning");
                          $("#btn-T6").removeClass("btn-warning");
                             
                  });
            });



$(document).ready(function(){
                 $("#btn-PayCredit").click(function(){  
                  //must edit 20201213
                          $("#btn-T1").removeClass("btn-warning");
                          //must edit 20201213
                          $("#btn-T2").removeClass("btn-warning");
                          $("#btn-T3").removeClass("btn-warning");
                          $("#btn-T4").removeClass("btn-warning");
                          $("#btn-T5").removeClass("btn-warning");
                          $("#btn-T6").removeClass("btn-warning");
                             
                  });
            });


$(document).ready(function(){
                 $("#btn-PayCash").click(function(){  
                  //must edit 20201213
                          $("#btn-T1").removeClass("btn-warning");
                          //must edit 20201213
                          $("#btn-T2").removeClass("btn-warning");
                          $("#btn-T3").removeClass("btn-warning");
                          $("#btn-T4").removeClass("btn-warning");
                          $("#btn-T5").removeClass("btn-warning");
                          $("#btn-T6").removeClass("btn-warning");
                             
                  });
            });

// remove yellow notification


























// <<<<< *** Mark all 6 table ***  
var varTable1Call = false ;
      //must edit
// Call data from each customer table
//  *** Mark all 6 table ***  >>>>>
var varTable2Call = false ;
var varTable3Call = false ;
var varTable4Call = false ;
var varTable5Call = false ;
var varTable6Call = false ;










// <<<<< *** Mark all 6 table ***  
function notifCallT1() {
                //must edit 
// var totalAmount = 0; 
  varTable1Call = JSON.parse(localStorage.getItem("jsonCallStaffT1")); 
    //must edit                                      //must edit
  console.log("varTable1Call");
                //must edit
  console.log(varTable1Call);
                //must edit
}
//  *** Mark all 6 table ***  >>>>>

function notifCallT2() {
                //must edit 
// var totalAmount = 0; 
  varTable2Call = JSON.parse(localStorage.getItem("jsonCallStaffT2")); 
    //must edit                                      //must edit
  console.log("varTable2Call");
                //must edit
  console.log(varTable2Call);
                //must edit
}

//////////////////////
function notifCallT3() {
                //must edit 
// var totalAmount = 0; 
  varTable3Call = JSON.parse(localStorage.getItem("jsonCallStaffT3")); 
    //must edit                                      //must edit
  console.log("varTable3Call");
                //must edit
  console.log(varTable3Call);
                //must edit
}
//////////////////////
function notifCallT4() {
                //must edit 
// var totalAmount = 0; 
  varTable4Call = JSON.parse(localStorage.getItem("jsonCallStaffT4")); 
    //must edit                                      //must edit
  console.log("varTable4Call");
                //must edit
  console.log(varTable4Call);
                //must edit
}
//////////////////////
function notifCallT5() {
                //must edit 
// var totalAmount = 0; 
  varTable5Call = JSON.parse(localStorage.getItem("jsonCallStaffT5")); 
    //must edit                                      //must edit
  console.log("varTable5Call");
                //must edit
  console.log(varTable5Call);
                //must edit
}
//////////////////////
function notifCallT6() {
                //must edit 
// var totalAmount = 0; 
  varTable6Call = JSON.parse(localStorage.getItem("jsonCallStaffT6")); 
    //must edit                                      //must edit
  console.log("varTable6Call");
                //must edit
  console.log(varTable6Call);
                //must edit
}

//////////////////////

































// <<<<< *** Mark all 6 table ***  
function checkNotifCallT1(){
        //must edit
            $(document).ready(function(){
                 $("#btn-log-check").click(function(){    

                        if (varTable1Call === true){
                            //must edit      
                              $("#btn-T1-call").addClass("btn-danger");
                                //must edit

                        }
                  });
            });       
}
//  *** Mark all 6 table ***  >>>>>

function checkNotifCallT2(){
        //must edit
            $(document).ready(function(){
                 $("#btn-log-check").click(function(){    

                        if (varTable2Call === true){
                            //must edit      
                              $("#btn-T2-call").addClass("btn-danger");
                                //must edit

                        }
                  });
            });

        
}


//////////////////////////
function checkNotifCallT3(){
        //must edit
            $(document).ready(function(){
                 $("#btn-log-check").click(function(){    

                        if (varTable3Call === true){
                            //must edit      
                              $("#btn-T3-call").addClass("btn-danger");
                                //must edit

                        }
                  });
            });

        
}

//////////////////////////

function checkNotifCallT4(){
        //must edit
            $(document).ready(function(){
                 $("#btn-log-check").click(function(){    

                        if (varTable4Call === true){
                            //must edit      
                              $("#btn-T4-call").addClass("btn-danger");
                                //must edit

                        }
                  });
            });

        
}

//////////////////////////
function checkNotifCallT5(){
        //must edit
            $(document).ready(function(){
                 $("#btn-log-check").click(function(){    

                        if (varTable5Call === true){
                            //must edit      
                              $("#btn-T5-call").addClass("btn-danger");
                                //must edit

                        }
                  });
            });

        
}

//////////////////////////

function checkNotifCallT6(){
        //must edit
            $(document).ready(function(){
                 $("#btn-log-check").click(function(){    

                        if (varTable6Call === true){
                            //must edit      
                              $("#btn-T6-call").addClass("btn-danger");
                                //must edit

                        }
                  });
            });

        
}

//////////////////////////














notifPayGetT1();
//must edit 20201213
checkNotifPayGetT1();
//must edit 20201213

notifPayGetT2();
checkNotifPayGetT2();

notifPayGetT3();
checkNotifPayGetT3();

notifPayGetT4();
checkNotifPayGetT4();

notifPayGetT5();
checkNotifPayGetT5();

notifPayGetT6();
checkNotifPayGetT6();





// <<<<< *** Mark all 6 table ***  
notifCallT1();
//must edit
checkNotifCallT1();
//must edit
//  *** Mark all 6 table ***  >>>>>

notifCallT2();
//must edit
checkNotifCallT2();
//must edit

notifCallT3();
//must edit
checkNotifCallT3();
//must edit

notifCallT4();
//must edit
checkNotifCallT4();
//must edit


notifCallT5();
//must edit
checkNotifCallT5();
//must edit


notifCallT6();
//must edit
checkNotifCallT6();
//must edit






// <<<<< *** Mark all 6 table ***  
function checkNotifCallT1done(){
        //must edit
        varTable1Call = false;
        //must edit

            console.log("varTable1Call");
            //must edit
            console.log(varTable1Call);
            //must edit


        localStorage.setItem("jsonCallStaffT1", JSON.stringify(varTable1Call));
                              //must edit                   //must edit                      

            console.log("varTable1Call");
                        //must edit
            console.log(varTable1Call);
                       //must edit  
          
}

            $(document).ready(function(){
                 $("#btn-T1-call").click(function(){  
                  //must edit
                          $("#btn-T1-call").removeClass("btn-danger");
                             //must edit 
                  });
            });

//  *** Mark all 6 table ***  >>>>>

function checkNotifCallT2done(){
        //must edit
        varTable2Call = false;
        //must edit

            console.log("varTable2Call");
            //must edit
            console.log(varTable2Call);
            //must edit


        localStorage.setItem("jsonCallStaffT2", JSON.stringify(varTable2Call));
                              //must edit                   //must edit                      

            console.log("varTable2Call");
                        //must edit
            console.log(varTable2Call);
                       //must edit  
          
}

            $(document).ready(function(){
                 $("#btn-T2-call").click(function(){  
                  //must edit
                          $("#btn-T2-call").removeClass("btn-danger");
                             //must edit 
                  });
            });



////////////////////////////////////
function checkNotifCallT3done(){
        //must edit
        varTable3Call = false;
        //must edit

            console.log("varTable3Call");
            //must edit
            console.log(varTable3Call);
            //must edit


        localStorage.setItem("jsonCallStaffT3", JSON.stringify(varTable3Call));
                              //must edit                   //must edit                      

            console.log("varTable3Call");
                        //must edit
            console.log(varTable3Call);
                       //must edit  
          
}

            $(document).ready(function(){
                 $("#btn-T3-call").click(function(){  
                  //must edit
                          $("#btn-T3-call").removeClass("btn-danger");
                             //must edit 
                  });
            });


////////////////////////////////////

function checkNotifCallT4done(){
        //must edit
        varTable4Call = false;
        //must edit

            console.log("varTable4Call");
            //must edit
            console.log(varTable4Call);
            //must edit


        localStorage.setItem("jsonCallStaffT4", JSON.stringify(varTable4Call));
                              //must edit                   //must edit                      

            console.log("varTable4Call");
                        //must edit
            console.log(varTable4Call);
                       //must edit  
          
}

            $(document).ready(function(){
                 $("#btn-T4-call").click(function(){  
                  //must edit
                          $("#btn-T4-call").removeClass("btn-danger");
                             //must edit 
                  });
            });


////////////////////////////////////

function checkNotifCallT5done(){
        //must edit
        varTable5Call = false;
        //must edit

            console.log("varTable5Call");
            //must edit
            console.log(varTable5Call);
            //must edit


        localStorage.setItem("jsonCallStaffT5", JSON.stringify(varTable5Call));
                              //must edit                   //must edit                      

            console.log("varTable5Call");
                        //must edit
            console.log(varTable5Call);
                       //must edit  
          
}

            $(document).ready(function(){
                 $("#btn-T5-call").click(function(){  
                  //must edit
                          $("#btn-T5-call").removeClass("btn-danger");
                             //must edit 
                  });
            });


////////////////////////////////////


function checkNotifCallT6done(){
        //must edit
        varTable6Call = false;
        //must edit

            console.log("varTable6Call");
            //must edit
            console.log(varTable6Call);
            //must edit


        localStorage.setItem("jsonCallStaffT6", JSON.stringify(varTable6Call));
                              //must edit                   //must edit                      

            console.log("varTable6Call");
                        //must edit
            console.log(varTable6Call);
                       //must edit  
          
}

            $(document).ready(function(){
                 $("#btn-T6-call").click(function(){  
                  //must edit
                          $("#btn-T6-call").removeClass("btn-danger");
                             //must edit 
                  });
            });


////////////////////////////////////


































// can set setInterval instead of log
// setInterval(function(){ notifCallT1(); }, 3000);


// realtime ----------------------



function notifPayGetT1Func(){
              //must edit 20201213
                        if (varTable1PayGet === true){
                            //must edit 20201213     
                              $("#btn-T1").addClass("btn-warning");
                                //must edit 20201213

                        }
        
}

function notifPayGetT2Func(){
              //must edit 20201213
                        if (varTable2PayGet === true){
                            //must edit 20201213     
                              $("#btn-T2").addClass("btn-warning");
                                //must edit 20201213

                        }
        
}

function notifPayGetT3Func(){
              //must edit 20201213
                        if (varTable3PayGet === true){
                            //must edit 20201213     
                              $("#btn-T3").addClass("btn-warning");
                                //must edit 20201213

                        }
        
}

function notifPayGetT4Func(){
              //must edit 20201213
                        if (varTable4PayGet === true){
                            //must edit 20201213     
                              $("#btn-T4").addClass("btn-warning");
                                //must edit 20201213

                        }
        
}

function notifPayGetT5Func(){
              //must edit 20201213
                        if (varTable5PayGet === true){
                            //must edit 20201213     
                              $("#btn-T5").addClass("btn-warning");
                                //must edit 20201213

                        }
        
}

function notifPayGetT6Func(){
              //must edit 20201213
                        if (varTable6PayGet === true){
                            //must edit 20201213     
                              $("#btn-T6").addClass("btn-warning");
                                //must edit 20201213

                        }
        
}

// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------

function notifCallT1Func(){
              //must edit
                        if (varTable1Call === true){
                            //must edit      
                              $("#btn-T1-call").addClass("btn-danger");
                                //must edit

                        }
        
}

function notifCallT2Func(){
              //must edit
                        if (varTable2Call === true){
                            //must edit      
                              $("#btn-T2-call").addClass("btn-danger");
                                //must edit

                        }
        
}

function notifCallT3Func(){
              //must edit
                        if (varTable3Call === true){
                            //must edit      
                              $("#btn-T3-call").addClass("btn-danger");
                                //must edit

                        }
        
}

function notifCallT4Func(){
              //must edit
                        if (varTable4Call === true){
                            //must edit      
                              $("#btn-T4-call").addClass("btn-danger");
                                //must edit

                        }
        
}

function notifCallT5Func(){
              //must edit
                        if (varTable5Call === true){
                            //must edit      
                              $("#btn-T5-call").addClass("btn-danger");
                                //must edit

                        }
        
}

function notifCallT6Func(){
              //must edit
                        if (varTable6Call === true){
                            //must edit      
                              $("#btn-T6-call").addClass("btn-danger");
                                //must edit

                        }
        
}


   

var getPayGetT1Interval;
              //must edit 20201213
var getPayGetT2Interval;
var getPayGetT3Interval;
var getPayGetT4Interval;
var getPayGetT5Interval;
var getPayGetT6Interval;              

var notifPayGetT1Interval;
              //must edit 20201213
var notifPayGetT2Interval;
var notifPayGetT3Interval;
var notifPayGetT4Interval;
var notifPayGetT5Interval;
var notifPayGetT6Interval;


var getCallT1Interval;
              //must edit
var getCallT2Interval;
var getCallT3Interval;
var getCallT4Interval;
var getCallT5Interval;
var getCallT6Interval;              

var notifCallT1Interval;
              //must edit
var notifCallT2Interval;
var notifCallT3Interval;
var notifCallT4Interval;
var notifCallT5Interval;
var notifCallT6Interval;              


   function GetGInterval() {

        getPayGetT1Interval = setInterval(notifPayGetT1, 5000);
              //must edit 20201213             //must edit 20201213
        getPayGetT2Interval = setInterval(notifPayGetT2, 5000);
        getPayGetT3Interval = setInterval(notifPayGetT3, 5000);
        getPayGetT4Interval = setInterval(notifPayGetT4, 5000);
        getPayGetT5Interval = setInterval(notifPayGetT5, 5000);
        getPayGetT6Interval = setInterval(notifPayGetT6, 5000);  

      notifPayGetT1Interval = setInterval(notifPayGetT1Func, 5000);
              //must edit 20201213             //must edit 20201213
      notifPayGetT2Interval = setInterval(notifPayGetT2Func, 5000);
      notifPayGetT3Interval = setInterval(notifPayGetT3Func, 5000);
      notifPayGetT4Interval = setInterval(notifPayGetT4Func, 5000);
      notifPayGetT5Interval = setInterval(notifPayGetT5Func, 5000);
      notifPayGetT6Interval = setInterval(notifPayGetT6Func, 5000);      

        getCallT1Interval = setInterval(notifCallT1, 5000);
              //must edit                     //must edit
        getCallT2Interval = setInterval(notifCallT2, 5000);
        getCallT3Interval = setInterval(notifCallT3, 5000);
        getCallT4Interval = setInterval(notifCallT4, 5000);
        getCallT5Interval = setInterval(notifCallT5, 5000);
        getCallT6Interval = setInterval(notifCallT6, 5000);  

      notifCallT1Interval = setInterval(notifCallT1Func, 5000);
              //must edit                       //must edit
      notifCallT2Interval = setInterval(notifCallT2Func, 5000);
      notifCallT3Interval = setInterval(notifCallT3Func, 5000);
      notifCallT4Interval = setInterval(notifCallT4Func, 5000);
      notifCallT5Interval = setInterval(notifCallT5Func, 5000);
      notifCallT6Interval = setInterval(notifCallT6Func, 5000);      
   }

GetGInterval();

// realtime ----------------------
















// nofitication system

function logCheck() {
console.log("-----");
console.log("-----");

console.log("cashierListLenNow");
console.log(cashierListLenNow);

console.log("-----");

console.log("totalAmount");
console.log(totalAmount);


console.log("-----");

console.log("cashierBackList");
console.log(cashierBackList);


console.log("-----");

notifPayGetT1();
//must edit 20201213
checkNotifPayGetT1();
//must edit 20201213

notifPayGetT2();
checkNotifPayGetT2();

notifPayGetT3();
checkNotifPayGetT3();

notifPayGetT4();
checkNotifPayGetT4();

notifPayGetT5();
checkNotifPayGetT5();

notifPayGetT6();
checkNotifPayGetT6();


console.log("-----");

// <<<<< *** Mark all 6 table ***  

notifCallT1();
// must edit
checkNotifCallT1();
// must edit

console.log("varTable1Call");
                //must edit
console.log(varTable1Call);
                 //must edit 
                 
//  *** Mark all 6 table ***  >>>>>

notifCallT2();
// must edit
checkNotifCallT2();
// must edit

console.log("varTable2Call");
                //must edit
console.log(varTable2Call);
                 //must edit 

notifCallT3();
// must edit
checkNotifCallT3();
// must edit

console.log("varTable3Call");
                //must edit
console.log(varTable3Call);
                 //must edit 

notifCallT4();
// must edit
checkNotifCallT4();
// must edit

console.log("varTable4Call");
                //must edit
console.log(varTable4Call);
                 //must edit 

notifCallT5();
// must edit
checkNotifCallT5();
// must edit

console.log("varTable5Call");
                //must edit
console.log(varTable5Call);
                 //must edit 


notifCallT6();
// must edit
checkNotifCallT6();
// must edit

console.log("varTable6Call");
                //must edit
console.log(varTable6Call);
                 //must edit 

}

// nofitication system
























  // report 

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



// function cashierReport(){


//     for (var i = 0; i < cashierListLenNow;){          
                      
//                       // delete the first row of the main table
//                       document.getElementById("c-table-display").deleteRow(0);
//                       // have to -1 for cashierListLenNow because when the new order come
//                       cashierListLenNow--;
             
//                     }  

//     var cashierBackTable = document.getElementById("c-table-display");
//                 var cashierBackListLen = cashierBackList.length;

//     console.log(cashierBackListLen);


//                           var xRow = cashierBackTable.insertRow();
//                           var cell1 = xRow.insertCell(0);
//                           var cell2 = xRow.insertCell(1);
//                           var cell3 = xRow.insertCell(2);
//                           var cell4 = xRow.insertCell(3);
//                           var cell5 = xRow.insertCell(4);
//                           var cell6 = xRow.insertCell(5);
//                           cell1.innerHTML = "-";
//                           cell2.innerHTML = "-";
//                           cell3.innerHTML = "-";
//                           cell4.innerHTML = "-";
//                           cell5.innerHTML = "-";
//                           cell6.innerHTML = "-";

//                       var xRow = document.getElementById("c-table-display").rows[0].cells;
//                       xRow[0].innerHTML = "Other paid frequency";
//                       xRow[1].innerHTML = "Other paid amount";
//                       xRow[2].innerHTML = "Credit paid frequency";
//                       xRow[3].innerHTML = "Credit paid amount";
//                       xRow[4].innerHTML = "Cash paid frequency";
//                       xRow[5].innerHTML = "Cash paid amount";

//                       cashierListLenNow ++;

//                         var xRow = cashierBackTable.insertRow();
//                           var cell1 = xRow.insertCell(0);
//                           var cell2 = xRow.insertCell(1);
//                           var cell3 = xRow.insertCell(2);
//                           var cell4 = xRow.insertCell(3);
//                           var cell5 = xRow.insertCell(4);
//                           var cell6 = xRow.insertCell(5);
//                           cell1.innerHTML = "-";
//                           cell2.innerHTML = "-";
//                           cell3.innerHTML = "-";
//                           cell4.innerHTML = "-";
//                           cell5.innerHTML = "-";
//                           cell6.innerHTML = "-";

//                       var xRow = document.getElementById("c-table-display").rows[1].cells;
//                       xRow[0].innerHTML = countOtherPay;
//                       xRow[1].innerHTML = "¥ "+sumOtherPay;
//                       xRow[2].innerHTML = countCreditPay;
//                       xRow[3].innerHTML = "¥ "+sumCreditPay;
//                       xRow[4].innerHTML = countCashPay;
//                       xRow[5].innerHTML = "¥ "+sumCashPay;

//                       cashierListLenNow ++;


// var listOtherPayLen = listOtherPay.length;
// var listCreditPayLen = listCreditPay.length;
// var listCashPayLen = listCashPay.length;

// var timeListOtherPayLen = timeListOtherPay.length;
// var timeListCreditPayLen = timeListCreditPay.length;
// var timeListCashPayLen = timeListCashPay.length;

// var PayOptionListMaxLen = Math.max(listOtherPayLen, listCreditPayLen, listCashPayLen);
// console.log("PayOptionListMaxLen");
// console.log(PayOptionListMaxLen);
                      
//                           var xRow = cashierBackTable.insertRow();
//                           var cell1 = xRow.insertCell(0);
//                           var cell2 = xRow.insertCell(1);
//                           var cell3 = xRow.insertCell(2);
//                           var cell4 = xRow.insertCell(3);
//                           var cell5 = xRow.insertCell(4);
//                           var cell6 = xRow.insertCell(5);
//                           cell1.innerHTML = "-";
//                           cell2.innerHTML = "-";
//                           cell3.innerHTML = "-";
//                           cell4.innerHTML = "-";
//                           cell5.innerHTML = "-";
//                           cell6.innerHTML = "-";

//                       var xRow = document.getElementById("c-table-display").rows[2].cells;
//                       xRow[0].innerHTML = "Other paid time";
//                       xRow[1].innerHTML = "Other details";
//                       xRow[2].innerHTML = "Credit paid time";
//                       xRow[3].innerHTML = "Credit number";
//                       xRow[4].innerHTML = "Cash paid time";
//                       xRow[5].innerHTML = "Cash amount each";

//                       cashierListLenNow ++;

//                       for (var i = 0; i < PayOptionListMaxLen; i++){          
//                       var xRow = cashierBackTable.insertRow();
                          
//                           var cell1 = xRow.insertCell(0);
//                           var cell2 = xRow.insertCell(1);
//                           var cell3 = xRow.insertCell(2);
//                           var cell4 = xRow.insertCell(3);
//                           var cell5 = xRow.insertCell(4);
//                           var cell6 = xRow.insertCell(5);
//                           cell1.innerHTML = "-";
//                           cell2.innerHTML = "-";
//                           cell3.innerHTML = "-";
//                           cell4.innerHTML = "-";
//                           cell5.innerHTML = "-";
//                           cell6.innerHTML = "-";

//                       var xRow = document.getElementById("c-table-display").rows[cashierListLenNow].cells;
//                       xRow[0].innerHTML = timeListOtherPay[i];
//                       xRow[1].innerHTML = listOtherPay[i];
//                       xRow[2].innerHTML = timeListCreditPay[i];
//                       xRow[3].innerHTML = listCreditPay[i];
//                       xRow[4].innerHTML = timeListCashPay[i];
//                       xRow[5].innerHTML = "¥ "+listCashPay[i];

//                       cashierListLenNow ++;

//                     }


//                           var xRow = cashierBackTable.insertRow();
//                           var cell1 = xRow.insertCell(0);
//                           var cell2 = xRow.insertCell(1);
//                           var cell3 = xRow.insertCell(2);
//                           var cell4 = xRow.insertCell(3);
//                           var cell5 = xRow.insertCell(4);
//                           var cell6 = xRow.insertCell(5);
//                           cell1.innerHTML = "-";
//                           cell2.innerHTML = "-";
//                           cell3.innerHTML = "-";
//                           cell4.innerHTML = "-";
//                           cell5.innerHTML = "-";
//                           cell6.innerHTML = "-";

//                       var xRow = document.getElementById("c-table-display").rows[cashierListLenNow].cells;
//                       xRow[0].innerHTML = "NO";
//                       xRow[1].innerHTML = "MENU CODE";
//                       xRow[2].innerHTML = "MENU NAME";
//                       xRow[3].innerHTML = "TABLE NO.";
//                       xRow[4].innerHTML = "TAX";
//                       xRow[5].innerHTML = "NET PRICE";

//                       cashierListLenNow ++;


//                       for (var i = 0; i < cashierBackListLen; i++){          
//                       var xRow = cashierBackTable.insertRow();
                          
//                           var cell1 = xRow.insertCell(0);
//                           var cell2 = xRow.insertCell(1);
//                           var cell3 = xRow.insertCell(2);
//                           var cell4 = xRow.insertCell(3);
//                           var cell5 = xRow.insertCell(4);
//                           var cell6 = xRow.insertCell(5);
//                           cell1.innerHTML = "-";
//                           cell2.innerHTML = "-";
//                           cell3.innerHTML = "-";
//                           cell4.innerHTML = "-";
//                           cell5.innerHTML = "-";
//                           cell6.innerHTML = "-";

//                       var xRow = document.getElementById("c-table-display").rows[i+cashierListLenNow].cells;
//                       xRow[0].innerHTML = i+1;
//                       xRow[1].innerHTML = cashierBackList[i].menuListCode;
//                       xRow[2].innerHTML = cashierBackList[i].menuListName;
//                       xRow[3].innerHTML = cashierBackList[i].menuListTableNum;
//                       xRow[4].innerHTML = cashierBackList[i].menuListTax;
//                       xRow[5].innerHTML = "¥ "+cashierBackList[i].menuListNetPrice;

//                       totalAmount = totalAmount+cashierBackList[i].menuListNetPrice;
//                       console.log("totalAmount");
//                       console.log(totalAmount);
//                       document.getElementById("main-output").innerHTML = "¥ "+totalAmount;
                                            
//                     }  


// }



function exportTableToCSV(filename) {

    for (var i = 0; i < cashierListLenNow;){          
                      
                      // delete the first row of the main table
                      document.getElementById("c-table-display").deleteRow(0);
                      // have to -1 for cashierListLenNow because when the new order come
                      cashierListLenNow--;
             
                    }  

    var cashierBackTable = document.getElementById("c-table-display");
                var cashierBackListLen = cashierBackList.length;

    console.log(cashierBackListLen);

                      // c-head-table
                      var xRow = document.getElementById("c-head-table").rows[0].cells;
                      xRow[0].innerHTML = "-";
                      xRow[1].innerHTML = "-";
                      xRow[2].innerHTML = "-";
                      xRow[3].innerHTML = "-";
                      xRow[4].innerHTML = "-";
                      xRow[5].innerHTML = "-";
                      // c-head-table

                          var xRow = cashierBackTable.insertRow();
                          var cell1 = xRow.insertCell(0);
                          var cell2 = xRow.insertCell(1);
                          var cell3 = xRow.insertCell(2);
                          var cell4 = xRow.insertCell(3);
                          var cell5 = xRow.insertCell(4);
                          var cell6 = xRow.insertCell(5);
                          cell1.innerHTML = "-";
                          cell2.innerHTML = "-";
                          cell3.innerHTML = "-";
                          cell4.innerHTML = "-";
                          cell5.innerHTML = "-";
                          cell6.innerHTML = "-";

                      var xRow = document.getElementById("c-table-display").rows[0].cells;
                      xRow[0].innerHTML = "Other paid frequency";
                      xRow[1].innerHTML = "Other paid amount";
                      xRow[2].innerHTML = "Credit paid frequency";
                      xRow[3].innerHTML = "Credit paid amount";
                      xRow[4].innerHTML = "Cash paid frequency";
                      xRow[5].innerHTML = "Cash paid amount";

                      cashierListLenNow ++;

                        var xRow = cashierBackTable.insertRow();
                          var cell1 = xRow.insertCell(0);
                          var cell2 = xRow.insertCell(1);
                          var cell3 = xRow.insertCell(2);
                          var cell4 = xRow.insertCell(3);
                          var cell5 = xRow.insertCell(4);
                          var cell6 = xRow.insertCell(5);
                          cell1.innerHTML = "-";
                          cell2.innerHTML = "-";
                          cell3.innerHTML = "-";
                          cell4.innerHTML = "-";
                          cell5.innerHTML = "-";
                          cell6.innerHTML = "-";

                      var xRow = document.getElementById("c-table-display").rows[1].cells;
                      xRow[0].innerHTML = countOtherPay;
                      xRow[1].innerHTML = "¥ "+sumOtherPay;
                      xRow[2].innerHTML = countCreditPay;
                      xRow[3].innerHTML = "¥ "+sumCreditPay;
                      xRow[4].innerHTML = countCashPay;
                      xRow[5].innerHTML = "¥ "+sumCashPay;

                      cashierListLenNow ++;


var listOtherPayLen = listOtherPay.length;
var listCreditPayLen = listCreditPay.length;
var listCashPayLen = listCashPay.length;

var timeListOtherPayLen = timeListOtherPay.length;
var timeListCreditPayLen = timeListCreditPay.length;
var timeListCashPayLen = timeListCashPay.length;

var PayOptionListMaxLen = Math.max(listOtherPayLen, listCreditPayLen, listCashPayLen);
console.log("PayOptionListMaxLen");
console.log(PayOptionListMaxLen);
                      
                          var xRow = cashierBackTable.insertRow();
                          var cell1 = xRow.insertCell(0);
                          var cell2 = xRow.insertCell(1);
                          var cell3 = xRow.insertCell(2);
                          var cell4 = xRow.insertCell(3);
                          var cell5 = xRow.insertCell(4);
                          var cell6 = xRow.insertCell(5);
                          cell1.innerHTML = "-";
                          cell2.innerHTML = "-";
                          cell3.innerHTML = "-";
                          cell4.innerHTML = "-";
                          cell5.innerHTML = "-";
                          cell6.innerHTML = "-";

                      var xRow = document.getElementById("c-table-display").rows[2].cells;
                      xRow[0].innerHTML = "Other paid time";
                      xRow[1].innerHTML = "Other details";
                      xRow[2].innerHTML = "Credit paid time";
                      xRow[3].innerHTML = "Credit number";
                      xRow[4].innerHTML = "Cash paid time";
                      xRow[5].innerHTML = "Cash amount each";

                      cashierListLenNow ++;

                      for (var i = 0; i < PayOptionListMaxLen; i++){          
                      var xRow = cashierBackTable.insertRow();
                          
                          var cell1 = xRow.insertCell(0);
                          var cell2 = xRow.insertCell(1);
                          var cell3 = xRow.insertCell(2);
                          var cell4 = xRow.insertCell(3);
                          var cell5 = xRow.insertCell(4);
                          var cell6 = xRow.insertCell(5);
                          cell1.innerHTML = "-";
                          cell2.innerHTML = "-";
                          cell3.innerHTML = "-";
                          cell4.innerHTML = "-";
                          cell5.innerHTML = "-";
                          cell6.innerHTML = "-";

                      var xRow = document.getElementById("c-table-display").rows[cashierListLenNow].cells;
                      xRow[0].innerHTML = timeListOtherPay[i];
                      xRow[1].innerHTML = listOtherPay[i];
                      xRow[2].innerHTML = timeListCreditPay[i];
                      xRow[3].innerHTML = listCreditPay[i];
                      xRow[4].innerHTML = timeListCashPay[i];
                      xRow[5].innerHTML = "¥ "+listCashPay[i];

                      cashierListLenNow ++;

                    }


                          var xRow = cashierBackTable.insertRow();
                          var cell1 = xRow.insertCell(0);
                          var cell2 = xRow.insertCell(1);
                          var cell3 = xRow.insertCell(2);
                          var cell4 = xRow.insertCell(3);
                          var cell5 = xRow.insertCell(4);
                          var cell6 = xRow.insertCell(5);
                          cell1.innerHTML = "-";
                          cell2.innerHTML = "-";
                          cell3.innerHTML = "-";
                          cell4.innerHTML = "-";
                          cell5.innerHTML = "-";
                          cell6.innerHTML = "-";

                      var xRow = document.getElementById("c-table-display").rows[cashierListLenNow].cells;
                      xRow[0].innerHTML = "NO";
                      xRow[1].innerHTML = "MENU CODE";
                      xRow[2].innerHTML = "MENU NAME";
                      xRow[3].innerHTML = "TABLE NO.";
                      xRow[4].innerHTML = "TAX";
                      xRow[5].innerHTML = "NET PRICE";

                      cashierListLenNow ++;


                      for (var i = 0; i < cashierBackListLen; i++){          
                      var xRow = cashierBackTable.insertRow();
                          
                          var cell1 = xRow.insertCell(0);
                          var cell2 = xRow.insertCell(1);
                          var cell3 = xRow.insertCell(2);
                          var cell4 = xRow.insertCell(3);
                          var cell5 = xRow.insertCell(4);
                          var cell6 = xRow.insertCell(5);
                          cell1.innerHTML = "-";
                          cell2.innerHTML = "-";
                          cell3.innerHTML = "-";
                          cell4.innerHTML = "-";
                          cell5.innerHTML = "-";
                          cell6.innerHTML = "-";

                      var xRow = document.getElementById("c-table-display").rows[i+cashierListLenNow].cells;
                      xRow[0].innerHTML = i+1;
                      xRow[1].innerHTML = cashierBackList[i].menuListCode;
                      xRow[2].innerHTML = cashierBackList[i].menuListName;
                      xRow[3].innerHTML = cashierBackList[i].menuListTableNum;
                      xRow[4].innerHTML = cashierBackList[i].menuListTax;
                      xRow[5].innerHTML = "¥ "+cashierBackList[i].menuListNetPrice;



                      totalAmount = totalAmount+cashierBackList[i].menuListNetPrice;
                      console.log("totalAmount");
                      console.log(totalAmount);
                      document.getElementById("main-output").innerHTML = "¥ "+totalAmount;
                                            
                    }  




        // var cfmExportTableToCSV = window.confirm("Please confirm?");
        //     if (cfmExportTableToCSV) {    
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

             // }      


            // delete the first row of the main table

            // >>>>>>>>>>>>>>>>>>>>>>>>  i think it is ok now just re check !! 
            
            var cTableHtmlRowLenNow = document.getElementById("c-table-display").rows.length;
             for (var i = 0; i < cTableHtmlRowLenNow-1;){                            
                document.getElementById("c-table-display").deleteRow(0);
                cTableHtmlRowLenNow--;
              }  

             totalAmount = 0;

             console.log("totalAmount");
             console.log(totalAmount);

            console.log("cashierListLenNow not use for clear report table anymore");
            console.log(cashierListLenNow);

            console.log("cTableHtmlRowLenNow");
            console.log(cTableHtmlRowLenNow);

            cashierListLenNow = 0;

            console.log("cashierListLenNow");
            console.log(cashierListLenNow);

                      // c-head-table
                      var xRow = document.getElementById("c-head-table").rows[0].cells;
                      xRow[0].innerHTML = "NO";
                      xRow[1].innerHTML = "MENU CODE";
                      xRow[2].innerHTML = "MENU NAME";
                      xRow[3].innerHTML = "TABLE NO.";
                      xRow[4].innerHTML = "TAX";
                      xRow[5].innerHTML = "NET PRICE";
                      // c-head-table



}

  // report 
















































  






// CLOSE

// Clear Cashier Backup list just refresh

function cashierClear() {
  var cashierClearPass;

  // Get the value of the input field with id="kitchenClearPin"
  cashierClearPass = document.getElementById("cashierClearPin").value;
  console.log(cashierClearPass);
  // If x is Not a Number or less than one or greater than 10
        if (cashierClearPass === "1234") {
                
                    var cashierClearSure = window.confirm("Please confirm?\nよろしいですか？\nโปรดยืนยัน");
                      if (cashierClearSure) {
                        exportTableToCSV('CashierReportToday');
                        alert("All information has been cleared.\n情報がクリアされました。\n เคลียร์ข้อมูลเรียบร้อย");
                                
                          // <<<<< *** Mark all 6 table ***  
                        localStorage.setItem("kTable1Pay", null);
                                              //must edit (just copy here)
                        localStorage.setItem("kTable2Pay", null);
                        localStorage.setItem("kTable3Pay", null);
                        localStorage.setItem("kTable4Pay", null);
                        localStorage.setItem("kTable5Pay", null);
                        localStorage.setItem("kTable6Pay", null);
                        // this case duplicate here is ok 
                        //  *** Mark all 6 table ***  >>>>>


                        // <<<<< *** Mark all 6 table ***  
                        unlockT1();
                          // must edit just copy here
                        unlockT2();
                        unlockT3();
                        unlockT4();
                        unlockT5();
                        unlockT6();
                        // this case duplicate here is ok 
                        //  *** Mark all 6 table ***  >>>>>


                        totalAmount = 0;

                        location.reload();
                      }

        } else {
                alert("wrong password パスワードが間違っています");
          
        }
  
}

// Clear Cashier Backup list just refresh

  // CLOSE












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
