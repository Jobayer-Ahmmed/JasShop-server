import express  from  "express"
import fashionModel from "../../models/Fashion.js"

var router = express.Router()

router.post("/fashion", async(req, res)=>{
    const fashionData = new fashionModel(req.body)
    const result = await fashionData.save()
    res.send(result)
})

export default router