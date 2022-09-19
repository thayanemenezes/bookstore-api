import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:12qw@clusteralura.n0fbqf2.mongodb.net/alura-api");

let db = mongoose.connection;

export default db;