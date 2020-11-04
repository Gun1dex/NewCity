import * as IHM_module from "./IHM.js";
import * as DgNDr from "./dragAndDrop.js";

var ihm = new IHM_module.IHM();
ihm.init();
ihm.afficherPlateau();
ihm.afficherMenu();
ihm.afficherObjectif();
ihm.calculerAvancement();

export function trainer(event){
    /* DgNDr.trainer(event); */
    console.log("test");
}

export function permettreDepot(event){
   /*  DgNDr.permettreDepot(event); */
    console.log("test");
}

export function deposer(event){
    /* DgNDr.deposer(event); */
    console.log("test");
}

