// Function to show the "Please select a date" question
function showDateQuestion() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("yesButton").style.display = "none";
    document.getElementById("noButton").style.display = "none";
    document.getElementById("dateQuestion").style.display = "block";
  }
  
  // Function to show the "What time?" question
  function showTimeQuestion() {
    document.getElementById("dateQuestion").style.display = "none";
    document.getElementById("timeQuestion").style.display = "block";
  }
  
  // Function to show the confirmation message with the time
  function showConfirmation(time) {
    document.getElementById("timeQuestion").style.display = "none";
    document.getElementById("finalMessage").style.display = "block";
    document.getElementById("confirmationText").textContent = "That's a date! Please inform the owner of this website about your selection: " + time + " on Wednesday.";
  }
  
  // Function to show the "Are you sure?" question if "No" is selected
  function showSureQuestion() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("yesButton").style.display = "none";
    document.getElementById("noButton").style.display = "none";
    document.getElementById("confirmQuestion").style.display = "block";
  }
  
  // Function to thank the user if they say "Yes" to the confirmation
  function thankYouNo() {
    document.getElementById("confirmQuestion").style.display = "none";
    document.getElementById("finalMessage").style.display = "block";
    document.getElementById("confirmationText").textContent = "Thank you for your time! Please inform the owner of this website about your decision.";
  }
  
  // Function to restart the process if "No" is selected in "Are you sure?"
  function cancelDecision() {
    document.getElementById("confirmQuestion").style.display = "none";
    document.getElementById("question1").style.display = "block";
    document.getElementById("yesButton").style.display = "inline";
    document.getElementById("noButton").style.display = "inline";
  }
  