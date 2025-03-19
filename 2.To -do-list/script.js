import { createElement, addText, addItems, removeItems, deleteAllLi } from "./modules/html_element.js";
import { checkedListColor, colorMode } from "./modules/colors.js"

/** @const {HTMLElement} form -- Cible le formulaire <form> */
const form = document.getElementById("form");
/** @const {HTMLElement} input -- Cible l'entrée utilisateur <input> */
const input = document.getElementById("input");
/** @const {HTMLElement} list -- Cible la liste <ul> */
const list = document.getElementById("list");
/** @const {HTMLElement} list -- Cible le <button> reset */
const reset = document.getElementById("reset");
/**
 * @var {number} numId -- contient un nombre qui sera incrementé pour chaque entrée utilisateur
 * sera ajoué a l'id du boutton supprimer afin de créer des id uniques pour chaque boutons.
 *
 */
let numId = 0;

/**
 * @type {EventListener}
 * @description -- Ajout d'un evenement pour écouter le <button> submit
 * 
 */
form.addEventListener("submit", function(event) {
    /** @description -- Petite decouverte du jour ^^ permet d'eviter le rechargement de la page a l'envoi du formulaire */
    event.preventDefault();
    /** @const {function} li -- Crée un element <li>*/
    const li = createElement("li");
    /** @const {function} checkbox -- Crée un element <input>*/
    const checkbox = createElement("input");
    /** @const {function} label -- Crée un element <label>*/
    const label = document.createElement('label');
    /** @const {function} button -- Crée un element <button>*/
    const button = createElement("button");
    /** @descrtiption -- Initialise le type="checkbox" pour <input>*/
    checkbox.type = "checkbox";
    /** @description -- Ajoute une class="checkbox" à <input> */
    checkbox.classList = "checkbox";
    /** @description -- Ajoute une class="del" à <button> */
    button.classList = "del";
    
    /** @description -- Ajoute un id unique grace a numId, à <button> */
    button.id = "del-button" + numId;
    /** @description -- Incrémente numId */
    numId++;

    /** @description -- Appelle la fonction addText(elem, content) pour ajouter du textContent*/
    addText(label, 'Finished');
    addText(button, "🗑️ Delete");
    addText(li, input.value);

    /** @description -- Ajoute un écouteur d'evenement de type clic sur le <button> supprimer */
    button.addEventListener("click", function() {
        /** @var {array[string]} items -- Contient tout les elements à supprimer lors du clic*/
        let items = [li, button, checkbox, label];
        /** @description -- Appelle la fonction removeItems(items, parent) afin de supprimer tout les elements du array*/
        removeItems(items, list)
    });
    /** @description -- Ajoute un écouteur d'evenement de type clic sur le <input> checkbox */
    checkbox.addEventListener("change", function() {
        /** @description -- Appelle la fonction checkedListColor(elem, item, color1, color2, textDecoration) afin de changer la couleur en fonction de l'etat de l'element <input> checkbox */
        checkedListColor(li, checkbox, "rgb(184, 255, 118)", "rgb(214, 214, 214)", "line-through");
    });
    /** @const {array[string]} childrens -- Contient tout les éléments à ajouter à l'envoi du formulaire */
    const childrens = [checkbox, label, button];
    /** @description -- Appelle la fonction addItems(parent, children, array_childrens) pour ajouter tout les elements du array*/
    addItems(list, li, childrens);
    /** @description -- Réinitialise le <input> text utilisateur */
    input.value = "";
})

/** @description -- Appelle la fonction colorMode() pour que l'utilisateur puisse choisir entre les modes light et dark*/
colorMode();

/**
 * @type {EventListener}
 * @description -- Ajout d'un evenement pour écouter le <button> reset
 * 
 */
reset.addEventListener("click", function() {
    /** @const {HTMLElement} elemList -- Cible tout les li actuels sur la page et contenu dans la constante sous forme de tableau */
    const elemList = Array.from(document.querySelectorAll("li"));
    /** @description -- Appelle la fonction deleteAllLi(parent, array) afin de supprimer tout les elements qui sont checked*/
    deleteAllLi(list, elemList);
})




