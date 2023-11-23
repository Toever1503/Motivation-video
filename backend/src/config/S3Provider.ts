import { S3Client } from "@aws-sdk/client-s3";

const ACCOUNT_ID = "898c805c9907d485952b90454f1e6a30";
const ACCESS_KEY_ID = "9ec2788450fbf6b1492b071f522ad3f9";
const SECRET_ACCESS_KEY = "cfb217b5a41570b23b373c753d6b83f49db7eee671d385becbe8c51cd82e3dd6";

export default  new S3Client({
   region: "auto",
   endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
   credentials: {
      accessKeyId: ACCESS_KEY_ID,
      secretAccessKey: SECRET_ACCESS_KEY,
   },
});