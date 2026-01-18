import dbConnect from "@/lib/dbConnect";



// GET মেথড: ডাটাবেস থেকে ডাটা দেখার জন্য
export async function GET(request) {
  try {
    const collection = await dbConnect("add-items");
    const result = await collection.find({}).toArray();
    return Response.json({ success: true, foods: result });
  } catch (error) {
    return Response.json({ success: false, foods: [], error: error.message }, { status: 500 });
  }
}

// POST মেথড: নতুন খাবার ডাটাবেসে সেভ করার জন্য
export async function POST(request) {
  try {
    const collection = await dbConnect("add-items");
    const body = await request.json(); 
    
    const newItem = {
      ...body,
      createdAt: new Date()
    };
    
    const result = await collection.insertOne(newItem);
    
    return Response.json({ 
      success: true, 
      insertedId: result.insertedId 
    }, { status: 201 }); 
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}