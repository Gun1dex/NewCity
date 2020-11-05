import * as IHM_module from "./IHM.js";

var pageCourante = document.location.href.split("page=")[1];
var idSelectElement = null;
var ihm = new IHM_module.IHM(pageCourante);

ihm.init();
ihm.afficherContenu();

function trainer(event) {
    var idImg = event.target.id.split('_');
    idSelectElement = idImg[1];
}

function permettreDepot(event) {
    event.preventDefault();
}

function deposer(event) {
    event.preventDefault();
    var coord = event.target.id.split('_');
    var i = coord[1];
    var j = coord[2];
    ihm.changerImage(i, j, idSelectElement);
}

function changerNiveau() {
    ihm.changerNiveau();
}

window.trainer = trainer;
window.permettreDepot = permettreDepot;
window.deposer = deposer;
window.changerNiveau = changerNiveau;