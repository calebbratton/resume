import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "../../../../prisma/index";
import { uploadImageToS3 } from "../helpers/s3Bucket";

export async function POST(req: NextRequest) {
  const session = await getServerSession();
  var imageUrl = "/defaultProfile.jpg";
  if (session) {
    const body: {
      name: string;
      image: string;
      message: string;
      createdAt: string;
    } = await req.json();

    const getImage = async () => {
      try {
        const response = await fetch(body.image);
        const res = await response.blob();
        imageUrl = `${process.env.BASE_S3_URL}/${body.name.replace(
          / /g,
          "-"
        )}${getFileExtensionFromBlob(res)}`;

        return res;
      } catch (error) {
        console.error("Error fetching image:", error);
        throw error;
      }
    };

    const getFileExtensionFromBlob = (blob: Blob) => {
      const mimeTypeToExtension = {
        "image/jpeg": ".jpg",
        "image/png": ".png",
        "image/gif": ".gif",
        "image/webp": ".webp",
        "image/svg+xml": ".svg",
      };

      return mimeTypeToExtension[blob.type] || "";
    };

    const putS3Image = async (imageBlob: Blob) => {
      try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", imageBlob.type);
        myHeaders.append("X-Auth-Token", process.env.S3_API_KEY);

        const res = await fetch(imageUrl, {
          method: "PUT",
          headers: myHeaders,
          body: imageBlob,
        });

        return res;
      } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
      }
    };

    const userImage = await getImage();
    await putS3Image(userImage);

    const result = await prisma.comments.create({
      data: {
        name: body.name,
        image: imageUrl,
        message: body.message,
        createdAt: body.createdAt,
      },
    });

    return NextResponse.json(result);
  }
  return NextResponse.json("No session found, please log in");
}

export async function GET() {
  const docs = await prisma.comments.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(docs);
}

export async function PUT(req: NextRequest) {
  const session = await getServerSession();
  if (session && session.user.email === process.env.ADMIN_EMAIL) {
    const body = await req.json();

    await prisma.comments.delete({ where: { id: body.id } });
  }
  return NextResponse.json("item deleted");
}
