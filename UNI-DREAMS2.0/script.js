let UserRank='';

let popupMain= document.querySelector('#popup');
function getInput(){
   UserRank=document.querySelector('#search').value ;
  Checker();
}
function Checker(){
  
  if (UserRank> 0 && UserRank < 10000){
    let newHTML='';
    newHTML=`
    
   
    <div id="Results">
  
    <div class="color" id="one">OSMANIA UNIVERSITY</div> 
    <br>
    <div class="color" id="two">JNTUH</div> 
    <div class="color" id="three">CBIT</div> 
    </div>

    
  
    
    
    

    `
    document.querySelector('#details').innerHTML=newHTML;
  }
  else if (UserRank>=10000 && UserRank<20000) {
    let newHTML='';
    newHTML=`
    <div id="Results">
  
    <div class="color"id="three" >MJ</div> 
    <br>
    <div class="color" id="one">DECCAN</div> 
    <div class="color" id="two">LORDS</div> 
  
    </div>
  
    
    `
    document.querySelector('#details').innerHTML=newHTML;
  } 
  else if (UserRank>=20000 && UserRank<30000){
    let newHTML='';
    newHTML=`
    <div id="Results">
  
    <div class="color" id="three">NSAKCET</div> 
    <br>
    <div class="color" id="two">SHADAN</div> 
    <div class="color" id="one">MUMTAZ</div> 
  
    </div>
    
    `
    document.querySelector('#details').innerHTML=newHTML;

  }
  else if (UserRank>=30000 && UserRank<40000){
    let newHTML='';
    newHTML=`
    <div id="Results">
  
    <div class="color">DECCAN</div> 
    <br>
    <div class="color">XYZ</div> 
    <div class="color">XYZ</div> 
  
    </div>
    
    `
    document.querySelector('#details').innerHTML=newHTML;

  }
  else{
    let newHTML='';
    newHTML=`
    <div id="Results">NO COLLEGES UNDER OUR RESEARCH</div>
    
    `
    document.querySelector('#details').innerHTML=newHTML;

  }
}

let riseup= document.getElementById("riseup");
function openRiseup() {
riseup.classList.add("open-riseup");
}
//LOGIC BUILDING ROUND 3 FIGHT!!
function preferencesport(){
  let first = document.querySelector('#one').innerHTML;
 
  if (first==="OSMANIA UNIVERSITY"){
    window.open("http://127.0.0.1:5500/osmania.html")
  

  }
  else if (first==="DECCAN"){
    window.open("http://127.0.0.1:5500/deccan.html")

  }
  else {
    window.open("http://127.0.0.1:5500/mumtaz.html")

  }

  
  
}
function preferenceplacement(){
  let third = document.querySelector('#three').innerHTML;
 
  if (third==="CBIT"){
    window.open("http://127.0.0.1:5500/CBIT.HTML")
  

  }
  else if (third==="MJ"){
    window.open("http://127.0.0.1:5500/Mj.html")

  }
  else {
    window.open("http://127.0.0.1:5501/nawab.html")

  }
  

  
  
}

function preferencecampus(){
  let second = document.querySelector('#two').innerHTML;
 
  if (second==="JNTUH"){
    window.open("http://127.0.0.1:5500/jnthuh.html")
  

  }
  else if (second==="LORDS"){
    window.open("http://127.0.0.1:5500/lords.html")

  }
  else {
    window.open("http://127.0.0.1:5500/shadan.html")

  }
  

  
  
}
  
   
  
  
  
 
  

let popup=document.getElementById("popup");
function openPopup(){
  popup.classList.add("open-popup")
}
function closePopup(){
  popup.classList.remove("open-popup");
}
function filterHide(){
  let visibility=document.querySelector('.newfilter');
  visibility.classList.add("filtervisible")
}

