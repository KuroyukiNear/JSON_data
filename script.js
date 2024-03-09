function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "notadmin") {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

// Yes I know that you can see the password