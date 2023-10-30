import { NextRequest, NextResponse } from "next/server";
import client from "../auth/[...nextauth]/database/mongoConnect";
import { getServerSession } from "next-auth";
import Twilio from "twilio";

export async function POST(req: NextRequest) {
  const session = await getServerSession();
  if (session) {
    // const mongoClient = await db.connect();
    const body = await req.json();
    const collection = client.db("resume").collection("comments");
    const authToken = process.env.TWILIO_TOKEN;
    const accountSid = process.env.TWILIO_SID;
    const twilioNumber = process.env.TWILIO_NUMBER;
    const myNumber = process.env.TWILIO_PERSONAL;
    const twilioClient = Twilio(accountSid, authToken);
    // client.messages
    //   .create({
    //     body: `"${body.message}" - ${body.name}` || "error",
    //     from: twilioNumber,
    //     to: myNumber,
    //   })
    //   .then((message) => console.log(message.sid));

    const result = await collection.insertOne({
      name: body.name,
      image: body.image,
      message: body.message,
      createdAt: body.createdAt,
    });

    twilioClient.messages
      .create({
        body: `"${body.message}" - ${body.name}` || "error",
        from: twilioNumber,
        to: myNumber,
      })
      .then((message) => console.log(message.sid));
    return NextResponse.json(result);
  }
  return NextResponse.json("No session found, please log in");
}

export async function GET() {
  const collection = client.db("resume").collection("comments");

  const documents = await collection.find({}).sort({ createdAt: -1 }).toArray();

  return NextResponse.json(documents);
}
