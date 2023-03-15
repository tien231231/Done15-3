const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");

const amenity = require("./routes/stay/amenity");
const stayCategory = require("./routes/stay/category");
const image = require("./routes/image");
const room = require("./routes/stay/room");
const hotel = require("./routes/stay/hotel");
const destination = require("./routes/stay/destination");
const authR = require("./routes/auth");

const app = express();
dotenv.config();

mongoose
  .connect(
    //"mongodb+srv://web63-final-project:CHiende1234@cluster0.gf9zdm8.mongodb.net/web63-final-project"
    "mongodb+srv://tien231ub:123123Ub@cluster0.l7ia4ne.mongodb.net/Data?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to Mongodb");
  })
  .catch((err) => console.error(err));

app.use(cors());
app.use(express.json());
app.use("/public", express.static("public"));
app.use("/api/image", image);
app.use("/api/stay/amenity", amenity);
app.use("/api/stay/category", stayCategory);
app.use("/api/stay/room", room);
app.use("/api/stay/hotel", hotel);
app.use("/api/stay/destination", destination);
app.use("/auth", authR);

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
