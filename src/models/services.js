const db = require("../config/database");

// get all service
const getAllServices = () => {
  const SQLQuery = "SELECT * FROM services ";

  return db.query(SQLQuery);
};

// get service by id
const getIdService = (idService) => {
  const SQLQuery = "SELECT * FROM services WHERE id_services= ?";

  return db.query(SQLQuery, [idService]);
};

// create new service
const createNewServices = (body) => {
  const SQLQuery = `INSERT INTO services (id_services, service_name, created_at) VALUES (?,?, ?)`;

  return db.query(SQLQuery, [
    body.id_services,
    body.service_name,
    body.created_at,
  ]);
};

// update service
const updateService = (body, idService) => {
  const SQLQuery = `UPDATE services SET service_name = ? WHERE id_services = ?`;

  return db.query(SQLQuery, [body.service_name, idService]);
};

// delete service
const deleteService = (idService) => {
  const SQLQuery = `DELETE FROM services WHERE id_services = ?`;

  return db.query(SQLQuery, [idService]);
};

module.exports = {
  getAllServices,
  getIdService,
  createNewServices,
  updateService,
  deleteService,
};
