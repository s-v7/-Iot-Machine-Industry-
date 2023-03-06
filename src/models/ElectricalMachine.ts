import { ObjectId } from "mongodb";

export default class ElectricalMachine {
    public _id: ObjectId;
    public _typeMachine: string;
    public _stateMachine: boolean;
    public _temperatura: number

    //constructor() { }
    constructor(id: ObjectId, typeMachine: string, stateMachine: boolean, temperatura: number) {
        this._id = id;
        this._typeMachine = typeMachine;
        this._stateMachine = stateMachine;
        this._temperatura = temperatura;
    }
}