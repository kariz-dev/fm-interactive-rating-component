// Get the form element
const radioForm = document.forms["rateForm"];

// Get the modal popup element
const modal = document.getElementById("modal");
const card = document.getElementById("card");

// Get the <span> element that closes the modal
const closeBtn = document.getElementsByClassName("close")[0];

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

// Add event listener to the close button
closeBtn.addEventListener("click", function () {
  // Hide the modal popup
  modal.style.display = "none";
  card.style.display = "block";

  // Reset the radio button selection
  const selectedRadioButton = document.querySelector("input[name='selector']:checked");
  if (selectedRadioButton) {
    selectedRadioButton.checked = false;
  }
});