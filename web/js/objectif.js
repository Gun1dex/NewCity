import { mock_objectif } from "./mocks/mock-objectif.js";

export class Objectif {
    liste = [];

    taux_pollution;
    taux_vegetation;
    taux_energie_renouvelable;
    taux_energie_non_renouvelable;

    nb_arbre_plante;
    progressionTotal;

    constructor() {
        this.taux_pollution = 0;
        this.taux_vegetation = 0;
        this.taux_energie_renouvelable = 0;
        this.taux_energie_non_renouvelable = 0;

        this.nb_arbre_plante = 0;
        this.progressionTotal = 0;
    }

    initObjectif() {
        this.liste = mock_objectif;
    }

    actualiserObjectifs(plateau, element) {
        if (element?.nom === "Arbre") {
            this.nb_arbre_plante++;
        }
        this.calculerAvancement(plateau);
    }

    verifierObjectifs() {
        const planterArbre = this.objectifPlanterArbre(0);
        let planterArbreProgression = 100;
        if (planterArbre) {
            this.liste[0].accompli = true;
        } else if (this.liste[0].accompli === false) {
            planterArbreProgression = this.liste[0].progression;
        }

        const energieRenouvelable = this.objectifEnergieRenouvelable(1);
        let planterEnergieRenouvelable = 100;
        if (energieRenouvelable) {
            this.liste[1].accompli = true;
        } else if (this.liste[1].accompli === false) {
            planterEnergieRenouvelable = this.liste[1].progression;
        }

        const vegetation = this.objectifVegetation(2);
        let planterVegetation = 100;
        if (vegetation) {
            this.liste[2].accompli = true;
        } else if (this.liste[2].accompli === false) {
            planterVegetation = this.liste[2].progression;
        }

        this.progressionTotal = (planterArbreProgression + + planterEnergieRenouvelable + + planterVegetation) / 3;
    }

    objectifPlanterArbre(index) {
        if (this.liste[index].accompli === false) {
            if (this.nb_arbre_plante === 10) {
                this.liste[index].progression = 100;
                return true;
            } else {
                this.liste[index].progression = this.nb_arbre_plante * 10;
                return false
            }
        }
        return false;
    }

    objectifEnergieRenouvelable(index) {
        if (this.liste[index].accompli === false) {
            if (this.taux_energie_renouvelable >= 0.7) {
                this.liste[index].progression = 100;
                return true;
            } else {
                this.liste[index].progression = (this.taux_energie_renouvelable * 100 / 0.7).toFixed(2);
                return false
            }
        }
        return false;
    }

    objectifVegetation(index) {
        if (this.liste[index].accompli === false) {
            if (this.taux_vegetation >= 0.5) {
                this.liste[index].progression = 100;
                return true;
            } else {
                this.liste[index].progression = (this.taux_vegetation * 100 / 0.5).toFixed(2);
                return false;
            }
        } else {
            return false
        }
    }


    calculerAvancement(plateau) {
        const tableau = plateau.getTableau();
        let caseTotal = 0;
        let txRenouvelable = 0;
        let txNonRenouvelable = 0;
        let txVegetation = 0;

        tableau.forEach(colonne => {
            colonne.forEach(element => {
                switch (element.categorie) {
                    case "energie_renouvelable":
                        txRenouvelable += element.valeur;
                        break;
                    case "energie_non_renouvelable":
                        txNonRenouvelable += element.valeur;
                        break;
                    case "vegetation":
                        txVegetation++;
                        break;
                }
                caseTotal++;
            });
        });
        this.calculerTauxEnergieRenouvelable(txRenouvelable, txNonRenouvelable);
        this.calculerTauxVegetation(txVegetation, caseTotal);
        this.verifierObjectifs();
    }

    calculerTauxEnergieRenouvelable(renouvelable, nonrenouvelable) {
        this.taux_energie_renouvelable = renouvelable / (renouvelable + nonrenouvelable);
        this.taux_energie_non_renouvelable = 1 - this.taux_energie_renouvelable;
    }

    calculerTauxVegetation(vegetation, total) {
        this.taux_vegetation = vegetation / total;
    }

    getObjectif() {
        return this.liste;
    }

    getProgressionTotal() {
        return this.progressionTotal;
    }
}