document.getElementsByClassName("sendInfo").addEventListener("click", sendInfo(event))


const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const Email = document.querySelector(".Email");
const phoneNumber = document.querySelector(".phoneNumber");
const textArea = document.querySelector(".textArea");
function sendInfo(event){
    const firstnameField = firstName.value;
    const lastnameField = lastName.value;
    const emailField = Email.value;
    const phonenumberField = phoneNumber.value;
    const textareaField = textArea.value;
    localStorage.setItem("firstName", firstnameField);
    localStorage.setItem("lastName", lastnameField);
    localStorage.setItem("Email", emailField);
    localStorage.setItem("phoneNumber", phonenumberField);
    localStorage.setItem("textArea", textareaField);
}
