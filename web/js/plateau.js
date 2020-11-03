import * as mock from "./mocks/mock-plateau.js";

export class Plateau {
    tableau = [];

    constructor() {}

    initPlateau() {
        mock.mock_plateau.forEach(ligne => {
            let nouvelleLigne = [];
            ligne.forEach(colonne => {
                let element;
                switch (colonne) {
                    case 1:
                        element = mock.arbre;
                        break;
                    case 2:
                        element = mock.maison;
                        break;
                    case 3:
                        element = mock.ville;
                        break;
                    case 4:
                        element = mock.villeFleurie;
                        break;
                    case 5:
                        element = mock.usine;
                        break;
                    default:
                        element = mock.vide;
                }
                nouvelleLigne.push(element);                
            })
            this.tableau.push(nouvelleLigne);
        });
    }

    getTableau() {
        return this.tableau;
    }
}