import dbConnect from "@/db/connect";
import Places from "@/db/models/Places";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const place = await Places.findById(id);

    if (!id) {
      return;
      // response.status(404).json({ status: "Not Found!" });
    }
    response.status(200).json(place);
  }

  if (request.method === "PATCH") {
    Places.findByIdAndUpdate(id, updated);
  }
}
