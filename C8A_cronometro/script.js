let n = 0;
let l = document.getElementById("number");

let cont = setInterval(function(){
    l.innerHTML = n++;
},1000);
 
function pararContador() {
    clearInterval(cont); 
}