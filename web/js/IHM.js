import { Plateau } from './plateau.js';
import { Menu } from './menu.js';
import { Objectif } from './objectif.js';
import { elements } from './mocks/mock-elements.js';
import * as mock_plt from "./mocks/mock-plateau.js";
import * as mock_obj from "./mocks/mock-objectif.js";

export class IHM {
    plateau;
    menu;
    objectif;
    pageCourante;

    constructor(pageCourante) {
        this.pageCourante = pageCourante;
    }

    init() {
        this.plateau = new Plateau();
        this.menu = new Menu();

        if (this.pageCourante === "jeu") {
            this.plateau.initPlateau(mock_plt.mock_plateau, 1);
            this.objectif = new Objectif();
            this.initObjectif();
        } else {
            this.plateau.initPlateau(mock_plt.mock_plateau3, 3);
        }

        this.menu.initMenu();
    }

    initObjectif() {
        if (this.plateau.niveau === 1) {
            this.objectif.initObjectif(mock_obj.mock_objectif);
        } else if (this.plateau.niveau === 2) {
            this.objectif.initObjectif(mock_obj.mock_objectif2);
        }
    }

    afficherContenu() {
        this.afficherPlateau();
        this.afficherMenu();
        if (this.pageCourante === "jeu") {
            this.afficherObjectifs();
        }
    }

    afficherPlateau() {
        const tableau = this.plateau.getTableau();
        var html = "";
        var i = 0;

        tableau.forEach(colonne => {
            var j = 0;
            colonne.forEach(ligne => {
                html += `<img src="${ligne.imageUrl}" style="width:3.3%;" ondrop="deposer(event)" ondragover="permettreDepot(event)" draggable="false" id="img_${i}_${j}">`;
                j++;
            });
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
                html += `<div>${ligne.nom}<br>`;
                html += `<img src="${ligne.imageUrl}" draggable="true" ondragstart="trainer(event)" id="imgM_${i}" style='height:50px'></div>`;
                i++;
            });
        });

        document.getElementById("affichage_menu").innerHTML = html;
    }

    afficherObjectif() {
        const objectif = this.objectif.getObjectif();
        var html = `Progression des objectifs<br><progress value="${this.objectif.getProgressionTotal()}" max="100"></progress><br><br>`;

        objectif.forEach(element => {
            const couleur = element.accompli === true ? "green" : "none";
            html += `<p style="color:${couleur}">${element.nom}<br>`;
            html += `<progress value="${element.progression}" max="100"></progress>`;
        });

        if (this.objectif.getProgressionTotal() === 100) {
            if (this.plateau.niveau === 1) {
                html += `<br><button onclick="changerNiveau()">Niveau suivant</button>`;
            } else if (this.plateau.niveau === 2) {
                html += `<br><p>Félicitation vous avez accompli tous les objectifs !</p>`;
            }
        }

        document.getElementById("affichage_objectif").innerHTML = html;
    }

    afficherObjectifs() {
        this.calculerAvancement();
        this.afficherObjectif();
    }

    calculerAvancement() {
        this.objectif?.calculerAvancement(this.plateau);
    }

    changerImage(destI, destJ, origineI) {
        const element = elements[origineI];
        this.plateau.replaceImg(destI, destJ, element);
        this.afficherPlateau();

        if (this.plateau.niveau === 1 || this.plateau.niveau === 2) {
            this.objectif.actualiserObjectifs(this.plateau, element);
            this.afficherObjectif();
        }
    }

    changerNiveau() {
        this.plateau.initPlateau(mock_plt.mock_plateau2, 2);
        this.initObjectif();
        this.objectif.calculerAvancement(this.plateau);
        this.afficherPlateau();
        this.afficherObjectif();
    }

}