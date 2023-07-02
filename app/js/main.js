// Get the form element
const radioForm = document.forms["rateForm"];

// Get the modal popup element
const modal = document.getElementById("modal");
const card = document.getElementById("card");

radioForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the selected radio button
  const radioButton = radioForm.elements["selector"].value;

  // Display the selected value in the modal popup
  const selectedValueParagraph = document.getElementById("selected-value");
  selectedValueParagraph.textContent = radioButton;

  // Show the modal popup
  modal.style.display = "block";
  card.style.display = "none";

});