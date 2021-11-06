const router = require("express").Router();
const uploadCtrl = require("../controllers/uploadCtrl");

router.post("/upload", uploadCtrl.uploadFile);
router.post("/destroy", uploadCtrl.deleteFile);

module.exports = router;
