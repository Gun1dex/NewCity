import { batimentCategorie, imageCategorie } from '../models/categorie';
import { ICase } from '../models/case';

export var mock_plateau: ICase[][] = [
    [
        {
            id: batimentCategorie.MAISON,
            imageUrl: "../../img/roadTile1.png",
            categorie: imageCategorie.BATIMENT
        },
        {
            id: batimentCategorie.ARBRE,
            imageUrl: "../../img/roadTile2.png",
            categorie: imageCategorie.BATIMENT
        }
    ],
    [
        {
            id: batimentCategorie.ARBRE,
            imageUrl: "../../img/roadTile2.png",
            categorie: imageCategorie.BATIMENT
        },
        {
            id: batimentCategorie.VIDE,
            imageUrl: "../../img/roadTile3.png",
            categorie: imageCategorie.VEGETATION
        }
    ]
];