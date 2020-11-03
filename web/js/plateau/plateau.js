import { mock_plateau } from "../mocks/mock-plateau.js";

export class Plateau {
    tableau = [];

    constructor() {}

    initPlateau() {
        this.tableau = mock_plateau;
    }

    getTableau() {
        return this.tableau;
    }
}