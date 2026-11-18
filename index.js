import express from "express"


const app = express()
 const Port =5500

 app.get("/", (req, res) => {
    res.send("welcome to my website")
})

 app.get("/Sport", (req, res) => {
    // res.send("sport is for physical fitness")
   res.status(200).json({

        status : "true",
        data : [1,2,3]
    })
})


 app.post("/signup", (req, res) => {
    // res.send("sport is for physical fitness")
   res.status(201).json({

        status : "true",
        data : [1,2,3],
        message:"signup successfully"
    })
})

app.delete("/del", (req, res) => {
    res.status(200).json({
        status:"true",
        message : "user deleted successfully!"
    })
})

app.put("/edit", (req, res) => {
    res.status(200).json({
        status:"true",
        message : "user edited successfully!"
    })
})




app.listen(Port,()=>{

    console.log(`server is running on port ${Port}`);
})



