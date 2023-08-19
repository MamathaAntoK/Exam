const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://admin:admin123@cluster0.qlazmk7.mongodb.net/TodosData?retryWrites=true&w=majority')
    .then(() => {
        console.log('Successfully connected to database')
    })
    .catch(() => {
        console.log("Not successfully connected to database")
    })

const listdata = mongoose.Schema({
    description: { type: String },
    status: { type: String }
})

app.get('/api/getdetails', (req, res) => {
  
        listdata.find().then((res)=>{
            res.json(res)
        }).catch(
            res.json("Error")
            
        )
      

        // res.json(list);
        // res.status(200)
        // console.log(list, 200)
   

})

app.post('/api/add', async(req, res) => {
    try {
        const adddata = req.body;
        const saveddata=await listdata(adddata);
        saveddata.save();
        res.json("Todo List Added Successfully")
        // res.status(200);
        console.log("Todo List Added Successfully")
    } catch (error) {
        res.status(404);
        console.log("Not Sucessfully Added")
    }
   


})
app.delete('api/delete', (req, res) => {

    

})

app.get('api/search', (req, res) => {

})





PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})
