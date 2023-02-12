import express from "express";
import employees from "../controllers/employees.controller";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
  try {
    const { id } = req.params;
    let data;

    if(id) {
      data = await employees.getOne(id);
    } else {
        data = await employees.getAll();
    }
    res.json(data);
 } catch (error) {
    next(error);
 }
});

router.post("/", async (req, res, next) => {
  try {
    const newEmployee = req.body;
    const data = await employees.add(newEmployee);
    res.json(data);
 } catch (error) {
    next(error);
 }
});

router.put("/:id?", async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedEmployee = req.body;
    const data = await employees.update(id, updatedEmployee);
    res.json(data);
 } catch (error) {
    next(error);
 }
});

router.delete("/:id?", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await employees.remove(id);
    res.json(data);
 } catch (error) {
    next(error);
 }
});

export default router;