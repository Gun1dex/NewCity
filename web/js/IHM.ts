import { Plateau } from './plateau/plateau';

export class IHM {
    plateau: Plateau;

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
                html += `<img src="${ligne.imageUrl}">`;
            })
        });
        document.getElementById("affichage_jeu").innerHTML = html;
    }
}