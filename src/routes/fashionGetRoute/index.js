import express  from  "express"
import fashionModel from "../../models/Fashion.js"

var router = express.Router()

router.get("/fashion", async(req, res)=>{
    const result = await fashionModel.find()
    res.send(result)
})

export default router