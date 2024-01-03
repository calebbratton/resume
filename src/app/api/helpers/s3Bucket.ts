// Import the AWS SDK
const AWS = require("aws-sdk");

// Configure the AWS region
AWS.config.update({ region: "us-west-2" });

// Create a new instance of S3
const s3 = new AWS.S3();

/**
 * Uploads an image to an S3 bucket
 * @param {string} bucketName - Name of the S3 bucket
 * @param {string} key - Key for the uploaded image
 * @param {Buffer} body - Image data
 * @param {string} contentType - Content type of the image (e.g., 'image/jpeg')
 */
export function uploadImageToS3(
  bucketName: string,
  key: string,
  body: Buffer,
  contentType: string
) {
  const params = {
    Bucket: bucketName,
    Key: key,
    Body: body,
    ContentType: contentType,
    ACL: "public-read", // or 'private', depending on your needs
  };

  s3.upload(params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Upload Success", data.Location);
    }
  });
}

// Example usage:
// uploadImageToS3('resume-user-images/images', 'example.jpg', imageBuffer, 'image/jpeg');
