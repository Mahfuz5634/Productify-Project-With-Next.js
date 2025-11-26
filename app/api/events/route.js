import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("productify"); // তোমার DB নাম
    const events = await db.collection("event").find({}).toArray();
    return new Response(JSON.stringify(events), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
