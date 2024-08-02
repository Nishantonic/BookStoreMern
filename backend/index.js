import express from "express"
import  dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors";

import bookRoute from "./routes/book.route.js";
import userRoute from "./routes/user.route.js"

const app = express();
app.use(cors());
app.use(express.json());


dotenv.config();


const PORT = process.env.PORT || 8001;
const URI = process.env.URI;
app.get("/", (req, res)=>{
  res.send("Hello  Banger!")
});

// Connect to MongoDb


try {
  
mongoose
.connect(URI)
.then(()=>{
  console.log(`Connected to Database`);
  app.listen(PORT, console.log(`Server Connected at ${PORT}`))
})
} catch (error) {
  console.log(error);
  
}

app.use("/book", bookRoute)
app.use("/user", userRoute )
  


