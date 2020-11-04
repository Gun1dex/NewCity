import { Plateau } from './plateau.js';
import { Menu } from './menu.js';
import { Objectif } from './objectif.js';


export class IHM {
    plateau;
    menu;
    objectif;

    constructor() { }

    init() {
        this.plateau = new Plateau();
        this.menu = new Menu();
        this.objectif = new Objectif();

        this.plateau.initPlateau();
        this.menu.initMenu();
        this.objectif.initObjectif();
    }

    afficherPlateau() {
        const tableau = this.plateau.getTableau();
        var html = "";
        var i = 0;
        tableau.forEach(colonne => {
            var j = 0;
            colonne.forEach(ligne => {
                html += `<img src="${ligne.imageUrl}" style="height:40px" ondrop="deposer(event)" ondragover="permettreDepot(event)" draggable="false" id="img_${i}_${j}">`;
                j++;
            })
            html += "<br>";
            i++;
        });
        document.getElementById("affichage_jeu").innerHTML = html;
    }

    afficherMenu() {
        const menu = this.menu.getMenu();
        var html = "";
        var i = 0;
        menu.forEach(colonne => {
            colonne.forEach(ligne => {
                html += `${ligne.nom}`;
                html += `<br><img src="${ligne.imageUrl}" draggable="true" ondragstart="trainer(event)" id="imgM_${i}" style='height:50px'><br>`;
                i++;
            })

        });
        document.getElementById("affichage_menu").innerHTML = html;
    }

    afficherObjectif() {
        const objectif = this.objectif.getObjectif();
        var html = "";

        objectif.forEach(element => {
            const couleur = element.accompli === true ? "green" : "none";
            html += `<p style="color:${couleur}">element.nom`;
            html += `<br>Avancement :${element.progression}</p>`;
        });
        document.getElementById("affichage_objectif").innerHTML = html;
    }

    calculerAvancement() {
        this.objectif.calculerAvancement(this.plateau);
    }

    
}