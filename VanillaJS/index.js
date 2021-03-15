const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function hadleClick(){
    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", hadleClick);
}

init();