// JavaScript File
$(document).ready(function () {
  // All code goes here
   var password = "password";
   


   
 
$("#life").click(function() {
    if(password === $("#password").val()){
        alert("Congratulation!");
        $("h1").hide();
    }
    else{
        alert("WRONG");
    }
});
});