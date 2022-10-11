// SECONDE VERSION FONCTIONNELLE DU MAIN.JS (VERSION OFFICIELLE)

/**
 * Fonction qui permet d'ajouter un input dans la liste des personnes sur le
 * code HTML,
 * @returns Ne retounre rien.
 */
const AddPerson = () => {
    let elementHTMLPersons = document.getElementById("allPersons");
    if ( elementHTMLPersons != null )
        elementHTMLPersons.innerHTML += `
            <div>
                <input class="nameInput" placeholder="Nom du candidat">
            </div>
        `;
};

/**
 * Fonction qui permet de générer les groupes selon le nombre renseigné
 * dans l'input prévu et départage les personnes dans chaque chaque groupes.
 * @param {Array} persons Le tableau des personnes.
 * @param {Array} groups Le tableau des groupes.
 * @returns Ne retounre rien.
 */
const GenerateGroup = (persons, groups) => {
    let nbGroup = document.getElementById("nbGroups");
    let inputs = document.getElementsByClassName("nameInput");
    if ( nbGroup == null || inputs == null ) return;

    if ( persons.length > 0 )
        persons = [];

    Array.from(inputs).forEach((element) => {
        persons.push(element.value);
    })

    if (persons.length < 1 || parseInt(nbGroup.value) === 0)
        return;

    if ( groups.length > 0 )
        groups = [];

    /* On créer le nombre de groupe au total. */
    for(let i = 0; i < parseInt(nbGroup.value); i++)
        groups.push([]);

    /* Indicateur pour savoir dans quel group nous sommes actuellement. */
    let currentGroup = 0;

    /* On boucle sur toutes les personnes présentes */
    for (let i = 0; i < persons.length; i++) {
        /* On vérifie si le groupe à déjà le nombre de personne maximum, si oui alors on passe au prochain groupe. */
        if (groups[currentGroup].length === persons.length / groups.length)
            currentGroup++;

        /* On ajoute la personne au groupe actuellement sélectionner */
        groups[currentGroup].push(persons[i]);
    }

    let groupsDisplay = document.getElementById("group");
    let currentGroupsDisplay = 0;
    if (groupsDisplay != null)
        groups.forEach((group) => {
            groupsDisplay.innerHTML += `
              <div class="group" id="groupDetails-${currentGroupsDisplay}">
                <h4>Groupe ${currentGroupsDisplay + 1} :</h4>
              </div>
            `;

            let selectGroup = document.getElementById(`groupDetails-${currentGroupsDisplay}`);
            group.forEach((person) => selectGroup.innerHTML += `
                <p>${person}</p>
            `);

            currentGroupsDisplay++;
        })

    /* Vérification des groupes et personnes */
    console.log({
        groups: groups,
        persons: persons
    })
};

document.addEventListener("DOMContentLoaded", () => {
    const persons = [];
    const groups = [];

    let addButton = document.getElementById("add");
    if ( addButton != null )
        addButton.addEventListener("click", () => AddPerson())

    let generateButton = document.getElementById("generate");
    if ( generateButton != null )
        generateButton.addEventListener("click", () => GenerateGroup(persons, groups));
});