document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const successMessage = document.getElementById("successMessage");

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // In real use, send data to the server here.
    successMessage.classList.remove("hidden");
    this.reset();
});
