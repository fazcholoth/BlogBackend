// multerConfig.js
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({});

const fileFilter = (req, file, cb) => {
  let ext = path.extname(file?.originalname);
  if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
    cb(new Error('file type is not supported'), false);
    return;
  }
  cb(null, true);
};

export default multer({ storage, fileFilter });
