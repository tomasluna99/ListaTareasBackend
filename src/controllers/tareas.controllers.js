import Tarea from "../models/tarea";
import { validationResult } from "express-validator";

export const listaTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find();
        res.status(200).json(tareas);
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: "Error al buscar las tareas" });
    }
};

export const agregarTarea = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errores: errors.array(),
            });
        }
        const tareaNueva = new Tarea(req.body);
        await tareaNueva.save();
        res.status(201).json({ mensaje: "La tarea se agrego correctamente" });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "ocurrio un error al intentar agregar la tarea",
        });
    }
};

export const borrarTarea = async (req, res) => {
    try {
        await Tarea.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: "Tarea borrada correctamente",
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al intentar borrar la Tarea",
        });
    }
};

export const editarTarea = async (req, res) => {
    try {
        await Tarea.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje: "Tarea editada correctamente",
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: "Error al intentar editar la Tarea",
        });
    }
};
