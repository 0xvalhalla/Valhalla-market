document.addEventListener("DOMContentLoaded", function () {
  const connectBtn = document.getElementById("connectBtn");
  const walletStatus = document.getElementById("walletStatus");

  if (connectBtn) {
    connectBtn.addEventListener("click", () => {
      // Simulasi connect wallet
      walletStatus.classList.remove("hidden");
      connectBtn.style.display = "none";

      alert("Wallet Successfully Connected!");

      // Redirect ke halaman dashboard
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1500);
    });
  }
});
