// Store the wallet amount to your local storage with key "amount"


var t=JSON.parse(localStorage.getItem("wallet"));


document.getElementById("wallet").innerText=t;
function money(){
    let money1=document.getElementById("input").value;
    
   localStorage.setItem("wallet",JSON.stringify(money1))
  
}
 

function debouncing(func,dealy){
    let set=setTimeout(function(){
        func()
    },dealy)
 
}
function main(){
    money()
}