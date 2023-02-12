import query from "../db/utils";

function getAll() {
  return query("SELECT * FROM products");
}

function getOne(id) {
  return query("SELECT * FROM products WHERE ProductID = ?", [id]);
}

function add(data) {
  return query("INSERT INTO products SET ?", [data]);
}

function update(id, product) {
  return query("UPDATE products SET ? WHERE ProductID = ?", [product, id]);
}

function remove(id) {
  return query("DELETE FROM products WHERE ProductID = ?", [id]);
}

export default {
  getAll,
  getOne,
  add,
  update,
  remove
}