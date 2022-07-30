var backside_single_project = document.getElementsByClassName("single-project-backside-wrapper");

function ToggleProject(index) {
    console.log("tuki");
    backside_single_project[index].classList.toggle("single-project-backside-active");
}