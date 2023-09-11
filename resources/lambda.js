const AWS = require("aws-sdk");
const s3 = new AWS.S3();

const bucketName = process.env.BUCKET;

exports.main = async function (event, context) {
  try {
    console.log("Entering to Lamda ");
    const data = await s3.listObjects({ Bucket: bucketName }).promise();
    console.log(data);
  } catch (error) {
    return {
      statusCode: 400,
      headers: {},
      body: JSON.stringify("woopsies"),
    };
  }
};
