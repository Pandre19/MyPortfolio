var header_collections = document.getElementsByClassName("header");
var title, content, title_search, content_search;

for (i = 0; i < header_collections.length; i++) {
    header_collections[i].addEventListener("click", function() {
        title = this.children[0];
        title.classList.toggle("active-header");
        content = this.nextElementSibling;
        content.classList.toggle("active");      
        for (j = 0; j < header_collections.length; j++) {
            var el = header_collections[j];
            if(this != el) {
                title_search = el.children[0];
                content_search = el.nextElementSibling;
                if(content_search.classList.contains("active")){
                    title_search.classList.remove("active-header");
                    content_search.classList.remove("active");
                }
            }else {
                switch(j) {
                    case 0:
                        window.location.replace('#first-header');
                        break;
                    case 1:
                        window.location.replace('#second-header');
                        break;
                    case 2:
                        window.location.replace('#third-header');
                        break;
                }
            }
            
        }
    });
  }