import multer from 'multer';
import path from 'path';

const destination = path.resolve('tmp');

const storage = multer.diskStorage({
  destination,
  filename: function (req, file, cb) {
    const { originalname } = file;
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const filename = ` ${originalname}_${uniqueSuffix}`;
    cb(null, filename);
  },
});

const limits = {
  fileSize: 1024 * 1024 * 5,
};

const upload = multer({ storage, limits });

export default upload;
