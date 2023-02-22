var url;
var input_next = document.getElementById("next");
var button_email = document.getElementById("email-button");

window.onload = function() {
    url = window.location.href.replace("emailMe.html", "thanks.html");
    input_next.setAttribute("value", url);
    // console.log(input_captcha.value);
  };