//ApiController
// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Machine from "../models/ElectricalMachine";

// Global Config
export const electricalMachineRouter = express.Router();
electricalMachineRouter.use(express.json());

// GET
electricalMachineRouter.get("/", async (_req: Request, _res: Response) => {
    try {
        const machine = (await collections.electricalMachines.find({}).toArray()) as unknown as Machine[];
        _res.status(200).send(machine);
    } catch (error) {
        _res.status(500).send(error.message);
    }
});
//GET {:id}
electricalMachineRouter.get("/:id", async (_req: Request, _res: Response) => {

    const id = _req?.params?.id;
    try {
        const query = { _id: new ObjectId(id) };
        const machine = (await collections.electricalMachines.findOne(query)) as unknown as Machine;
        if (machine) {
            _res.status(200).send(machine);
        }
    } catch (error) {
        _res.status(404).send(`Unable to find matching document with id: ${_req.params.id}`);
    }
});

//POST
electricalMachineRouter.post("/", async (_req: Request, _res: Response) => {
    try {
        const newMachine = _req.body as Machine;
        const result = await collections.electricalMachines.insertOne(newMachine);

        result
            ? _res.status(201).send(`Successfully created a new game with id ${result.insertedId}`)
            : _res.status(200).send("Failed to create a new machine");
    } catch (error) {
        console.error(error);
        _res.status(400).send(error.message);

    }
});

// PUT
electricalMachineRouter.put("/:id", async (_req: Request, _res: Response) => {

    const id = _req?.params?.id;

    try {
        const updateMachine: Machine = _req.body as Machine;
        const query = { _id: new ObjectId(id) };

        const result = await collections.electricalMachines.updateOne(query, { $set: updateMachine });

        result
            ? _res.status(200).send(`Successfully updated machine with id ${id}`)
            : _res.satatus(304).send(`Machine with id: ${id} not updated`);
    } catch (error) {
        console.error(error.message);
        _res.status(400).send(error.message);
    }
});

// DELETE {:id
electricalMachineRouter.delete("/:id", async (_req: Request, _res: Response) => {

    const id = _req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.electricalMachines.deleteOne(query);

        if (result && result.deletedCount) {
            _res.status(202).send(`Successfully removed game with id ${id}`);
        } else if (!result) {
            _res.status(400).sedn(`Failed to remove game with id ${id}`);
        } else if (!result.deletedCount) {
            _res.status(404).send(`Game with id ${id} does not exist`);
        }
    } catch (error) {
        console.error(error.message);
        _res.status(400).send(error.message);
    }
});
