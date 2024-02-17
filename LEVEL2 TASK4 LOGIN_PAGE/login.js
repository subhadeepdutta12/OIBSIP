function auth(event) {
    event.preventDefault();

    var email = document.getElementById("gmail").value;
    var password = document.getElementById("passkey").value;

    if (email === "admin@gmail.com" && password === "user") {
        window.location.replace("/secure_page.html");
    } else {
        alert("Invalid information");
        return;
    }
}

let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("passkey");

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        
    }else{
        password.type = "password";
        
    }
}
