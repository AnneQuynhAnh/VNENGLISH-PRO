document.addEventListener("DOMContentLoaded", () => {
  // Volume slider update
  const volumeSlider = document.getElementById("volume");
  const volumeValue = document.getElementById("volume-value");

  volumeSlider.addEventListener("input", () => {
    volumeValue.textContent = volumeSlider.value;
  });

  // Save button functionality
  const saveButton = document.getElementById("save-button");

  saveButton.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const gmail = document.getElementById("gmail").value;
    const volume = volumeSlider.value;
    const goals = document.getElementById("set-goals").value;
    const level = document.getElementById("choose-levels").value;

    alert(`
        Changes Saved!
        Username: ${username}
        Gmail: ${gmail}
        Volume: ${volume}%
        Goals: ${goals} words/day
        Level: ${level}
      `);
  });
});
