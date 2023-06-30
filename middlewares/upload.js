const multer = require("multer");
const path = require("path");

const tempDir = path.join(__dirname, "../", "tmp");

const multerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    const fileName = req.user.id;
    cb(null, fileName);
  },
});

const upload = multer({
  storage: multerConfig,
});

module.exports = upload;
