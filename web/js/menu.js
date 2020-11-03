import * as mock from "./mocks/mock-plateau.js";

export class Menu {
    tableau = [];

    constructor() {}

    initMenu() {
        var elements = [
            mock.vide,
            mock.arbre,
            mock.maison,
            mock.ville,
            mock.villeFleurie
        ]
        this.tableau.push(elements);
    }

    getMenu() {
        return this.tableau;
    }
}