import { batimentCategorie, imageCategorie } from '../models/categorie.js';

const vide = {
    id: batimentCategorie.VIDE,
    imageUrl: "./img/jeu/herbe.png",
    categorie: imageCategorie.VEGETATION
};

const maison = {
    id: batimentCategorie.MAISON,
    imageUrl: "./img/jeu/sable.png",
    categorie: imageCategorie.BATIMENT
};

const arbre = {
    id: batimentCategorie.ARBRE,
    imageUrl: "./img/jeu/petitArbre.png",
    categorie: imageCategorie.BATIMENT
};

export var mock_plateau = [
    [
        maison,
        arbre,
        maison,
        arbre
    ],
    [
        arbre,
        vide,
        maison,
        vide
    ],
    [
        arbre,
        vide,
        maison,
        vide
    ],
    [
        arbre,
        vide,
        maison,
        vide
    ],
];