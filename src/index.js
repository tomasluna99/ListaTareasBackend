//Lista de Tareas Backend
//al principio inicie el proyecto instalando todas las dependendias que requeria la base de datos, se trabajo con morgan mongoose express 

import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import "./database";
import tareaRouter from "./routes/tareas.routes";

//express
const app = express();


app.set("port", process.env.PORT || 4001);
// el puerto
app.listen(app.get("port"), () => {
    console.log("Estoy en el puerto " + app.get("port"));
});

//MIdlewars:
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ entends: true }));
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "../public")));


app.use("/apitareas", tareaRouter);
