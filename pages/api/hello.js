// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import UserContact from "../../model/userContact";
import connectMongo from "../../lib/mongo/index";

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

export default async function handler(req, res) {
  await connectMongo();

  // Get data submitted in request's body.
  const body = req.body;
  console.log("body: ", body);

  if (!body.name || !body.surname) {
    return res.status(400).json({ err: "NOPE" });
  }
  await UserContact.create(body, function (err, data) {
    return res
      .status(200)
      .json({ data: `${body.name} ${body.surname} ${body.email}` });
  });
}
