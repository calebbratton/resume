import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "../../../../prisma/index";

export async function POST(req: NextRequest) {
  const session = await getServerSession();
  if (session) {
    const body: {
      name: string;
      image: string;
      message: string;
      createdAt: string;
    } = await req.json();

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
