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