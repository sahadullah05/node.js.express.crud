
import express from "express"

const app = express()

app.use(express.json())

// app.use(bodyParser())



let users = [
    {
        username : "sahad ullah",
        email : "sahi@gmail.com"
    },
    {
        username : "Ali",
        email : "Ali@gmail.com"
    },
]


app.post("/user", (req, res) => {
    console.log(req);

    const body =req.body


    if(body){
    users.push(body)
    }
      if(!body){
    return res.status(400).json({
        status : "true",
        message: "problem"
})
   }

    res.status(200).json({
        status:"true",
        message:"add succssefully"
    })
    
})

app.get("/user", (req, res) => {

    res.status(200).json({
        status : "true",
        data : users,
      
    })
})


app.get("/single-user/:username", (req, res) => {
    
    const {username} = req.params;

    let findUser = users.find((user) => {
        if(user.username == username){
            return user
        }
        
    })
     res.status(200).json({
        status : "true",
        message: "data of single user",
        data : findUser
    })
})

app.put("/user/:username", (req, res) => {

    const body = req.body;

      const {username} = req.params;

   users = users.map((user) => {

    if(user.username == body.username){
        
        return user = body
    }

    return user
})

    res.status(200).json({
        status : "true",
        message:"updated successfully!"
    })
})



app.delete("/user/:username", (req, res) => {

    const {username} = req.params

   users = users.filter((user) => 
    user.username != username)

    res.status(200).json({
         status : "true",
        message:"deleted user successfully...."

    })
})

app.listen(5500, () => {
console.log("server is listening on port 5500");

})