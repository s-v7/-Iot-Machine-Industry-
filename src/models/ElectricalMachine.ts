import { ObjectId } from "mongodb";

export default class ElectricalMachine {
    //Defining Object Attributes/Properties
    public _id: ObjectId;
    public _typeMachine: string;
    public _stateMachine: boolean;
    public _temperature: number

    //constructor() { }  Optional 
    constructor(id: ObjectId, typeMachine: string, stateMachine: boolean, temperature: number) {
        this._id = id;
        this._typeMachine = typeMachine;
        this._stateMachine = stateMachine;
        this._temperature = temperature;
    }
}
