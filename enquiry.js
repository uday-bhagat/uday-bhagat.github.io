function validateForm(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let country=document.getElementById("country").value;

if(name=="" || email=="" || country==""){
alert("Please fill all fields");
return false;
}

alert("Thank you for your enquiry!");
return true;

}
