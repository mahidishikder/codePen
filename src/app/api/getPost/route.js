import client from "@/db/dbClient";
import { NextResponse } from "next/server";


export async function GET() {
  const dbClient = await client;
  const db = dbClient.db('codePen'); // এখানে await লাগবে না
  const collection = db.collection('userPosts'); // এখানে await লাগবে না
  const posts = await collection.find({}).toArray();

  return NextResponse.json(posts);
}