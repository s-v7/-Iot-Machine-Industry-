
//import express from "express";
//import { connectToDataBase } from "./services/database.service"
//import { electricalMachineRouter } from "./routers/electrical.router";
//import { error } from "console";
//const port = process.env.port || 1337

//const app = express();
//connectToDataBase()
//    .then(() => {
//        app.use("/electricalmachine", electricalMachineRouter);

//        app.listen(port, () => {
//            console.log(`Server started at http://localhost:${port}`);
//        });
//    })
//    .catch((error) => {
//        console.error("Database connection failed", error);
//        process.exit();
//    });