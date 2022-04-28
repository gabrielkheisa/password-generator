var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
var timer = 0;
var valueof_output;
var dddd;
var time_hash;
var hash_output;

timeout();

function copas() {

  /* Get the text field */
  copyText = document.getElementById("output");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  
}

function getVal_output() {
  valueof_output = String(document.getElementById('output').value);
}

function temptobar(temp){
  document.getElementById("bar-temp").style.width = String(5*temp/3 + 50/3) + "%";
}

function timeout() {
    setTimeout(function () {

    document.getElementById("bar-temp").style.width = String(timer) + "%";
    
    if(timer <= 20){
    document.getElementById("bar-temp").style.backgroundColor = "red";
    }
    else{
    document.getElementById("bar-temp").style.backgroundColor = "DodgerBlue";
    }
    timer = timer - 5;
    if(timer <= 0) {
    timer = 100;
    dddd = new Date();
    time_hash = dddd.getTime();
    hash_output = String(CryptoJS.AES.encrypt(String(parseInt(Math.random()*1000000)), String(time_hash)));
    document.getElementById("output").value = hash_output.slice(-14,-1);
    }
        timeout();
    }, 500);
}