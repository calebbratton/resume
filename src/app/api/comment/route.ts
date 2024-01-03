import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "../../../../prisma/index";
import { uploadImageToS3 } from "../helpers/s3Bucket";

export async function POST(req: NextRequest) {
  const session = await getServerSession();
  if (session) {
    const body: {
      name: string;
      image: string;
      message: string;
      createdAt: string;
    } = await req.json();

    const getImage = async () => {
      const res = fetch(body.image).then((response) => {
        return response.blob();
      });
      return res;
    };

    const userImage = await getImage();

    // uploadImageToS3(
    //   "resume-user-images/images",
    //   `${body.name}.jpg`,
    //   userImage,
    //   "image/jpeg"

    // );

    const putS3Image = async () => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "image/jpeg");
      const res = await fetch(
        `https://k9iq6pknw7.execute-api.us-east-2.amazonaws.com/dev/resume-user-data/${body.name}.jpg`,
        { method: "PUT", headers: myHeaders, body: userImage }
      );
      return res;
    };

    putS3Image();

    const result = await prisma.comments.create({
      data: {
        name: body.name,
        image: body.image,
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
