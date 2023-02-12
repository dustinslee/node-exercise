import query from "../db/utils";

function getAll() {
  return query("SELECT * FROM employees");
}

function getOne(id) {
  return query("SELECT * FROM employees WHERE EmployeeID = ?", [id]);
}

function add(data) {
  return query("INSERT INTO employees SET ?", [data]);
}

function update(id, employee) {
  return query("UPDATE employees SET ? WHERE EmployeeID = ?", [employee, id]);
}

function remove(id) {
  return query("DELETE FROM employees WHERE EmployeeID = ?", [id]);
}

export default {
  getAll,
  getOne,
  add,
  update,
  remove
}