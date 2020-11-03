import { imageCategorie } from '../models/categorie.js';

export const vide = {
    nom: "Vide",
    imageUrl: "./img/jeu/fonts/herbe.png",
    categorie: imageCategorie.RIEN
};

export const arbre = {
    nom: "Arbre",
    imageUrl: "./img/jeu/vegetations/arbre.png",
    categorie: imageCategorie.VEGETATION
};

export const maison = {
    nom: "Maison",
    imageUrl: "./img/jeu/batiments/maison.png",
    categorie: imageCategorie.BATIMENT
};

export const ville = {
    nom: "Ville",
    imageUrl: "./img/jeu/batiments/ville.png",
    categorie: imageCategorie.BATIMENT
};

export const villeFleurie = {
    nom: "Ville fleurie",
    imageUrl: "./img/jeu/batiments/ville-fleurie.png",
    categorie: imageCategorie.BATIMENT
};

export const usine = {
    nom: "Ville fleurie",
    imageUrl: "./img/jeu/batiments/usine.png",
    categorie: imageCategorie.POLUTION
};

export var mock_plateau = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0],
    [0, 0, 1, 0, 1, 1, 3, 2, 0, 0, 0, 0, 1, 0, 1, 1, 2, 2, 5, 0],
    [0, 1, 3, 2, 0, 2, 2, 1, 2, 4, 4, 1, 1, 2, 0, 2, 2, 1, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 3, 2, 2, 0, 0, 0, 0, 1, 0, 3, 1, 2, 2, 0, 0],
    [0, 1, 1, 2, 0, 2, 4, 1, 2, 0, 0, 1, 1, 2, 0, 2, 2, 1, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 1, 2, 2, 0, 3, 0, 0, 3, 0, 1, 1, 2, 2, 0, 0],
    [0, 1, 1, 2, 0, 2, 2, 1, 2, 0, 0, 1, 1, 2, 0, 2, 2, 1, 2, 0],
    [0, 0, 1, 0, 1, 1, 2, 2, 0, 0, 0, 0, 1, 0, 1, 1, 2, 2, 0, 0],
    [0, 5, 0, 0, 0, 5, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 5, 1, 0, 3, 3, 2, 2, 0, 0, 0, 0, 1, 0, 1, 4, 2, 2, 0, 0],
    [0, 1, 1, 2, 0, 2, 2, 1, 2, 0, 0, 1, 1, 2, 0, 2, 2, 1, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];