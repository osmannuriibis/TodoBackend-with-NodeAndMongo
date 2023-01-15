const todoModel = require("../models/todoModel");

const todoAdd = async (req, res) => {
    console.log(req.body);
    try {
        const _todo = await todoModel.findOne({ name: req.body.name });
        if (_todo) {
            // Aynı isimli model işlemi
        }
        const todoAdd = new todoModel(req.body);
        console.log("todoAdd");
        console.log(todoAdd);
        return await todoAdd.save().then((val) => {
            return res.status(201).json(todoAdd.toJSON())
        })
            .catch((err) => {
                return res.status(400).send("olmadı");
            });


    } catch (error) {
        res.send("catch");
    }

    res.send("Bura ekle!");
}

const todoGetAll = async (req, res) => {
    const {page} = req.query ;

    //Sayfa durumuna göre belli sayıda model çekme
    const limit = 2;
    const skip  = Number(page - 1) * limit;
    
    try {
        const todoGetAll = await todoModel.find({}).limit(limit).skip(skip);

        return res.status(200).json({
            success: true,
            data: todoGetAll
        })
    } catch (error) {

    }
}

const todoUpdate = async (req, res) => {
    const { id } = req.params;
    try {
        const todoUpdate = await todoModel.findByIdAndUpdate(id, req, body)
        if (todoUpdate) {
            return res.status(200).json({
                success: true,
                message: "Updated successfully"
            })
        } else {
            return res.status(400).json({
                success: false,
                message: "Update failure"
            })
        }

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Service failure"
        });
    }
}

const todoDelete = async (req, res) => {
    const { id } = req.params;

    try {
        const model = await todoModel.findByIdAndDelete(id);
        console.log("model");
        console.log(model == null);
        if (model) {
            return res.status(200).json({
                success: true,
                message: "Successful",
                data: model.toJSON()
            })
        } else {
            return res.status(400).json({
                success: false,
                message: "Todo haven't found"
            });
        }

    } catch (error) {
        return model.status(500).json({
            success: false,
            message: "Failure"
        });
    }
}

const todoGet = async (req, res) => {
    const { id } = req.params;

    try {
        const model = await todoModel.findById(id);

        if (model) {
            return res.status(200).json(
                {
                    success: true,
                    data: model.toJSON()
                }
            );
        } else {
            return res.status(400).json(
                {
                    success: false,
                    message :"Doesn't exist"
                }
            );
        }
    } catch (error) {
            return res.status(500).json({
                success : false,
                error: 1,
                message : "Service failure"
            });
    }
}

module.exports = { todoAdd, todoGetAll, todoUpdate, todoDelete, todoGet };