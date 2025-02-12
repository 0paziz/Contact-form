
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const messageTextArea = document.getElementById("text"); 

const  Messagedisplay=document.querySelector(".Message-display");

// Select radio buttons
const radio1 = document.getElementById("radio-1");
const radio2 = document.getElementById("radio-2");

// Select checkbox
const checkbox = document.getElementById("checkbox");

// Select the form
const formID = document.getElementById("f1");

// Select error message elements
const errorFirstName = document.getElementById("errorMessage-fn");
const errorLastName = document.getElementById("errorMessage-ln");
const errorEmail = document.getElementById("errorMessage-Email");
const errorRadio = document.getElementById("errorMessage-Q");
const errorCheckbox = document.getElementById("errorMessage-CH");
const errorMessageText= document.getElementById("errorMessage-M");

function displaySucess(){
    if (Messagedisplay) {
        Messagedisplay.style.display = "block"; // Show success message
        setTimeout(() => {
            Messagedisplay.style.display = "none"; // Hide after 3 seconds
        }, 5000);
    } else {
        console.error("Element with ID 'MessageDisplay' not found.");
    }
}

// Function to validate the form
function ValidateForm() {


    let isValid = true;

    // Reset error messages
    errorFirstName.style.display = "none";
    errorLastName.style.display = "none";
    errorEmail.style.display = "none";
    errorRadio.style.display = "none";
    errorCheckbox.style.display = "none";
    errorMessageText.style.display = "none";

    // Check if first name is empty
    if (firstName.value.trim() === "") {
        errorFirstName.style.display = "block";
        isValid = false;
    }

    // Check if last name is empty
    if (lastName.value.trim() === "") {
        errorLastName.style.display = "block";
        isValid = false;
    }

    // Check if email is valid
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        errorEmail.style.display = "block";
        isValid = false;
    }

    // Check if a radio button is selected
    if (!radio1.checked && !radio2.checked) {
        errorRadio.style.display = "block";
        isValid = false;
    }

    if (messageTextArea.value.trim() === "") {
        errorMessageText.style.display = "block";
        isValid = false;
    }


    // Check if the checkbox is checked
    if (!checkbox.checked) {
        errorCheckbox.style.display = "block";
        isValid = false;
    }

    // Submit form if valid
    if (isValid) {
        displaySucess();
        setTimeout(() => formID.submit(), 2000);
    }
   
}



// Attach event listener to the form
formID.addEventListener("submit", (event)=>{
    event.preventDefault();
   ValidateForm();
    
});
