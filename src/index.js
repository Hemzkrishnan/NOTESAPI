const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");

const mongoose = require("mongoose");

app.use(express.json());

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) =>{
    res.send("Hello");
});


mongoose.connect("mongodb+srv://hemalatharockford4:hema123@cluster0.j8xwk1v.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    app.listen(5000, () =>{
        console.log("Server started on Port no. 5000");
    });
})
.catch((error)=>{
    console.log(error);
});


