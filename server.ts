//import http = require('http');
//const port = process.env.port || 1337
//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);

import express from "express";
import { connectToDataBase } from "./src/services/database.service"
import { electricalMachineRouter } from "./src/routers/electrical.router";
import { error } from "console";
const port = process.env.port || 1337

const app = express();
connectToDataBase()
    .then(() => {
        app.use("/electricalmachine", electricalMachineRouter);

        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error("Database connection failed", error);
        process.exit();
    });