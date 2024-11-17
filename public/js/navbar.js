document.addEventListener("DOMContentLoaded", function () {
  // Define the navbar HTML
  const navbarHTML = `
      <div class="bottom-nav">
        <div class="nav-item" id="chatbot">
          <a href="chatbot.html" aria-label="Chatbot">
            <img
              src="../assets/icons/white/Icons-VnEng_chatboticon.png"
              alt="Chatbot Icon"
            />
          </a>
        </div>
        <div class="nav-item" id="notebook">
          <a href="notebook.html" aria-label="Notebook">
            <img
              src="../assets/icons/white/Icons-VnEng_notebookicon.png"
              alt="Notebook Icon"
            />
          </a>
        </div>
        <div class="nav-item" id="homepage">
          <a href="home.html" aria-label="Home">
            <img
              src="../assets/icons/white/Icons-VnEng_homeicon.png"
              alt="Home Icon"
            />
          </a>
        </div>
        <div class="nav-item" id="progress">
          <a href="progress.html" aria-label="Progress">
            <img
              src="../assets/icons/white/Icons-VnEng_progressicon.png"
              alt="Progress Icon"
            />
          </a>
        </div>
        <div class="nav-item" id="feed">
          <a href="feed.html" aria-label="Feed">
            <img
              src="../assets/icons/white/Icons-VnEng_feedicon.png"
              alt="Feed Icon"
            />
          </a>
        </div>
      </div>
    `;

  // Inject the navbar into the page
  document.body.insertAdjacentHTML("beforeend", navbarHTML);

  // Highlight the active nav item based on the current page
  const navItems = document.querySelectorAll(".nav-item a");
  const currentPath = window.location.pathname.split("/").pop();

  navItems.forEach((item) => {
    if (item.getAttribute("href") === currentPath) {
      item.parentElement.classList.add("active");
    }
  });
});
