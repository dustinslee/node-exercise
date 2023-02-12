import express from "express";
import products from "../controllers/products.controller";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
  try {
    const { id } = req.params;
    let data;

    if(id) {
      data = await products.getOne(id);
    } else {
        data = await products.getAll();
    }
    res.json(data);
 } catch (error) {
    next(error);
 }
});

router.post("/", async (req, res, next) => {
  try {
    const newProduct = req.body;
    const data = await products.add(newProduct);
    res.json(data);
 } catch (error) {
    next(error);
 }
});

router.put("/:id?", async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedProduct = req.body;
    const data = await products.update(id, updatedProduct);
    res.json(data);
 } catch (error) {
    next(error);
 }
});

router.delete("/:id?", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await products.remove(id);
    res.json(data);
 } catch (error) {
    next(error);
 }
});

export default router;