const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/auction", {
   useNewUrlParser: true,
   useUnifiedTopology: true,
})
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.error("Connection error:", error);
  });
const newSchema = new mongoose.Schema({
  text: {
    type: String,
    required:true
  },
  email: {
    type: String,
    required:true
  },
  password: {
    type: String,
    required:true
  }
});

const collection = mongoose.model("register", newSchema);
module.exports = collection;
