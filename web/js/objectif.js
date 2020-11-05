import { imageCategorie } from './models/categorie.js';
export class Objectif {
    liste = [];

    taux_pollution;
    taux_vegetation;
    taux_energie_renouvelable;
    taux_energie_non_renouvelable;

    nb_arbre_plante;
    nb_foret_plante;
    nb_eau_place;
    progressionTotal;

    constructor() { }

    initAttributs() {
        this.taux_pollution = 0;
        this.taux_vegetation = 0;
        this.taux_energie_renouvelable = 0;
        this.taux_energie_non_renouvelable = 0;

        this.nb_arbre_plante = 0;
        this.nb_foret_plante = 0;
        this.nb_eau_place = 0;
        this.progressionTotal = 0;
    }

    initObjectif(objectif) {
        this.initAttributs();
        this.liste = objectif;
    }

    actualiserObjectifs(plateau, element) {
        if (element?.nom === "Arbre") {
            this.nb_arbre_plante++;
        } else if (element?.nom === "Foret") {
            this.nb_foret_plante++;
        } else {
            for (const categorie of element?.categorie) {
                if (categorie === imageCategorie.EAU) {
                    this.nb_eau_place++;
                    continue;
                }
            }
        }
        this.calculerAvancement(plateau);
    }

    verifierObjectifs(plateau) {
        if (plateau.niveau === 1) {
            this.verifierObjectifsNiveau1();
        } else {
            this.verifierObjectifsNiveau2();
        }
    }

    verifierObjectifsNiveau1() {
        const planterArbre = this.objectifPlanterArbre(0, 10);
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

    verifierObjectifsNiveau2() {
        const planterArbre = this.objectifPlanterArbre(0, 15);
        let planterArbreProgression = 100;
        if (planterArbre) {
            this.liste[0].accompli = true;
        } else if (this.liste[0].accompli === false) {
            planterArbreProgression = this.liste[0].progression;
        }

        const pollution = this.objectifPollution(1);
        let pollutionProgression = 100;
        if (pollution) {
            this.liste[1].accompli = true;
        } else if (this.liste[1].accompli === false) {
            pollutionProgression = this.liste[1].progression;
        }

        const foretEtEau = this.objectifForetEtEau(2, 10, 10);
        let foretEtEauProgression = 100;
        if (foretEtEau) {
            this.liste[2].accompli = true;
        } else if (this.liste[2].accompli === false) {
            foretEtEauProgression = this.liste[2].progression;
        }

        this.progressionTotal = (planterArbreProgression + + pollutionProgression + + foretEtEauProgression) / 3;
    }

    objectifPlanterArbre(index, obj) {
        if (this.liste[index].accompli === false) {
            if (this.nb_arbre_plante === obj) {
                this.liste[index].progression = 100;
                return true;
            } else {
                this.liste[index].progression = this.nb_arbre_plante * 100 / obj;
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

    objectifPollution(index) {
        if (this.liste[index].accompli === false) {
            if (this.taux_pollution <= 0.15) {
                this.liste[index].progression = 100;
                return true;
            } else {
                this.liste[index].progression = (0.15 * 100 / this.taux_pollution).toFixed(2);
                return false;
            }
        } else {
            return false
        }
    }

    objectifForetEtEau(index, objForet, objEau) {
        if (this.liste[index].accompli === false) {
            if (this.nb_foret_plante >= objForet && this.nb_eau_place >= objEau) {
                this.liste[index].progression = 100;
                return true;
            } else {
                const foret = this.nb_foret_plante * 100 / objForet;
                const eau = this.nb_eau_place * 100 / objEau;
                const valForet = this.nb_foret_plante > objForet ? 100 : foret;
                const valEau = this.nb_eau_place > objEau ? 100 : eau;
                this.liste[index].progression = (valForet + valEau) / 2;
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
        let txPollution = 0;

        tableau.forEach(colonne => {
            colonne.forEach(element => {
                element.categorie.forEach(categorie => {
                    switch (categorie) {
                        case "energie_renouvelable":
                            txRenouvelable++;
                            break;
                        case "energie_non_renouvelable":
                            txNonRenouvelable++;
                            break;
                        case "vegetation":
                            txVegetation++;
                            break;
                        case "pollution":
                            txPollution++;
                            break;
                    }
                });
                caseTotal++;
            });
        });
        this.calculerTauxEnergieRenouvelable(txRenouvelable, txNonRenouvelable);
        this.calculerTauxVegetation(txVegetation, caseTotal);
        this.calculerTauxPollution(txPollution, caseTotal);
        this.verifierObjectifs(plateau);
    }

    calculerTauxEnergieRenouvelable(renouvelable, nonrenouvelable) {
        this.taux_energie_renouvelable = renouvelable / (renouvelable + nonrenouvelable);
        this.taux_energie_non_renouvelable = 1 - this.taux_energie_renouvelable;
    }

    calculerTauxVegetation(vegetation, total) {
        this.taux_vegetation = vegetation / total;
    }

    calculerTauxPollution(pollution, total) {
        this.taux_pollution = pollution / total;
    }

    getObjectif() {
        return this.liste;
    }

    getProgressionTotal() {
        return this.progressionTotal;
    }
}