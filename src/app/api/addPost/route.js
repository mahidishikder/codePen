
import client from "@/db/dbClient";
import { NextResponse } from "next/server";

export async function POST(req) {
    const dbClient = await client;
    const db = dbClient.db("codePen");
    const collection = db.collection("userPosts"); // এখানে await লাগবে না
  
    const data = await req.json();
  
    // Optional: validation check করা যায় এখানে
    const result = await collection.insertOne(data);
  
    return NextResponse.json({
      message: "iPhone added successfully!",
      insertedId: result.insertedId,
    });
}

