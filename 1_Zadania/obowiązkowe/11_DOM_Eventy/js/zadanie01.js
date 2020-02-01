document.addEventListener('DOMContentLoaded', () => {
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
})

//Wnioski:
//1. Po przeniesieniu skrypty do sekcji <head>, instrukcje zostały wykonane zanim został wczytany DOM
//2. Z pomocą eventu skrypt nie zostaje wykonany zanim DOM się nie załaduje, więc nie wyskoczyły błędy przy modyfikacji elementów na stronie
//3. Skrypty zostały wykonane po załadowaniu DOM