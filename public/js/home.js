document.addEventListener("DOMContentLoaded", () => {
  const lesson1 = document.getElementById("lesson1");
  const modal = document.getElementById("lessonModal");
  const closeButton = modal.querySelector(".close-button");
  const navbar = document.querySelector(".bottom-nav"); // Target dynamically injected navbar
  const topbar = document.querySelector(".top-nav"); // Target dynamically injected topbar

  // Function to open modal and hide navbar, topbar, and prevent scrolling
  const openModal = () => {
    modal.style.display = "block";
    document.body.classList.add("no-scroll"); // Prevent background scrolling
    if (navbar) navbar.style.display = "none"; // Hide navbar
    if (topbar) topbar.style.display = "none"; // Hide topbar
  };

  // Function to close modal, show navbar and topbar, and re-enable scrolling
  const closeModal = () => {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll"); // Re-enable background scrolling
    if (navbar) navbar.style.display = "flex"; // Restore navbar
    if (topbar) topbar.style.display = "flex"; // Restore topbar
  };

  // Open modal for Lesson 1
  if (lesson1) {
    lesson1.addEventListener("click", openModal);
  }

  // Close modal when clicking the close button
  if (closeButton) {
    closeButton.addEventListener("click", closeModal);
  }

  // Close modal when clicking outside of the modal content
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Handle Option Selection
  document.querySelectorAll(".option").forEach((option) => {
    option.addEventListener("click", (e) => {
      const parent = e.target.closest(".options");

      // Deselect all other options in the group
      parent
        .querySelectorAll(".option")
        .forEach((opt) => opt.classList.remove("selected"));

      // Select the clicked option
      e.target.classList.add("selected");
    });
  });

  // Navigate Between Quiz Pages
  document.querySelectorAll(".next-button").forEach((button) => {
    button.addEventListener("click", () => {
      const currentPage = button.closest(".quiz-page");
      const nextPageId = button.getAttribute("data-next");
      const nextPage = document.getElementById(nextPageId);

      currentPage.style.display = "none";
      nextPage.style.display = "block";
    });
  });

  // Handle Quiz Finish
  const submitQuiz = document.querySelector(".submit-quiz");
  if (submitQuiz) {
    submitQuiz.addEventListener("click", () => {
      document.querySelectorAll(".quiz-page").forEach((page) => {
        page.style.display = "none";
      });
      document.getElementById("quiz-end").style.display = "block";
    });
  }
});
