const Router = require("express");
const router = new Router();
const zooController = require("../controller/zoo.controller")

router.post("/zoos", zooController.createZoo);
router.get("/zoos", zooController.getAllZoo);
router.get("/zoos/:id", zooController.getOneZoo);
router.put("/zoos", zooController.updateZoo);
router.delete("/zoos/:id", zooController.deleteZoo);
router.get("/zoosort", zooController.getSortedZoo);

module.exports = router;