// created by Mayahi Adel
const pages = document.querySelectorAll(".page")
const header = document.querySelector("header")
const nbPages = pages.length // nbr de pages du formulaire

let pageActive = 1

// On attend le chargement de la page
window.onload = () => {
    // on affiche la 1ere page du formulaire
    document.querySelector(".page").style.display = "initial"

    // On affiche les numeros des pages dans l'entete
    // On parcourt la liste des pages

    pages.forEach((page, index) => {
        // on crée l'element "numero de page"
        let element = document.createElement("div")
        element.classList.add("page-num")
        element.id = "num" + (index + 1)
        if (pageActive === index + 1){
            element.classList.add("active")
        }
        element.innerHTML = index + 1
        header.appendChild(element)
    })

    // on gere les boutons "suivant"
    boutons = document.querySelectorAll(".next")
    for(let bouton of boutons) {
        bouton.addEventListener("click", pageSuivante)
    }

    // on gere les boutons "precedent"
    boutons = document.querySelectorAll(".prev")
    for(let bouton of boutons) {
        bouton.addEventListener("click", pagePrecedente)
    }


}


// Cette fonction fait avancer le formulaire d'une page
function pageSuivante(){
    
    // On masque toutes les pages
    for(let page of pages){
        page.style.display = "none"
    }

    // On affiche la page suivante
    this.parentElement.nextElementSibling.style.display = "initial"

    // on "desactive" tous les numeros
    document.querySelector(".active").classList.remove("active")

    // On incrimente pageActive
    pageActive++

    // On "active" le nouveau numero
    document.querySelector("#num"+pageActive).classList.add("active") 

}

// Cette fonction fait reculer le formulaire d'une page
function pagePrecedente(){
    
    // On masque toutes les pages
    for(let page of pages){
        page.style.display = "none"
    }

    // On affiche la page precedente
    this.parentElement.previousElementSibling.style.display = "initial"

    // on "desactive" tous les numeros
    document.querySelector(".active").classList.remove("active")

    // On incrimente pageActive
    pageActive--

    // On "active" le nouveau numero
    document.querySelector("#num"+pageActive).classList.add("active") 

}
