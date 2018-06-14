
// This file has the information for all of the notes
// require mongoose
var mongoose = require("mongoose");
// Define the schemas
// This is the same as in the article, but need a ref in this file
var Schema = mongoose.Schema;

// Create a new object for Note
var NoteSchema = new Schema({
    body: String,
    title: String
});

// This uses the above schema to create the model using the model method.
var Note = mongoose.model("Note", NoteSchema);

// Export the Note model
module.exports = Note;