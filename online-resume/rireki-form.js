const scriptURL = 'https://script.google.com/macros/s/AKfycbxE74BS4NjYNX8aqIbTZGftMV_VcNasK3fsSqAYguzmTTBdu68mpXpEWg/exec'
const form = document.forms['google-sheet']

var langBase = {
                formTitle:["Contact Form","ご連絡フォーム","กรุณากรอกแบบฟอร์มเพื่อติดต่อ"] ,
                fillName:["Please fill your name","お名前","ชื่อ"] ,
                fillEmail:["Enter your email","差出人のメールアドレス","อีเมลล์แอดเดรส"] ,
                fillPhone:["Enter your phone number (Optional)","お電話番号（任意）","หมายเลขโทรศัพท์ (สามารถเว้นไว้ได้)"] ,
                fillMsg:["Please leave your message","内容","โปรดกรอกข้อความ"] ,
                submitBTN:["Submit","送信","ส่งข้อความ"] ,
                submitALT:["Thank you for contacting!\n I will reply to your email soon.",
                          "ご連絡いただきありがとうございます。\n後ほど、ご返信をさせていただきます。\n今しばらくお待ちくださいますよう宜しくお願い申し上げます。",
                          "ขอบคุณสําหรับการติดต่อ\nทันทีที่ได้อ่านข้อความจะรีบติดต่อกลับไปครับ"]
              };

var langNow = {
                formTitle:["Contact Form","1","2"] ,
                fillName:["Please fill your name","1","2"] ,
                fillEmail:["Enter your email","1","2"] ,
                fillPhone:["Enter your phone number (Optional)","1","2"] ,
                fillMsg:["Please leave your message","1","2"] ,
                submitBTN:["Submit","JP",""] ,
                submitALT:["Thank you for contacting\n I will reply to your email soon.","1","2"] 
              };



function langEn() {

          langNow.formTitle[0] = langBase.formTitle[0];
          langNow.fillName[0] = langBase.fillName[0];
          langNow.fillEmail[0] = langBase.fillEmail[0];
          langNow.fillPhone[0] = langBase.fillPhone[0];
          langNow.fillMsg[0] = langBase.fillMsg[0];
          langNow.submitBTN[0] = langBase.submitBTN[0];
          langNow.submitALT[0] = langBase.submitALT[0];
          
          document.getElementById("formTitle").innerHTML = langNow.formTitle[0];
          document.getElementById("placeName").placeholder = langNow.fillName[0];
          document.getElementById("placeEmail").placeholder = langNow.fillEmail[0];
          document.getElementById("placePhone").placeholder = langNow.fillPhone[0];
          document.getElementById("placeMsg").placeholder = langNow.fillMsg[0];
          document.getElementById("submitBTN").innerHTML = langNow.submitBTN[0];
}
            

function langJp() {

  langNow.formTitle[0] = langBase.formTitle[1];
  langNow.fillName[0] = langBase.fillName[1];
  langNow.fillEmail[0] = langBase.fillEmail[1];
  langNow.fillPhone[0] = langBase.fillPhone[1];
  langNow.fillMsg[0] = langBase.fillMsg[1];
  langNow.submitBTN[0] = langBase.submitBTN[1];
  langNow.submitALT[0] = langBase.submitALT[1];
  
  document.getElementById("formTitle").innerHTML = langNow.formTitle[0];
  document.getElementById("placeName").placeholder = langNow.fillName[0];
  document.getElementById("placeEmail").placeholder = langNow.fillEmail[0];
  document.getElementById("placePhone").placeholder = langNow.fillPhone[0];
  document.getElementById("placeMsg").placeholder = langNow.fillMsg[0];
  document.getElementById("submitBTN").innerHTML = langNow.submitBTN[0];
}


function langTh() {

  langNow.formTitle[0] = langBase.formTitle[2];
  langNow.fillName[0] = langBase.fillName[2];
  langNow.fillEmail[0] = langBase.fillEmail[2];
  langNow.fillPhone[0] = langBase.fillPhone[2];
  langNow.fillMsg[0] = langBase.fillMsg[2];
  langNow.submitBTN[0] = langBase.submitBTN[2];
  langNow.submitALT[0] = langBase.submitALT[2];
  
  document.getElementById("formTitle").innerHTML = langNow.formTitle[0];
  document.getElementById("placeName").placeholder = langNow.fillName[0];
  document.getElementById("placeEmail").placeholder = langNow.fillEmail[0];
  document.getElementById("placePhone").placeholder = langNow.fillPhone[0];
  document.getElementById("placeMsg").placeholder = langNow.fillMsg[0];
  document.getElementById("submitBTN").innerHTML = langNow.submitBTN[0];
}



form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert([langNow.submitALT[0]]))
    .catch(error => console.error('Error!', error.message))
})

function thisTableStartOver() {

  
  
  setTimeout(function() { 
    location.reload();
  }, 5000);


}