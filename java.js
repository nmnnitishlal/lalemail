let name2=document.getElementById("name")
let name1=document.getElementById("name1")
let error=document.getElementById("error")
document.getElementById("name1").onkeyup=errormsg
function errormsg(){
if(!name1.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
   error.innerHTML="Please Enter an Email Address"
   name1.style.borderBottomColor="red"
   return false;
}
    error.innerHTML=""
    name1.style.borderBottomColor="purple"
    return true;
}