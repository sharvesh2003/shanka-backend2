    const ToDoModel =require('../models/ToDoModels')

    module.exports.getToDo=async(req,res)=>{
        const toDo = await ToDoModel.find()
        res.send(toDo)
    }

    module.exports.saveToDo=async(req,res)=>{

        const {text} = req.body

        ToDoModel
        .create({text})
        .then((data)=>{
            console.log('Added Successfully');
            console.log(data);
            res.send(data)
        })
    }



    module.exports.deleteToDo = async (req, res) => {
        const { _id } = req.body;
        console.log('_id received on the server:', _id); // Add this line

        ToDoModel
        .findByIdAndDelete(_id)
        .then(() => res.send("Deleted Successfully"))
        .catch((err) => console.log(err));
    }

