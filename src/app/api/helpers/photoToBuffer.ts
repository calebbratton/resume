import fs from "fs";
import FileType from "file-type";

const API_URL_HERE = "your-api-url.whatever";

async function savePhotoFromAPI(name: string, response: Response) {
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const fileType = await FileType.fileTypeFromBuffer(buffer);
  if (fileType.ext) {
    const outputFileName = `${name}.${fileType.ext}`;
    fs.createWriteStream(outputFileName).write(buffer);
    return outputFileName;
  } else {
    console.log(
      "File type could not be reliably determined! The binary data may be malformed! No file saved!"
    );
  }
}
