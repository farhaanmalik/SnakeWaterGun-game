let showInp = document.getElementById("showIp");
let showthis = document.getElementById("result");
let btn = document.getElementById("btn");
let restart = document.getElementById("restart");

let computer = Math.floor(Math.random() * 3);
let cpu = ["S", "W", "G"][computer];

btn.addEventListener("click", function () {
    let user = document.getElementById("user-input").value;
    user = user.toUpperCase();

    
    if (user == "") {
        alert("Please write S, W or G");
    }
    else if (cpu === user) {
        showthis.innerHTML = `<b style="color: darkgrey;">Computer: ${cpu} <br> User: ${user}</b><br><br>Nobody ! Try again`;
        showthis.style.color = "red";
        restart.style.display = "block";

    }
    else if (cpu === "S" && user === "W") {
        showthis.innerHTML = `<b style="color: darkgrey;">Computer: ${cpu} <br> User: ${user}</b><br><br>Computer win`;
        showthis.style.color = "red";
        restart.style.display = "block";

    }
    else if (cpu === "S" && user === "G") {
        showthis.innerHTML = `<b style="color: darkgrey;">Computer: ${cpu} <br> User: ${user}</b><br><br>You win`;
        showthis.style.color = "green";
        restart.style.display = "block";

    }
    else if (cpu === "W" && user === "G") {
        showthis.innerHTML = `<b style="color: darkgrey;">Computer: ${cpu} <br> User: ${user}</b><br><br>Computer win`;
        showthis.style.color = "red";
        restart.style.display = "block";

    }
    else if (cpu === "W" && user === "S") {
        showthis.innerHTML = `<b style="color: darkgrey;">Computer: ${cpu} <br> User: ${user}</b><br><br>You win`;
        showthis.style.color = "green";
        restart.style.display = "block";

    }
    else if (cpu === "G" && user === "W") {
        showthis.innerHTML = `<b style="color: darkgrey;">Computer: ${cpu} <br> User: ${user}</b><br><br>You win`;
        showthis.style.color = "green";
        restart.style.display = "block";

    }
    else if (cpu === "G" && user === "S") {
        showthis.innerHTML = `<b style="color: darkgrey;">Computer: ${cpu} <br> User: ${user}</b><br><br>Computer win`;
        showthis.style.color = "red";
        restart.style.display = "block";

    }
    else {
        restart.style.display = "none";
    }
})

restart.addEventListener("click", function () {
    window.location.href = "index.html";
})
