// 1ERE VERSION DU MAIN.JS

let nbGroup = document.getElementById("nbGroups").value;
let candidates = document.getElementById("candidate");
const inputs = document.getElementsByClassName("nameInput");
const divGroup = document.getElementById("group");
const persons = [];
const allGroups = [];

const AddParticipant = () => {
    // CREATION
    let divPerson = document.createElement("div");
    let parag = document.createElement("p");
    let input = document.createElement("input");
    // ATTRIBUTION
    input.classList.add("nameInput");
    input.placeholder = "Le nom de la personne";
    input.value = "";
    parag.textContent = "Nom : ";
    // MISE EN FORME HTML
    divPerson.appendChild(parag);
    divPerson.appendChild(input);
    candidates.appendChild(divPerson);
}

const GroupCreator = () => {
    /* On créer le nombre de groupe au total. */
    for(let i = 0; i < nbGroup; i++){
        allGroups.push([]);
    }

    /* Indicateur pour savoir dans quel group nous sommes actuellement. */
    let currentGroup = 0;

    /* On boucle sur toutes les personnes présentes */
    for (let i = 0; i < persons.length; i++) {
        /* On vérifie si le groupe à déjà le nombre de personne maximum, si oui alors on passe au prochain groupe. */
        if ( allGroups[currentGroup].length === persons.length / allGroups.length )
            currentGroup++;

        /* On ajoute la personne au groupe actuellement sélectionner */
        allGroups[currentGroup].push(persons[i]);
    }
}

const GenerateGroup = () => {
    if (nbGroup == null)
        return;

    Array.from(inputs).forEach((element) => {
        persons.push(element.value);
    })

    GroupCreator();
}

const Testing = () => {
    console.log(persons);
}

const generateGroups = document.getElementById("generateGroups");
if ( generateGroups != null ) {
    generateGroups.addEventListener("click", (e) => GenerateGroup());
}