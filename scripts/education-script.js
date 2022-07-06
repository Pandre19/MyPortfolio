//var myeducation_buttons_wrapper = document.getElementById("myeducation-buttons-wrapper");
var button_education = document.getElementById("button-education");
var button_certification = document.getElementById("button-certification");

var education_wrapper = document.getElementById("education-wrapper");
var certifications_wrapper = document.getElementById("certifications-wrapper");

// var function_button_management = function(event) {
//     console.log(event);
//     console.log("TUKI");
// }

var function_education_button_management = function() {
    if(button_certification.classList.contains("active")){
        button_education.classList.add("active");
        button_certification.classList.remove("active");
    }
}

var function_certification_button_management = function() {
    if(button_education.classList.contains("active")){
        button_certification.classList.add("active");
        button_education.classList.remove("active");
    }
}

//myeducation_buttons_wrapper.addEventListener("click", function_button_management);
button_certification.addEventListener("click", function_certification_button_management);
button_education.addEventListener("click", function_education_button_management);