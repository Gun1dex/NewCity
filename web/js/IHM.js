import { Plateau } from './plateau/plateau.js';

export class IHM {
    plateau;

    constructor() {}

    init() {
        this.plateau = new Plateau();
        this.plateau.initPlateau();
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
}