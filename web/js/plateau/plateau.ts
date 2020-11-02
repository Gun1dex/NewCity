import { mock_plateau } from "../mocks/mock-plateau";
import { ICase } from "../models/case";

export class Plateau {
    tableau: ICase[][] = [];

    constructor() {}

    initPlateau() {
        this.tableau = mock_plateau;
    }
}