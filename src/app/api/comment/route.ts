import { NextRequest, NextResponse } from "next/server";
import mongoConnect from "../auth/[...nextauth]/database/mongoConnect";

export async function POST(req: NextRequest) {
  const client = await mongoConnect();
  const body = await req.json();
  const collection = client.db("resume").collection("comments");

  const result = await collection.insertOne({
    name: body.name,
    image: body.image,
    message: body.message,
    createdAt: body.createdAt,
  });

  return NextResponse.json(result);
}

export async function GET() {
  const client = await mongoConnect();
  const collection = client.db("resume").collection("comments");

  const documents = await collection.find({}).toArray();

  return NextResponse.json(documents);
}
