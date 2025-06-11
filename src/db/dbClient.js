import { MongoClient } from "mongodb";

const uri = "mongodb+srv://codePen:17nmYiraCm4Pm21L@cluster0.xf2ny.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const mongoClient = new MongoClient(uri, {});
const clientDB = mongoClient.connect();

export default clientDB;