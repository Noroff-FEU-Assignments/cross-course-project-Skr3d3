function setupBackButton() {
    const backButton = document.getElementById("goback");
    backButton.addEventListener("click", function() {
      window.location.href = "/"
    });};
    setupBackButton();