function sendInfo() {
    alert("Welcome!");

    // Get form input values
    let firstName = document.getElementById("FirstName").value;
    let lastName = document.getElementById("LastName").value;
    let email = document.getElementById("Email").value;
    let phoneNumber = document.getElementById("PhoneNumber").value;
    let textArea = document.getElementById("floatingTextarea").value;

    // Store form data in localStorage
    localStorage.setItem("FirstName", firstName);
    localStorage.setItem("LastName", lastName);
    localStorage.setItem("Email", email);
    localStorage.setItem("PhoneNumber", phoneNumber);
    localStorage.setItem("floatingTextarea", textArea);
}

function contactForm() {
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("eMail");

    // Additional logic for contact form if needed
}

// Get the button element by id
const btnSend = document.getElementById("btnSend");

// Add event listener to the button for click event
btnSend.addEventListener("click", () => {
    
});
