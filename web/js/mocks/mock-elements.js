import { imageCategorie } from '../models/categorie.js';

// 0
export const herbe = {
    nom: "Vide",
    imageUrl: "./img/jeu/fonts/herbe.png",
    categorie: imageCategorie.RIEN,
    valeur: 1
};

// 1
export const arbre = {
    nom: "Arbre",
    imageUrl: "./img/jeu/vegetations/arbre.png",
    categorie: imageCategorie.VEGETATION,
    valeur: 3
};

// 2
export const foret = {
    nom: "Foret",
    imageUrl: "./img/jeu/vegetations/foret.png",
    categorie: imageCategorie.VEGETATION,
    valeur: 10
};

// 10
export const maison = {
    nom: "Maison",
    imageUrl: "./img/jeu/batiments/maison.png",
    categorie: imageCategorie.BATIMENT,
    valeur: 2
};

// 11
export const ville = {
    nom: "Ville",
    imageUrl: "./img/jeu/batiments/ville.png",
    categorie: imageCategorie.BATIMENT,
    valeur: 7
};

// 12
export const villeFleurie = {
    nom: "Ville fleurie",
    imageUrl: "./img/jeu/batiments/ville-fleurie.png",
    categorie: imageCategorie.BATIMENT,
    valeur: 5
};

// 13
export const usine = {
    nom: "Usine",
    imageUrl: "./img/jeu/batiments/usine.png",
    categorie: imageCategorie.POLLUTION,
    valeur: 10
};

// 20
export const panneau_solaire = {
    nom: "Panneau solaire",
    imageUrl: "./img/jeu/energies/panneau_solaire.png",
    categorie: imageCategorie.ENERGIE_RENOUVELABLE,
    valeur: 4
};

// 21
export const centrale_nucleaire = {
    nom: "Centrale Nucléaire",
    imageUrl: "./img/jeu/energies/centrale.png",
    categorie: imageCategorie.ENERGIE_NON_RENOUVELABLE,
    valeur: 5
};

// 22
export const eolienne = {
    nom: "Eolienne",
    imageUrl: "./img/jeu/energies/eolienne.png",
    categorie: imageCategorie.ENERGIE_RENOUVELABLE,
    valeur: 4
};

// 30
export const route_horizontale = {
    nom: "Route horizontale",
    imageUrl: "./img/jeu/routes/routeHorizontale.png",
    categorie: imageCategorie.ROUTE
};

// 31
export const route_verticale = {
    nom: "Route verticale",
    imageUrl: "./img/jeu/routes/routeVerticale.png",
    categorie: imageCategorie.ROUTE
};

// 32
export const carrefour = {
    nom: "Carrefour",
    imageUrl: "./img/jeu/routes/carrefour.png",
    categorie: imageCategorie.ROUTE
};

// 33
export const virageDroiteBas = {
    nom: "Virage droite",
    imageUrl: "./img/jeu/routes/virageDroiteB.png",
    categorie: imageCategorie.ROUTE
};

// 34
export const virageGaucheBas = {
    nom: "Virage gauche",
    imageUrl: "./img/jeu/routes/virageGaucheB.png",
    categorie: imageCategorie.ROUTE
};

// 35
export const virageDroiteHaut = {
    nom: "Virage droite",
    imageUrl: "./img/jeu/routes/virageDroiteH.png",
    categorie: imageCategorie.ROUTE
};

// 36
export const virageGaucheHaut = {
    nom: "Virage gauche",
    imageUrl: "./img/jeu/routes/virageGaucheH.png",
    categorie: imageCategorie.ROUTE
};

// 37
export const routeTDroite = {
    nom: "Route en T",
    imageUrl: "./img/jeu/routes/routeTDroite.png",
    categorie: imageCategorie.ROUTE
};

// 38
export const routeTGauche = {
    nom: "Route en T",
    imageUrl: "./img/jeu/routes/routeTGauche.png",
    categorie: imageCategorie.ROUTE
};

// 39
export const routeTHaut = {
    nom: "Route en T",
    imageUrl: "./img/jeu/routes/routeTHaut.png",
    categorie: imageCategorie.ROUTE
};

// 50
export const routeTBas = {
    nom: "Route en T",
    imageUrl: "./img/jeu/routes/routeTBas.png",
    categorie: imageCategorie.ROUTE
};

// 40
export const eau = {
    nom: "Eau",
    imageUrl: "./img/jeu/eau/eau.png",
    categorie: imageCategorie.EAU
};

// 41
export const eauBasDroite = {
    nom: "Eau angle",
    imageUrl: "./img/jeu/eau/angleBasDroite.png",
    categorie: imageCategorie.EAU
};

// 42
export const eauBasGauche = {
    nom: "Eau angle",
    imageUrl: "./img/jeu/eau/angleBasGauche.png",
    categorie: imageCategorie.EAU
};

// 43
export const eauHautDroite = {
    nom: "Eau angle",
    imageUrl: "./img/jeu/eau/angleHautDroite.png",
    categorie: imageCategorie.EAU
};

// 44
export const eauHautGauche = {
    nom: "Eau angle",
    imageUrl: "./img/jeu/eau/angleHautGauche.png",
    categorie: imageCategorie.EAU
};

// 45
export const eauBas = {
    nom: "Eau angle",
    imageUrl: "./img/jeu/eau/eauBas.png",
    categorie: imageCategorie.EAU
};

// 46
export const eauHaut = {
    nom: "Eau angle",
    imageUrl: "./img/jeu/eau/eauHaut.png",
    categorie: imageCategorie.EAU
};

// 47
export const eauDroite = {
    nom: "Eau côté",
    imageUrl: "./img/jeu/eau/eauDroite.png",
    categorie: imageCategorie.EAU
};

// 48
export const eauGauche = {
    nom: "Eau côté",
    imageUrl: "./img/jeu/eau/eauGauche.png",
    categorie: imageCategorie.EAU
};

export var elements = [
    herbe,
    arbre,
    maison,
    ville,
    villeFleurie,
    usine,
    panneau_solaire,
    centrale_nucleaire,
    eolienne,
    foret,
    route_horizontale,
    route_verticale,
    carrefour,
    virageDroiteBas,
    virageDroiteHaut,
    virageGaucheBas,
    virageGaucheHaut,
    eau,
    eauBas,
    eauHaut,
    eauDroite,
    eauGauche,
    eauHautDroite,
    eauHautGauche,
    eauBasDroite,
    eauBasGauche,
    routeTDroite,
    routeTGauche,
    routeTHaut,
    routeTBas
]