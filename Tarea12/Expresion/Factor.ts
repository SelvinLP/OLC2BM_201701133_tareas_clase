import {codigo} from '../Abstracto/Nodo';
import { Expresion } from "../Abstracto/Expresion";

export class Factor extends Expresion{
    
    constructor(private value : any){
        super();
    }

    public ejecutar() : codigo{
        let retono:codigo={cd3:"",tmp:this.value.toString()};
        return retono;
    }
    
}