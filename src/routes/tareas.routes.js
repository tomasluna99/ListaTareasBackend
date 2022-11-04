import { Router } from "express";
import { agregarTarea, borrarTarea, editarTarea, listaTareas } from "../controllers/tareas.controllers";
import { check } from "express-validator";
const router = Router();
router
    .route("/tareas")
    .get(listaTareas)
    .post(
        [
            check("laTarea")
                .notEmpty()
                .withMessage("Ingresar la tarea es obligatorio")
                .isLength({ min: 1, max: 100 })
                .withMessage("La tarea debe tener entre 1 y 100 caracteres"),
        ],
        agregarTarea
    );
router
    .route("tareas/:id")
    .put(
        [
            check("laTarea")
                .notEmpty()
                .withMessage("Ingresar la tarea es obligatorio")
                .isLength({ min: 1, max: 100 })
                .withMessage("La tarea debe tener entre 1 y 100 caracteres"),
        ],
        editarTarea
    )
    .delete(borrarTarea);

export default router;
