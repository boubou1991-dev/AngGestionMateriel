export interface Stock {
    id?:number;
    type:string;
    nomProduit:string;
    quantite:number;
    alertStock?:number;
    date?:Date;
    categorie?:string;
    fournisseur?:string;
    pays?:string;
    operation?:string;
    depot?:number;
    retrait?:number;
    stock?:number;
    responsable?:string;
    libelle?:string;
    utilisateur?:string;
    depotQuantite?:number;

}
