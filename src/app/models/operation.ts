export interface Operation{
    idhistocompte?:number;
    action:string;
    user?:string;
    iduser?:number;
    date:Date;
    mois?:number;
    periode?:string;
    ref:string;
    libelle:string;
    depot:number;
    retrait:number;
    solde?:number;
    unites?:string;
    operation?:string;
    imei?:string;
    produitid?:number;
}