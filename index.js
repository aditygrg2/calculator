var calculate = 0;
var signInput = '+';
var val1 = 0;
var val2 = 0;
var sideSign = document.getElementById('sign');
var inputBox = document.getElementById('input');
var active = false;
console.log(inputBox.innerText);
document.getElementById('/').addEventListener('click',function(){
    sideSign.innerText = "/";
    val2=1;
    if(parseFloat(val1)===0){
        val1 = inputBox.innerText;
        inputBox.innerText = null;
        val1 = parseFloat(val1);
        active = false;
    }

    else{
        if(inputBox.innerText!== ""){
            val2 = inputBox.innerText;
            inputBox.innerText = null;
            val1 = parseFloat(val1);
            val1 /= parseFloat(val2);
            val2 = 1;
        }
        else{
            val2=1;
            val1 = parseFloat(val1);
            val1 /= parseFloat(val2);
        }
        active = false;
    }
})

document.getElementById('+/-').addEventListener('click',function(){
    inputBox.innerText *= -1;
})

var multiply = document.getElementById('*').addEventListener('click',function(){
    sideSign.innerText = "*";
    if(parseFloat(val1)===0){
        val1 = inputBox.innerText;
        inputBox.innerText = null;
        val1 = parseFloat(val1);
        active = false;
    }

    else{
        if(inputBox.innerText!== ""){
            val2 = inputBox.innerText;
            inputBox.innerText = null;
            val1 = parseFloat(val1);
            val1 *= parseFloat(val2);
            val2 = 0;
        }
        else{
            val2=1;
            val1 = parseFloat(val1);
            val1 *= parseFloat(val2);
        }
        active = false;
    }
})
document.getElementById('add').addEventListener('click',function(){
    sideSign.innerText = "+";
    if(parseFloat(val1)===0){
        val1 = inputBox.innerText;
        inputBox.innerText = null;
        val1 = parseFloat(val1);
        active = false;
    }

    else{
        if(inputBox.innerText!== ""){
            val2 = inputBox.innerText;
            inputBox.innerText = null;
            val1 = parseFloat(val1);
            val1 += parseFloat(val2);
            val2 = 0;
        }
        else{
            val2=0;
            val1 = parseFloat(val1);
            val1 += parseFloat(val2);
        }
        active = false;
    }
})
document.getElementById('-').addEventListener('click',function(){
    sideSign.innerText = "-";
    if(parseFloat(val1)===0){
        val1 = inputBox.innerText;
        inputBox.innerText = null;
        val1 = parseFloat(val1);
        active = false;
    }

    else{

        // double dashes are not equal to none!
        if(inputBox.innerText!== ""){
            val2 = inputBox.innerText;
            inputBox.innerText = null;
            val1 = parseFloat(val1);
            val1 -= parseFloat(val2);
            val2 = 0;
        }
        else{
            val2=0;
            val1 = parseFloat(val1);
            val1 -= parseFloat(val2);
        }
        active = false;
    }
})
var equal = document.getElementById('=').addEventListener('click',function(){
    if(active===true){
        document.getElementById('errorzone').innerText = "Already pressed =";
    }
    else{
    active = true;
    val2 = inputBox.innerText;
    inputBox.innerText = null;
    val2 = parseFloat(val2);
    val1 = eval(val1+sideSign.innerText+val2);
    inputBox.innerText = parseFloat(val1);
    val1 = 0;
    sideSign.innerText = "=";
    document.getElementById('errorzone').innerText = "Aditya's Calculator";
    }
})
document.getElementById('%').addEventListener('click',function(){
    sideSign.innerText = "%";
    if(parseFloat(val1)===0){
        val1 = inputBox.innerText;
        inputBox.innerText = null;
        val1 = parseFloat(val1);
        active = false;
    }

    else{
        if(inputBox.innerText!== ""){
            val2 = inputBox.innerText;
            inputBox.innerText = null;
            val1 = parseFloat(val1);
            val1 %= parseFloat(val2);
            val2 = 1;
        }
        else{
            val2=1;
            val1 = parseFloat(val1);
            val1 %= parseFloat(val2);
        }
        active = false;
    }
})

document.getElementById('1').addEventListener('click',function(){
      inputBox.innerText += 1;  
})
document.getElementById('2').addEventListener('click',function(){
    inputBox.innerText += 2;
})
document.getElementById('3').addEventListener('click',function(){
    inputBox.innerText += 3;
})
document.getElementById('4').addEventListener('click',function(){
    inputBox.innerText += 4;
})
document.getElementById('5').addEventListener('click',function(){
    inputBox.innerText += 5;
})
document.getElementById('6').addEventListener('click',function(){
    inputBox.innerText += 6;
})
document.getElementById('7').addEventListener('click',function(){
    inputBox.innerText += 7;
})
document.getElementById('8').addEventListener('click',function(){
    inputBox.innerText += 8;
})
document.getElementById('9').addEventListener('click',function(){
    inputBox.innerText += 9;
})
document.getElementById('.').addEventListener('click',function(){
    inputBox.innerText += ".";
})
document.getElementById('0').addEventListener('click',function(){
    inputBox.innerText += 0;
})
var AC = document.getElementById('AC').addEventListener('click',function(){
    inputBox.innerText = "";
    sideSign.innerHTML= "";
})
