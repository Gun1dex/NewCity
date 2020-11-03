import { Plateau } from './plateau.js';
import { Menu } from './menu.js';


export class IHM {
    plateau;
    menu;

    constructor() {}

    init() {
        this.plateau = new Plateau();
        this.menu = new Menu();

        this.plateau.initPlateau();
        this.menu.initMenu();
    }

    afficherPlateau() {
        const tableau = this.plateau.getTableau();
        var html = "";
        
        tableau.forEach(colonne => {
            colonne.forEach(ligne => {
                html += `<img src="${ligne.imageUrl}" style='height:40px'>`;
            })
            html += "<br>";
        });
        document.getElementById("affichage_jeu").innerHTML = html;
    }

    afficherMenu() {
        const menu = this.menu.getMenu();
        var html = "";

        menu.forEach(colonne => {
            colonne.forEach(ligne => {
                html += `${ligne.nom}`;
                html += `<br><img src="${ligne.imageUrl}" style='height:60px'><br>`;
            })
            //html += "<br>";
        });
        document.getElementById("affichage_menu").innerHTML = html;
    }
}