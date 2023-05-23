import mongoose from "mongoose";

mongoose.connect(
	"mongodb+srv://veronicahp:mongo123@alura.se0hue0.mongodb.net/alura-node"
);

let db = mongoose.connection;

export default db;
