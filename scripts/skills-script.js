var button_education = document.getElementById("button-education");
var button_certification = document.getElementById("button-certification");

var education_wrapper = document.getElementById("education-wrapper");
var certifications_wrapper = document.getElementById("certifications-wrapper");

var skills_content_wrapper = document.getElementsByClassName("card-general-container");


var function_education_button_management = function() {
    if(button_certification.classList.contains("active")){
        button_education.classList.add("active");
        button_certification.classList.remove("active");

        education_wrapper.style.display="block"; 
        certifications_wrapper.style.display="none";
    }
}

var function_certification_button_management = function() {
    if(button_education.classList.contains("active")){
        button_certification.classList.add("active");
        button_education.classList.remove("active");

        certifications_wrapper.style.display="block"; 
        education_wrapper.style.display="none";
    }
}

var container;
for(var i=0; i < skills_content_wrapper.length; i++){
    skills_content_wrapper[i].addEventListener("click", function() {
        console.log("tuki");
        container = this.children[0];
        container.classList.toggle("rotated");
    });
}

button_certification.addEventListener("click", function_certification_button_management);
button_education.addEventListener("click", function_education_button_management);