import { mock_objectif } from "./mocks/mock-objectif.js";

export class Objectif {
    liste = [];

    taux_pollution;
    taux_vegetation;
    taux_energie_renouvelable;
    taux_energie_non_renouvelable;

    nb_arbre_plante;

    constructor() {
        this.taux_pollution = 0;
        this.taux_vegetation = 0;
        this.taux_energie_renouvelable = 0;
        this.taux_energie_non_renouvelable = 0;

        this.nb_arbre_plante = 0;
    }

    initObjectif() {
        this.liste = mock_objectif;
    }

    getObjectif() {
        return this.liste;
    }

    calculerAvancement(plateau) {
        const tableau = plateau.getTableau();
        let txRenouvelable = 0;
        let txNonRenouvelable = 0;

        tableau.forEach(colonne => {
            colonne.forEach(element => {
                switch (element.categorie) {
                    case "pollution":
                        this.taux_pollution += element.valeur;
                        break;
                    case "vegetation":
                        this.taux_vegetation += element.valeur;
                        break;
                    case "energie_renouvelable":
                        txRenouvelable += element.valeur;
                        break;
                    case "energie_non_renouvelable":
                        txNonRenouvelable += element.valeur;
                        break;
                }
            });
        });
        this.calculerTauxEnergieRenouvelable(txRenouvelable, txNonRenouvelable);
        console.log(this.taux_energie_renouvelable, this.taux_energie_non_renouvelable)
        this.verifierObjectifs();
    }

    calculerTauxEnergieRenouvelable(renouvelable, nonrenouvelable) {
        this.taux_energie_renouvelable = renouvelable / (renouvelable + nonrenouvelable);
        this.taux_energie_non_renouvelable = 1 - this.taux_energie_renouvelable;
    }

    verifierObjectifs() {
        this.liste.forEach(objectif => {
            // TO DO
        });
    }


}