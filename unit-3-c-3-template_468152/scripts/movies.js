// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
var t=JSON.parse(localStorage.getItem("wallet"));
console.log("t",t)
document.getElementById("wallet").innerText=t;

async function movie(){
     
    try{

        let inp=document.getElementById("search").value;
        let url=`https://www.omdbapi.com/?s=${inp}&apikey=3b38cc5e`


        console.log("url",url)
 
        let res=await fetch(url);
    
        let data =await res.json();
        console.log("data",data)

        append(data.Search)
    }
    catch(error){
        console.log("error",error)
    }

}


var m=document.getElementById("movies");
function append(data){

    data.map(function(el){
        console.log("data1",data)
        let div =document.createElement("div");
    
    
        let img =document.createElement("img");
        img.src=el.Poster;
    
        let p =document.createElement("p");
        p.innerText=el.Title;

        
    
        let p1=document.createElement("button");
          p1="book now"
     
       
        div.append(img,p,p1);
        div.addEventListener("click",function(){
            jay(el)
        })
        m.append(div)

    })

   
}


function jay(el){
   
console.log("movie",el)
localStorage.setItem("movies",JSON.stringify(el));
window.location.href="checkout.html"

}