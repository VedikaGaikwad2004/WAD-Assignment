const express = require("express")
const mongoose = require("mongoose")
const bodyParser=require("body-parser")


const app =express();
app.use(bodyParser.json());
mongoose.connect('mongodb+srv://vedikagaikwad:vedika123@cluster1.ekbrx.mongodb.net/node?retryWrites=true&w=majority&appName=Cluster1')

const studentSchema = new mongoose.Schema({
    name:String,
    mark:Number
});
const Student = mongoose.model("Student",studentSchema)

app.listen(3000,()=>{
    console.log("server is running on port http://localhost:3000")
})

app.get('/',(req,res)=>{
    res.send("welcome to app");
});
 
app.get('/students',async(req,res)=>{
    const students = await Student.find();
    res.send(students);
})

app.get('/students/:name',async(req,res)=>{
    const{name} =req.params ;
    const students = await Student.find({name});
    res.send(students);


})
app.post('/students',async(req,res)=>{
    const {name,mark} = req.body;
    const student = new Student({name,mark});
    await student.save();
    res.send(student);
})
app.put('/students/:id', async (req, res) => {
    const { id } = req.params;
    const { name, mark } = req.body;
    const student = await Student.findByIdAndUpdate(id, { name, mark }, { new: true });
    res.send(student);
});
app.delete('/students/:id', async (req, res) => {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);
    res.send({ message: "Student deleted successfully" });
});

