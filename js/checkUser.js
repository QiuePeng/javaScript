document.getElementById("name").addEventListener("blur", checkName);
document.getElementById("pwd").addEventListener("blur", checkPwd);
document.getElementById("date").addEventListener("blur", checkDate);


function checkName() {
    let theName = document.getElementById("name");
    let theNameVal = theName.value;
    let theNameLen = theNameVal.length;
    let namesp = document.getElementById("namesp");
    let re = /^[\u4E00-\u9FFF]{2,}/;

    if(theNameVal=="") {
        namesp.innerHTML="<img src='/images/error.png' alt=''>you must enter";
        
    }
    else if(theNameLen<2) {
        namesp.innerHTML="<img src='/images/error.png' alt=''>請輸入至少 2 個字元";
    }
    else if(re.test(theNameVal)) {
        namesp.innerHTML="<span class='nsp' style='color:#42b61f'>輸入正確</span>";
    }
    else {
        namesp.innerHTML="<img src='/images/error.png' alt=''>輸入錯誤";
    }
}

function checkPwd() {
    let thePwd = document.getElementById("pwd");
    let thePwdVal = thePwd.value;
    let thePwdLen = thePwdVal.length;
    let pwdsp = document.getElementById("pwdsp");
    let re = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z\d!@#$%^&*]{6,}$/;

    if(thePwdVal =="") {
        pwdsp.innerHTML="<img src='/images/error.png' alt=''>you must enter";
    }
    else if(thePwdLen<6) {
        pwdsp.innerHTML="<img src='/images/error.png' alt=''>請輸入至少 6 個字元";
    }
    else if(re.test(thePwdVal)) {
        pwdsp.innerHTML="<span class='psp' style='color:#42b61f' >輸入正確</span>";
    }
    else {
        pwdsp.innerHTML="<img src='/images/error.png' alt=''>輸入錯誤";
    }

}

function checkDate() {
    let theDate = document.getElementById("date");
    let theDateVal = theDate.value;
    let datesp = document.getElementById("datesp");
    let re = /^([0-9]{4})[/](0?[1-9]|1[012])[/](0[1-9]|[12][0-9]|3[01])$/;

    if(theDateVal=="") {
        datesp.innerHTML="<img src='/images/error.png' alt=''>you must enter";
    }
    else if(re.test(theDateVal)) {
        datesp.innerHTML="<span class='psp' style='color:#42b61f' >輸入正確</span>";
    }
    else {
        datesp.innerHTML="<img src='/images/error.png' alt=''>輸入格式錯誤";
    }
}