import { batimentCategorie, imageCategorie } from './categorie';

export interface ICase {
    id: batimentCategorie;
    imageUrl: string;
    categorie: imageCategorie;
}