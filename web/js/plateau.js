import * as plateau from "./mocks/mock-plateau.js";
import * as elem from "./mocks/mock-elements.js";

export class Plateau {
    tableau = [];

    constructor() { }

    initPlateau() {
        plateau.mock_plateau.forEach(ligne => {
            let nouvelleLigne = [];
            ligne.forEach(colonne => {
                let element;
                switch (colonne) {
                    case 1:
                        element = elem.arbre;
                        break;
                    case 2:
                        element = elem.foret;
                        break;
                    case 10:
                        element = elem.maison;
                        break;
                    case 11:
                        element = elem.ville;
                        break;
                    case 12:
                        element = elem.villeFleurie;
                        break;
                    case 13:
                        element = elem.usine;
                        break;
                    case 20:
                        element = elem.panneau_solaire;
                        break;
                    case 21:
                        element = elem.centrale_nucleaire;
                        break;
                    case 22:
                        element = elem.eolienne;
                        break;
                    case 30:
                        element = elem.route_horizontale;
                        break;
                    case 31:
                        element = elem.route_verticale;
                        break;
                    case 32:
                        element = elem.carrefour;
                        break;
                    case 33:
                        element = elem.virageDroiteBas;
                        break;
                    case 34:
                        element = elem.virageGaucheBas;
                        break;
                    case 35:
                        element = elem.virageDroiteHaut;
                        break;
                    case 36:
                        element = elem.virageGaucheHaut;
                        break;
                    case 40:
                        element = elem.eau;
                        break;
                    case 41:
                        element = elem.eauBasDroite;
                        break;
                    case 42:
                        element = elem.eauBasGauche;
                        break;
                    case 43:
                        element = elem.eauHautDroite;
                        break;
                    case 44:
                        element = elem.eauHautGauche;
                        break;
                    case 45:
                        element = elem.eauHaut;
                        break;
                    case 46:
                        element = elem.eauBas;
                        break;
                    case 47:
                        element = elem.eauDroite;
                        break;
                    case 48:
                        element = elem.eauGauche;
                        break;
                    default:
                        element = elem.herbe;
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