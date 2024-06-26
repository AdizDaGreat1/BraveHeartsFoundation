 document.querySelector("btnSend").addEventListener("click", sendInfo);

let firstName = document.querySelector("firstName");
let lastName = document.querySelector("lastName");
let Email = document.querySelector("Email");
let phoneNumber = document.querySelector("PhoneNumber");
let textArea = document.querySelector("floatingTextarea");


function sendInfo(){
    const firstnameField =  firstName.value; 
    const lastnameField =  lastName.value; 
    const emailField =  Email.value; 
    const phonenumberField =  phoneNumber.value; 
    const textareaField =  textArea.value; 
    localStorage.setItem("firstName", firstnameField);
    localStorage.setItem("lastName", lastnameField);
    localStorage.setItem("Email", emailField);
    localStorage.setItem("phoneNumber", phonenumberField);
    localStorage.setItem("textArea", textareaField);
}
console.log(sendInfo())