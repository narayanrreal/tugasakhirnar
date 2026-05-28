document.addEventListener("DOMContentLoaded", function () {

    function goLogin() {
        window.location.href = "login/index.html";
    }

    function logout() {
        localStorage.removeItem("username");
        location.reload();
    }

    window.goLogin = goLogin;
    window.logout = logout;

    const user = localStorage.getItem("username");

    if (user) {

        document.getElementById("userInfo").innerText =
            "Halo, " + user;

        document.getElementById("authArea").innerHTML = `
            <button onclick="logout()" class="nav-cta">
                Logout
            </button>
        `;

    } else {

        document.getElementById("userInfo").innerText =
            "Belum login";

        document.getElementById("authArea").innerHTML = `
            <button onclick="goLogin()" class="nav-cta">
                Login
            </button>
        `;
    }

});