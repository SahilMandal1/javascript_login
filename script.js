function visitHomePage() {
    var username = document.getElementById("uname").value;
    var password = document.getElementById("password").value;
    
    if(username == "Nagma" && password == 12345) {
        location.replace("home.html");
    } else {
        alert("Wrong Password!");
    }
}