import { batimentCategorie, imageCategorie } from '../models/categorie';
import { ICase } from '../models/case';

export var mock_plateau: ICase[][] = [
    [
        {
            id: batimentCategorie.MAISON,
            imageUrl: "../../img/maison",
            categorie: imageCategorie.BATIMENT
        },
        {
            id: batimentCategorie.ARBRE,
            imageUrl: "../../img/arbre",
            categorie: imageCategorie.BATIMENT
        }
    ],
    [
        {
            id: batimentCategorie.ARBRE,
            imageUrl: "../../img/arbre",
            categorie: imageCategorie.BATIMENT
        },
        {
            id: batimentCategorie.VIDE,
            imageUrl: "../../img/vide",
            categorie: imageCategorie.VEGETATION
        }
    ]
];