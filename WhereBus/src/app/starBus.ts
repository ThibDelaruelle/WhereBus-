export interface StarBus {
    nhits : number;
    records: Array<{
        datasetid : String;
        recordid : String;
        fields: Array <{
            sens : String;
            numerobus : String;
            idbus : String;
            idligne : String;
            etat : String;
            destination : String;
            nomcourtligne : String;
            ecartsecondes : String;
            coordonnees : number[];
        }>;
        geometry: Array<{
            type : String;
            coordinates : number[];
        }>;
        record_timestamp : String;
    }>;
}