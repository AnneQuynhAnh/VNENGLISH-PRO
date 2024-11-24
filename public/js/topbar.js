// Select the <body> element
document.addEventListener("DOMContentLoaded", () => {
  // Fetch the topbar HTML template
  fetch("../html/topbar.html")
    .then((response) => {
      if (!response.ok) throw new Error("Failed to load the topbar template.");
      return response.text();
    })
    .then((html) => {
      // Inject the topbar HTML at the top of the <body>
      document.body.insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => console.error(error));
});
