const express = require("express");
const userController = require("../controller/users.js");
const router = express.Router();

// CREATE - POST
router.post("/", userController.createNewUser);

// READ - GET
router.get("/", userController.getAllUsers);

// READ - GET by id
router.get("/:idUser", userController.getIdUsers);

// UPDATE- PATCH
router.patch("/:idUser", userController.updateUser);
router.put("/:idUser", userController.updateUser);

//DELETE - DELETE
router.delete("/:idUser", userController.deleteUser);

module.exports = router;
