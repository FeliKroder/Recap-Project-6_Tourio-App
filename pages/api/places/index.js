import dbConnect from "@/db/connect";
import Places from "@/db/models/Places";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const place = await Places.find();
    response.status(200).json(place);
  } else {
    response.status(405).json({ message: "Method not allowed" });
  }

  if (request.method === "POST") {
    try {
      const placeData = request.body;
      await Places.create(placeData);

      response.status(201).json({ status: "Place created" });
    } catch (error) {
      console.log("Error:", error);
      response.status(404).json({ error: error.message });
    }
  }
}
