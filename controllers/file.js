const multer = require("multer");
const path = require("path");

const uploaddirectorypath = path.join(__dirname, "..", "files");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploaddirectorypath);
  },
});

//middleware
const upload = multer({
  storage: storage,
}).array("dummy", 10);

const uploadFile = async (req, res) => {
  upload(req, res, (error) => {
    if (error) {
      console.log("Error while uploading file", error);
      return;
    }
    res.json({
      success: true,
      message: "File uploaded succesfully",
    });
  });
  res.json({
    success: true,
    message: "api to upload Image",
  });
};
const generateDynamicLink = async () => {};
const DownloadFile = async () => {};
const sendFile = async () => {};

const filecontroller = {
  uploadFile,
  generateDynamicLink,
  DownloadFile,
  sendFile,
};

module.exports = filecontroller;
