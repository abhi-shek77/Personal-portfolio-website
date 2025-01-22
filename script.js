// Tab functionality
document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabPanes = document.querySelectorAll(".tab-pane");
  
    tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Remove active class from all buttons
        tabButtons.forEach((button) => button.classList.remove("active"));
        // Add active class to the clicked button
        btn.classList.add("active");
  
        // Hide all tab panes
        tabPanes.forEach((pane) => pane.classList.remove("active"));
  
        // Show the corresponding tab pane
        const tabId = btn.getAttribute("data-tab");
        document.getElementById(tabId).classList.add("active");
      });
    });
  });
  