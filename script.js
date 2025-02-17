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

  // CONTACT SECTION CODE
  const scriptURL = 'https://script.google.com/macros/s/AKfycbynlb3qa822S4i4Y9oHkDZwUHibxYFKQQVMEe3EcKGwhPyw79EunJ5pFVnkiTEzOz8P/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
     method: 'POST',
      body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function() {
          msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
  