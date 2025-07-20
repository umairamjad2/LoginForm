document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("loginBtn");

  loginBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      alert("Please fill in both fields.");
      return;
    }

    // Store data in localStorage
    localStorage.setItem("loginUsername", username);
    localStorage.setItem("loginPassword", password);

    alert(`Login Successful!\nUsername: ${username}`);
  });
});
