
    var nickname = "Marckie"
    var height = 67
    var height1 = (height % 12) 
    var height2 = (height - height % 12) /12 
    var weight = 58
    var weight1 = (weight*2.205)
  alert("Name: " + nickname + "\nHeight: " + height2 + "'" + height1 + "\"" + "\nWeight: " + weight1)

var firstname = prompt("What is your first name?");
var lastname = prompt("What is your last name?");
var birthyear = parseInt(prompt("What is your birth year?"));

document.getElementById("latigo").innerHTML ="Hello " + firstname +" "+ lastname + "!" + " How does it feel to be " + String(2025 - birthyear) + " years old?";

var consent = confirm("Do you agree to share your personal information?");
if (consent){
    console.log("Name: " + nickname + "\nHeight: " + height2 + "'" + height1 + "\"" + "\nWeight: " + weight1)
}
else{
    console.log("User does not wish to share his/her information.")
}
