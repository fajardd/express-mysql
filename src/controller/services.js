const ServicesModel = require("../models/services");
const moment = require("moment");
const { v4: uuidv4 } = require("uuid");
uuidv4();

// get all services
const getAllServices = async (req, res) => {
  try {
    const [data] = await ServicesModel.getAllServices();

    // Memformat created_at
    const formattedData = data.map((body) => ({
      ...body,
      created_at: moment(body.created_at).format("YYYY-MM-DD HH:mm:ss"),
    }));

    res.json({
      data: formattedData,
      message: "Get all service success",
      status: "1",
    });
  } catch (error) {
    res.json({
      message: "server error",
      status: "0",
      serverMessage: error,
    });
  }
};

const getIdServices = async (req, res) => {
  const { idService } = req.params;
  try {
    const [data] = await ServicesModel.getIdService(idService);
    res.json({
      data: data,
      message: "Get service by id success",
      status: "1",
    });
  } catch (error) {
    res.json({
      message: "server error",
      status: "0",
      serverMessage: error,
    });
  }
};

// create new service
const createNewServices = async (req, res) => {
  const { body } = req;
  try {
    const serviceId = uuidv4();
    const createdAt = moment().format("YYYY-MM-DD HH:mm:ss");
    await ServicesModel.createNewServices({
      id_services: serviceId,
      ...body,
      created_at: createdAt,
    });
    res.json({
      data: { id_services: serviceId, ...body, created_at: createdAt },
      message: "Create services success",
      status: "1",
    });
  } catch (error) {
    res.json({
      message: "service error",
      status: "0",
      serverMessage: error,
    });
  }
};

// update service
const updateServices = async (req, res) => {
  const { idService } = req.params;

  const { body } = req;
  try {
    await ServicesModel.updateService(body, idService);
    res.json({
      data: {
        id_services: idService,
        ...body,
      },
      message: "Update service success",
      status: "1",
    });
  } catch (error) {
    res.json({
      message: "Server error",
      status: "2",
      serverMessage: error,
    });
  }
};

const deleteServices = async (req, res) => {
  const { idService } = req.params;

  try {
    await ServicesModel.deleteService(idService);
    res.json({
      data: {
        id_services: idService,
      },
      message: "Delete success",
      status: "1",
    });
  } catch (error) {
    res.json({
      message: "server error",
      status: "0",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllServices,
  getIdServices,
  createNewServices,
  updateServices,
  deleteServices,
};
