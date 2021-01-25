import formidable from "formidable";
import { v2 as cloudinary } from "cloudinary";
import verifier from "google-id-token-verifier";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async (req, res) => {
  if (req.method === "POST") {
    const token = req.headers.authorization;
    verifier.verify(token, process.env.GOOGLE_ID, (err, _tokenInfo) => {
      if (err) {
        res.status(403).json({
          message: "Forbidden",
        });
      } else {
        return new Promise(async (resolve, reject) => {
          try {
            const { images } = JSON.parse(req.body);
            const deletedResources = await cloudinary.api.delete_resources(images); //.uploader.destroy("s2cadja4fasncde4yee5");
            res.status(200).json(deletedResources);
            resolve();
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
  }
};
