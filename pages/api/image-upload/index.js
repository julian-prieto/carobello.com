import formidable from "formidable";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async (req, res) => {
  return new Promise(async (resolve, reject) => {
    const form = new formidable.IncomingForm({ keepExtensions: true });

    form.parse(req, async (err, fields, files) => {
      const { file } = files;
      try {
        const timestamp = Math.round(new Date().getTime() / 1000);
        const signature = cloudinary.utils.api_sign_request(
          { timestamp },
          process.env.CLOUDINARY_SECRET
        );
        const uploadResponse = await cloudinary.uploader.upload(file.path, {
          api_key: process.env.NEXT_PUBLIC_CLOUDINARY_KEY,
          signature,
          timestamp,
        });

        res.status(200).json(uploadResponse);
        resolve();
      } catch (error) {
        res.status(500).json({ err: "Something went wrong" });
        reject();
      }
    });
  });
};

export const config = {
  api: {
    bodyParser: false,
  },
};
