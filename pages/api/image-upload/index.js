import formidable from "formidable";
import { v2 as cloudinary } from "cloudinary";
import verifier from "google-id-token-verifier";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async (req, res) => {
  const token = req.headers.authorization;
  verifier.verify(token, process.env.GOOGLE_ID, (err, _tokenInfo) => {
    if (err) {
      res.status(403).json({
        message: "Forbidden",
      });
    } else {
      return new Promise((resolve, reject) => {
        try {
          const form = new formidable.IncomingForm({ keepExtensions: true });
          form.parse(req, async (_err, _fields, files) => {
            const { file } = files;
            const uploadResponse = await cloudinary.uploader.upload(file.path);
            res.status(200).json(uploadResponse);
            resolve();
          });
        } catch (error) {
          res.status(500).json({
            message: "failure",
            error,
          });
          reject();
        }
      });
    }
  });
};

export const config = {
  api: {
    bodyParser: false,
  },
};
