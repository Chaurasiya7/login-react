const express=require("express"); 
const cors= require ("cors");
const collection =require("./mongo")
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post("/",async(req,res)=>{
    const{email,password}=req.body;
    try{
        const check= await collection.findOne({email:email})
        if (!check) {
            return res.status(400).send("User not found");
        }
    
        if (password) {
            res.status(200).send("Success");
        } else {
            res.status(401).send("Invalid password");
        }
    }
    catch (e) {
        console.error("Login error:", e);
        res.status(500).send("Internal server error");
    }
})




app.post("/api/insert", async (req, res) => {
    const { text, email, password } = req.body;
    try {
    const data= {
       text: text,
       email:email,
       password:password
   };
  
    await collection.insertMany([data]);
       res.status(200).send("Data inserted successfully");
   } catch (error) {
       console.error("Insertion error:", error);
       res.status(500).send("Internal server error");
   }
});


app.listen(5000,()=>console.log("App is running"));