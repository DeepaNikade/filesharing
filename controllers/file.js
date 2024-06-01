const multer = require("multer");
const path = require("path");
const {v4:uuidv4}=require("uuid");

const fileModel=require("../models/file");

const uploaddirectorypath = path.join(__dirname, "..", "files");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploaddirectorypath);
  },
  filename:(req,file,cb)=>{
    // const filename="resume"+path.extname(file.originalname);
    const filename=uuidv4() + file.originalname;
    cb(null,filename);
  }
});

//middleware
const upload = multer({
  storage: storage,
}).single("dummy");

const uploadFile = async (req, res) => {
   
    upload(req, res, async (error) => {
      // console.log(req.body);
      if (error) {
        console.log("ERROR WHILE UPLOADING FILE", error);
        return res.status(500).json({
          success: false,
          message: "Something went wrong, please try again after sometime",
        });
      }
      // Save the file in DB
      // console.log(req.file);
  
      const newFile = new fileModel({
        originalFilename: req.file.originalname,
        newFilename: req.file.filename,
        path: req.file.path,
      });
  
      const newlyInsertedFile = await newFile.save();
  
      // console.log("File uploaded successfully");
      res.json({
        success: true,
        message: "File uploaded successfully",
        fileId: newlyInsertedFile._id,
      });
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
