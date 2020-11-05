import * as mock from "./mocks/mock-elements.js";

export class Menu {
    tableau = [];

    constructor() { }

    initMenu() {
        this.tableau.push(mock.elements);
    }

    getMenu() {
        return this.tableau;
    }
}