document.getElementById("leaveForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const leave = {
        type: document.getElementById("leaveType").value,
        start: document.getElementById("startDate").value,
        end: document.getElementById("endDate").value,
        reason: document.getElementById("reason").value,
        status: "Pending"
    };
    let leaves = JSON.parse(localStorage.getItem("leaves")) || [];
    const user = localStorage.getItem("loggedInUser");
    const userLeaves = JSON.parse(localStorage.getItem(user + "_leaves")) || [];
    userLeaves.push(leave);
    localStorage.setItem(user + "_leaves", JSON.stringify(userLeaves));
    localStorage.setItem("leaves", JSON.stringify(leaves));
    document.getElementById("leaveMessage").innerText = "Leave applied!";
    window.location.href = "index.html";
    

});