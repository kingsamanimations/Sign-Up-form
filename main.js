// Check if password and confirm password match
const password = document.getElementById("user_password");
const confirmpassword = document.getElementById("confirm_password");

confirmpassword.addEventListener("change", () => {
    if (password.value !== confirmpassword.value) {
        confirmpassword.setCustomValidity("Passwords do not match!");
    } else {
        confirmpassword.setCustomValidity("");
    }
});