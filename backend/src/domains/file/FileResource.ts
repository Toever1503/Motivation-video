import { Router } from "express";
import {
    PutObjectCommand
 } from "@aws-sdk/client-s3";
import S3Provider from "../../config/S3Provider";
import FileProvider from "../../config/MulterConfig";

const fileRouter = Router();

// upload single file
fileRouter.post('/', FileProvider.single("file"), async function (req: any, res) {

   if (req.file && req.query.bucket) {
      console.log("begin uploading file...");

      const fKey = req.query.path ? req.query.path + req.file.originalname : req.file.originalname;
      const command = new PutObjectCommand({
         Bucket: req.query.bucket,
         Key: fKey,
         Body: req.file.buffer,
         ContentType: req.file.mimetype
      });

      try {
         await S3Provider.send(command);
        //  const fileRepository = await getFileRepository();
        //  const fileData = await fileRepository.create({
        //     originalname: req.file.originalname,
        //     fileName: req.file.originalname,
        //     fileType: req.file.mimetype,
        //     serverPath: fKey,
        //     web_url: "https://pub-ff2d97c1c56d4ab280f32abdb3775345.r2.dev/" + fKey,
        //     isConfirmed: false
        //  });
        //  res.send(fileData);
      } catch (err) {
         console.error(err);
         res.status(500).send(JSON.stringify({
            code: 500,
            message: "Failed upload file"
         }));
      }
   }
   else
      res.status(400).send(JSON.stringify({
         code: 500,
         message: "Missed parameters"
      }));

});


export default fileRouter;