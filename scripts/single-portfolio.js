var backside_single_project = document.getElementsByClassName("single-project-backside-wrapper");
var special_backside;
var imagelink, newimagelink, nameimage, modifiednameimage, portfolio_image_element;

function ToggleProject(el) {
    special_backside = el.parentElement.parentElement.firstElementChild;
    special_backside.classList.toggle("single-project-backside-active");
}

function BackgroundClick(el) {
    if(el.classList.contains("active")) {
        change(el, "2", "1")
        el.classList.remove("active");
    } else {
        change(el, "1", "2");
        el.classList.add("active");
    }
}

function change(element, firstnumber, secondnumber) {
    portfolio_image_element = getElementOfImage(element);
    imagelink = portfolio_image_element.src;
    nameimage = imagelink.split("/")[imagelink.split("/").length - 1];
    modifiednameimage = nameimage.replace(firstnumber, secondnumber);
    newimagelink = imagelink.replace(nameimage, modifiednameimage)
    portfolio_image_element.src = newimagelink;
}

function getElementOfImage(el) {
    for(let i=0; i<el.parentElement.children.length; i++){
        console.log(el.parentElement.children[i].tagName);
        if(el.parentElement.children[i].tagName == "IMG"){
            return el.parentElement.children[i];
        }
    }
}