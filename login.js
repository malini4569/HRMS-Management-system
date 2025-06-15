document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "employee" && password === "1234") {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "applyLeave.html"; 
        
    } else {
        document.getElementById("message").innerText = "Invalid credentials. Try again.";
    }
});
