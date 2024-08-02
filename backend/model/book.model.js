import mongoose from "mongoose";
const bookSchema = mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
  title: String,
})

//Book is a collection when data is come
// schema me jis feild me data aayega wo book Collection me store ho jayea 

const Book =  mongoose.model("Book", bookSchema);

export default Book;