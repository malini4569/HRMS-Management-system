document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;
    localStorage.setItem(username, JSON.stringify({ username, password }));
    document.getElementById("registerMessage").innerText = "Registration successful!";
    window.location.href = "index.html"; 
});