const express=require("express");
const filecontroller=require("../controllers/file");

const router=express.Router();

router.post("/api/files/",filecontroller.uploadFile);
router.get("files/:uuid",filecontroller.generateDynamicLink);
router.get("files/download/:uuid",filecontroller.DownloadFile);
router.post("api/files/send",filecontroller.sendFile);

module.exports=router;