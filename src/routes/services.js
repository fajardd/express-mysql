const express = require("express");
const serviceController = require("../controller/services.js");
const router = express.Router();

// Read data - GET
router.get("/", serviceController.getAllServices);

// resd by id - GET
router.get("/:idService", serviceController.getIdServices);

// create data - POST
router.post("/", serviceController.createNewServices);

// update service
router.put("/:idService", serviceController.updateServices);
router.patch("/:idService", serviceController.updateServices);

// delete services
router.delete("/:idService", serviceController.deleteServices);

module.exports = router;
