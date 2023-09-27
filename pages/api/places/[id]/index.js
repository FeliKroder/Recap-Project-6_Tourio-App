import dbConnect from "@/db/connect";
import Places from "@/db/models/Places";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (!id) {
    return;
  }

  if (request.method === "GET") {
    const place = await Places.findById(id);
    if (!place) {
      response.status(404).json({ status: "Not found" });
    }
    response.status(200).json(place);
  }

  if (request.method === "PUT") {
    const updatedPlace = request.body;
    await Places.findByIdAndUpdate(id, updatedPlace);
    response.status(200).json("Place updated");
  }

  if (request.method === "DELETE") {
    await Places.findByIdAndDelete(id);
    response.status(200).json({ status: `Place ${id} successfully deleted` });
  }
}
