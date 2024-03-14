function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Hash the password using CryptoJS
    var hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
  
    if (username === "admin" && hashedPassword === "44b68f9bd1c1569c13c9938c2cc7189c4bbe433c0e08f1042e49eedf5b4b1b6b") {
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  }
  