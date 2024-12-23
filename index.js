const mynumber = document.getElementById("mynumber");
const celToFaren = document.getElementById("celToFaren");
const farToCel = document.getElementById("farToCel");
const button = document.getElementById("button");
const result = document.getElementById("result");
const mycancel =document.getElementById("mycancel");

let tmp ;
button.onclick = function (){
    if (celToFaren.checked){
        tmp=Number(mynumber.value);
        result.textContent = tmp * 9/5 +32 +"°F";
         }
         else if(farToCel.checked){
            tmp=Number(mynumber.value);
            result.textContent = tmp/9 * 5 -32 + "°C";
         }
         else {
            result.textContent = "please select one!";
         }
         console.log(result.textContent);
        
}
mycancel.onclick = function(){
    result.textContent = 0;
    mynumber.value= "";
    celToFaren.checked =false;
    farToCel.checked =false;
    console.log(result.textContent);

}



