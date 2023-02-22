var button_education = document.getElementById("button-education");
var button_certification = document.getElementById("button-certification");

var education_wrapper = document.getElementById("education-wrapper");
var certifications_wrapper = document.getElementById("certifications-wrapper");

var education_card_read_more = document.querySelectorAll(".my-education-card-read-more");

var education_card_wrapper_collections = document.querySelectorAll(".only-certification-card-wrapper");
var education_card_button_certifications_collections = document.querySelectorAll(".my-education-card-button-certification");
var education_card_wrapper_array = Array.from(education_card_wrapper_collections);
const education_images = [ "../img/certification/CertificateOfCompletion_Java Memory Management.jpg",
    "../img/certification/CertificateOfCompletion_Java 11 Essential Training_page-0001.jpg",
    "../img/certification/CertificateOfCompletion_Learning Java_page-0001.jpg"
];

var education_card_modal_image = document.getElementById("modal-image");
var education_card_modal_close = document.getElementById("modal-close");
var education_modal_background = document.getElementById("myeducational-modal");

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

education_card_read_more.forEach(function(element){
    element.addEventListener("click", function(){
        if(!element.nextElementSibling.classList.toggle("my-education-card-description-disappear")){
            element.innerHTML="Read Less...";
        } else {
            element.innerHTML="Read More...";
        }
    });
});

education_card_button_certifications_collections.forEach(function(element) {
    element.addEventListener("click", function(){
        var parentElement = element.parentElement.parentElement;
        // console.log(parentElement);
        for (let i = 0; i < education_card_wrapper_collections.length; i++){
            // console.log(i);
            // console.log(education_card_wrapper_collections[i])
            if(parentElement == education_card_wrapper_collections[i]) {
                console.log(i);
                education_card_modal_image.src = education_images[i];
                education_modal_background.classList.add("myeducation-modal-active");                
            }
        }
    });
})

education_card_modal_close.addEventListener("click", function() {
    education_modal_background.classList.remove("myeducation-modal-active");
});

button_certification.addEventListener("click", function_certification_button_management);
button_education.addEventListener("click", function_education_button_management);