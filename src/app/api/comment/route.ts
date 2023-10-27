import { NextRequest, NextResponse } from "next/server";
import mongoConnect from "../auth/[...nextauth]/database/mongoConnect";
import Twilio from "twilio";

export async function POST(req: NextRequest) {
  const mongoClient = await mongoConnect();
  const body = await req.json();
  const collection = mongoClient.db("resume").collection("comments");
  const authToken = process.env.TWILIO_TOKEN;
  const accountSid = process.env.TWILIO_SID;
  const client = Twilio(accountSid, authToken);

  client.messages
    .create({
      body: body,
      from: "+18556913924",
      to: "+19253008699",
    })
    .then((message) => console.log(message.sid));

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

  const documents = await collection.find({}).sort({ createdAt: -1 }).toArray();

  return NextResponse.json(documents);
}
