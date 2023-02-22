var all_checkboxes = document.getElementsByName("language");
var no_projects_message = document.getElementById("no-portfolios-message-wrapper");

var project_cards_collection = document.getElementsByClassName("single-project-portfolio");
var arr_project_cards = Array.prototype.slice.call(project_cards_collection);

var arr_wanted_languages = [];
// var arr_checked_cards;

function unCheckAll() {
    for(let single_checkbox in all_checkboxes) {
        single_checkbox.checked = false;
    }
}

window.onload = function() {
    unCheckAll();
    if(checkShowingAll()){
        console.log("Mostrar a todos");
        // arr_checked_cards = arr_project_cards;
        showArray(arr_project_cards);
    }
};

function checkShowingAll() {
    for(let single_checkbox in all_checkboxes) {
        if(single_checkbox.checked) {
            console.log("check");
            return false;
        }
    }
    return true;
}



function showArray(arr) {
    arr.map((card) => {
        card.style.display = "block";
        // console.log(card);
    })
}

function unShowAll() {
    arr_project_cards.map((card) => {
        card.style.display = "none";
    })
}

function checkBoxChecked(el) {
    if(el.checked) {
        arr_wanted_languages.push(el.value);
    } else {
        var filtered_arr_wanted_languages = arr_wanted_languages.filter(
            function(element) {
                return element != el.value;
        })
        arr_wanted_languages = filtered_arr_wanted_languages;
    }
    console.log(arr_wanted_languages);

    if(arr_wanted_languages.length == 0) {
        console.log("cero");
        showArray(arr_project_cards);
        no_projects_message.style.display="none";
        // arr_checked_cards = arr_project_cards;
        return;
    }

    unShowAll();
    showSpecificCards();
}

function showSpecificCards() {
    var display_Cards;
    var aux_Cards = arr_project_cards;
    for(var i = 0; i < arr_wanted_languages.length; i++) {
        display_Cards = aux_Cards.filter((card) => {
            return card.classList.contains(arr_wanted_languages[i]);
        })

        aux_Cards = display_Cards;
        console.log(aux_Cards);
    }

    if(display_Cards.length > 0) {
        display_Cards.map((card) => {
            card.style.display = "block";
        })
        no_projects_message.style.display="none";
    } else {
        no_projects_message.style.display="block";
    }
}