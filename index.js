const mynumber = document.getElementById("mynumber");
const celTofaren = document.getElementById("celTofaren");
const farTocel = document.getElementById("farTocel");
const mysubmir = document.getElementById("mysubmit");
const result = document.getElementById("result");
const mycancel =document.getElementById("mycancel");

let tmp ;
mysubmit.onclick = function (){
    if (celTofaren.checked){
        tmp=Number(mynumber.value);
        result.textContent = tmp * 9/5 +32 +"°F";
         }
         else if(farTocel.checked){
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
    celTofaren.checked =false;
    farTocel.checked =false;
    console.log(result.textContent);

}



