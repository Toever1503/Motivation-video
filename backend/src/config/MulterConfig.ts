"use strict";
import multer from "multer";
const FileProvider = multer({ storage: multer.memoryStorage(), limits: { fieldSize: 1000 * 1024 * 1024 } });
export default FileProvider;