const db = require("../config/database");

const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM users";

  return db.query(SQLQuery);
};

const getIdUsers = (idUser) => {
  const SQLQuery = "SELECT * FROM users WHERE id_users = ?";

  return db.query(SQLQuery, [idUser]);
};

const createNewUser = (body) => {
  const SQLQuery = `INSERT INTO users (id_users, full_name, no_telp, address) 
                    VALUES (?, ?, ?, ?)`;

  return db.query(SQLQuery, [
    body.id_users,
    body.full_name,
    body.no_telp,
    body.address,
  ]);
};

const updateUser = (body, idUser) => {
  const SQLQuery = `UPDATE users SET full_name = ?, no_telp = ?, address = ? WHERE id_users = ?`;
  return db.query(SQLQuery, [
    body.full_name,
    body.no_telp,
    body.address,
    idUser,
  ]);
};

const deleteUser = (idUser) => {
  const SQLQuery = `DELETE FROM users WHERE id_users=?`;

  return db.query(SQLQuery, [idUser]);
};

module.exports = {
  getAllUsers,
  getIdUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
