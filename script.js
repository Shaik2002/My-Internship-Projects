document.addEventListener("DOMContentLoaded", function() {
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      // Remove 'selected' class from all plans
      document.querySelectorAll(".plan").forEach(function(plan) {
        plan.classList.remove("selected");
      });

      // Add 'selected' class to the clicked plan
      button.parentNode.classList.add("selected");
    });
  });
});


