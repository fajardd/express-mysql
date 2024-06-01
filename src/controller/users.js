const UsersModel = require("../models/users");
const { v4: uuidv4 } = require("uuid");
uuidv4();

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers();

    res.json({
      data: data,
      message: "Get all users success",
      status: 1,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      status: 0,
      serverMessage: error,
    });
  }
};

const getIdUsers = async (req, res) => {
  const { idUser } = req.params;
  try {
    const [data] = await UsersModel.getIdUsers(idUser);

    res.json({
      data: data,
      message: "Get user by id success",
      status: 1,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      status: 0,
      serverMessage: error,
    });
  }
};

const createNewUser = async (req, res) => {
  const { body } = req;
  if (!body.full_name || !body.no_telp || !body.address) {
    return res.status(400).json({
      message: "Anda kurang menginputkan data",
      data: null,
    });
  }

  try {
    const userId = uuidv4();
    await UsersModel.createNewUser({ ...body, id_users: userId });
    res.status(201).json({
      data: { id_users: userId, ...body },
      message: "Create user success",
      status: 1,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      status: 0,
      serverMessage: error,
    });
  }
};

const updateUser = async (req, res) => {
  const { idUser } = req.params;

  const { body } = req;
  try {
    await UsersModel.updateUser(body, idUser);
    res.json({
      data: {
        id_users: idUser,
        ...body,
      },
      message: "Update user success",
      status: 1,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      status: 0,
      serverMessage: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { idUser } = req.params;

  try {
    await UsersModel.deleteUser(idUser);
    res.json({
      data: {
        id_users: idUser,
      },
      message: "Delete user success",
      status: 1,
    });
  } catch (error) {}
};

module.exports = {
  getAllUsers,
  getIdUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
