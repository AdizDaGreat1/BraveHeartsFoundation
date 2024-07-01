
    emailjs.init( "3z3sNBHMxiNjtyzCQ");

// Get the button element by id (correcting the usage of getElementById)

const btnSend = document.getElementById("btnSend");

// Function to handle form submission and sessionStorage storage
function sendInfo(event) {
    event.preventDefault(); // Prevent form submission

    // Get form input values
    let firstName = document.getElementById("FirstName").value;
    let lastName = document.getElementById("LastName").value;
    let email = document.getElementById("Email").value;
    let phoneNumber = document.getElementById("PhoneNumber").value;
    let textArea = document.getElementById("floatingTextarea").value;

    console.log("FirstName", firstName);
    console.log("LastName", lastName);
    console.log("Email", email);
    console.log("PhoneNumber", phoneNumber);
    console.log("floatingTextarea", textArea);


    // Store form data in sessionStorage
    sessionStorage.setItem("FirstName", firstName);
    sessionStorage.setItem("LastName", lastName);
    sessionStorage.setItem("Email", email);
    sessionStorage.setItem("PhoneNumber", phoneNumber);
    sessionStorage.setItem("floatingTextarea", textArea);

//     emailjs.sendForm("service_l1k8ncw", "template_lgy9ro7",)
//     .then(function message() {
//         alert("mail sent successfully")
//     }), function error(){
//         alert("error")

// }
}

// Function to handle another action, assuming its purpose (myFunction)
function myFunction(e) {

    e.preventDefault();

    console.log("firstName", firstName);
    console.log("lastName", lastName);
    console.log("eMail", email);
    console.log("phoneNumber", phoneNumber);
    console.log("FloatingtextArea", textArea);


    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("eMail").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let textArea = document.getElementById("FloatingtextArea").value;

    // Corrected variable name and usage
    sessionStorage.setItem("FirstName", firstName);
    sessionStorage.setItem("LastName", lastName);
    sessionStorage.setItem("Email", email);
    sessionStorage.setItem("PhoneNumber", phoneNumber);
    sessionStorage.setItem("floatingTextarea", textArea);


}


 emailjs.sendForm("service_l1k8ncw", "template_lgy9ro7", myFunction, sendInfo)
    .then(function message() {
        alert("mail sent successfully")
    }), function error(){
        alert("error")
    };


// Add event listener to the button for click event

myComponent()