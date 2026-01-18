import { MongoClient, ServerApiVersion } from "mongodb";

 const dbConnect = async (collectionName) => {
  const uri = process.env.MONGODB_URI; // নিশ্চিত করুন আপনার .env.local ফাইলে কানেকশন স্ট্রিং আছে
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    const db = client.db("food-menu-db"); // আপনার ডাটাবেসের নাম এখানে দিন
    return db.collection(collectionName);
  } catch (error) {
    console.log("Database connection error:", error);
  }
};
export default dbConnect