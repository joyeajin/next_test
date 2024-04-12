import { randomInt } from "crypto";

export default function handler(req, res) {
  if (req.method === "GET") {
    const randomNumber = randomInt(1, 100);

    res.status(200).json({ world: randomNumber });
  } else if (req.method === "POST") {
    console.log("Received POST request:", req.body);

    res.status(200).json(req.body);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
