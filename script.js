function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var link = document.querySelector("#link");
    if (username == "" || password == "") {
      alert("Please enter both username and password.");
    } else if (username == "1" && password == "2") {
      alert("Login successful!");
      link.href = "info.html"; // change this to the URL of your success page
    } else {
      alert("Incorrect username or password.");
    }
  }
  