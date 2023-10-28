import { NextRequest, NextResponse } from "next/server";
import mongoConnect from "../auth/[...nextauth]/database/mongoConnect";
import { getServerSession } from "next-auth";
import Twilio from "twilio";

export async function POST(req: NextRequest) {
  const session = await getServerSession();
  if (session) {
    const mongoClient = await mongoConnect();
    const body = await req.json();
    const collection = mongoClient.db("resume").collection("comments");
    const authToken = process.env.TWILIO_TOKEN;
    const accountSid = process.env.TWILIO_SID;
    const twilioMessageSid = process.env.TWILIO_MESSAGE_ID;
    const myNumber = process.env.TWILIO_PERSONAL;
    const client = Twilio(accountSid, authToken);

    const result = await collection.insertOne({
      name: body.name,
      image: body.image,
      message: body.message,
      createdAt: body.createdAt,
    });

    client.messages
      .create({
        body: `"${body.message}" - ${body.name}` || "error",
        messagingServiceSid: twilioMessageSid,
        to: myNumber,
      })
      .then((message) => console.log(message.sid));
    return NextResponse.json(result);
  }
  return NextResponse.json("No session found, please log in");
}

export async function GET() {
  const client = await mongoConnect();
  const collection = client.db("resume").collection("comments");

  const documents = await collection.find({}).sort({ createdAt: -1 }).toArray();

  return NextResponse.json(documents);
}
