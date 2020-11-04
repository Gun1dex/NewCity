import * as mock from "./mocks/mock-elements.js";

export class Menu {
    tableau = [];

    constructor() {}

    initMenu() {
        var elements = [
            mock.herbe,
            mock.arbre,
            mock.maison,
            mock.ville,
            mock.villeFleurie,
            mock.usine,
            mock.panneau_solaire,
            mock.centrale_nucleaire,
            mock.eolienne,
            mock.foret,
            mock.route_horizontale,
            mock.route_verticale,
            mock.carrefour,
            mock.virageDroiteBas,
            mock.virageDroiteHaut,
            mock.virageGaucheBas,
            mock.virageGaucheHaut,
            mock.eau,
            mock.eauBas,
            mock.eauHaut,
            mock.eauDroite,
            mock.eauGauche,
            mock.eauHautDroite,
            mock.eauHautGauche,
            mock.eauBasDroite,
            mock.eauBasGauche,
            mock.routeTDroite,
            mock.routeTGauche,
            mock.routeTHaut,
            mock.routeTBas
        ]
        this.tableau.push(elements);
    }

    getMenu() {
        return this.tableau;
    }
}