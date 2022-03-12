export class bus {
    numerobus : number;
    sens : String;
    nomcourtligne : String;
    destination : String;
    coordonnees : number[];

    public constructor(numerobus : number, sens : String, nomcourtligne :String, destination : String, coordonnees : number[]){
        this.numerobus = numerobus;
        this.sens = sens;
        this.nomcourtligne = nomcourtligne;
        this.destination = destination;
        this.coordonnees = coordonnees;
    }
}