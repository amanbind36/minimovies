// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
var t=JSON.parse(localStorage.getItem("wallet"));
console.log("t",t)
document.getElementById("wallet").innerText=t;


var t1=JSON.parse(localStorage.getItem("movies"));
console.log("t",t1)

let div=document.createElement("div")

let img=document.createElement("img")
img.src=t1.Poster;

let img1=document.createElement("p")
img1.src=t1.Title;
div.append(img,img1)

document.getElementById("movie").append(div)

function book(){
    let seat=document.getElementById("number_of_seats").value;
    let t3=seat*100;

    if(t3>t){
        alert("Insufficient Balance !")
    }
    else{
        alert("Booking Successful!");
       t= t-t3;
       document.getElementById("wallet").innerText=t
    }
    console.log("t3",t3)
}

