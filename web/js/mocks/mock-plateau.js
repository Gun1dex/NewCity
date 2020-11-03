import { batimentCategorie, imageCategorie } from '../models/categorie.js';

export const vide = {
    id: batimentCategorie.VIDE,
    imageUrl: "./img/jeu/fonts/herbe.png",
    categorie: imageCategorie.RIEN
};

export const arbre = {
    id: batimentCategorie.ARBRE,
    imageUrl: "./img/jeu/vegetations/petitArbre.png",
    categorie: imageCategorie.VEGETATION
};

export const maison = {
    id: batimentCategorie.MAISON,
    imageUrl: "./img/jeu/batiments/maison.png",
    categorie: imageCategorie.BATIMENT
};

export const ville = {
    id: batimentCategorie.MAISON,
    imageUrl: "./img/jeu/batiments/ville.png",
    categorie: imageCategorie.BATIMENT
};

export const villeFleurie = {
    id: batimentCategorie.MAISON,
    imageUrl: "./img/jeu/batiments/ville-fleurie.png",
    categorie: imageCategorie.BATIMENT
};


export var mock_plateau = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 1, 3, 2, 0, 0, 0, 0, 1, 0, 1, 1, 2, 2, 0, 0],
    [0, 1, 3, 2, 0, 2, 2, 1, 2, 4, 4, 1, 1, 2, 0, 2, 2, 1, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 3, 2, 2, 0, 0, 0, 0, 1, 0, 3, 1, 2, 2, 0, 0],
    [0, 1, 1, 2, 0, 2, 4, 1, 2, 0, 0, 1, 1, 2, 0, 2, 2, 1, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 1, 2, 2, 0, 3, 0, 0, 3, 0, 1, 1, 2, 2, 0, 0],
    [0, 1, 1, 2, 0, 2, 2, 1, 2, 0, 0, 1, 1, 2, 0, 2, 2, 1, 2, 0],
    [0, 0, 1, 0, 1, 1, 2, 2, 0, 0, 0, 0, 1, 0, 1, 1, 2, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3, 3, 2, 2, 0, 0, 0, 0, 1, 0, 1, 4, 2, 2, 0, 0],
    [0, 1, 1, 2, 0, 2, 2, 1, 2, 0, 0, 1, 1, 2, 0, 2, 2, 1, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];