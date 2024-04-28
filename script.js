document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificar se o username e a senha correspondem
    if (username === "usuario" && password === "senha") {
        alert("Login bem-sucedido!");
        // Aqui você pode redirecionar o usuário para outra página
    } else {
        document.getElementById("error-msg").textContent = "Username ou senha incorretos.";
    }
});
