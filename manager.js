window.onload = function() {
    const approvalList = document.getElementById("approvalList");
    let output = "";
    for (let key in localStorage) {
        if (key.endsWith("_leaves")) {
            const leaves = JSON.parse(localStorage.getItem(key));
            leaves.forEach((leave, index) => {
                output += `<div>
                    <p><b>User:</b> ${key.split("_leaves")[0]}</p>
                    <p><b>Type:</b> ${leave.type}</p>
                    <p><b>From:</b> ${leave.start} To ${leave.end}</p>
                    <p><b>Reason:</b> ${leave.reason}</p>
                    <p><b>Status:</b> ${leave.status}</p>
                    <button onclick="updateStatus('${key}', ${index}, 'Approved')">Approve</button>
                    <button onclick="updateStatus('${key}', ${index}, 'Rejected')">Reject</button>
                    <hr></div>`;
            });
        }
    }
    approvalList.innerHTML = output;
};

function updateStatus(key, index, status) {
    const leaves = JSON.parse(localStorage.getItem(key));
    leaves[index].status = status;
    localStorage.setItem(key, JSON.stringify(leaves));
    location.reload();
}