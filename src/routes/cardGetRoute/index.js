import express  from  "express"
import fashionModel from "../../models/Fashion.js"

var router = express.Router()

router.get("/card", async(req, res)=>{
    const type = req.query.type
    const _id = req.query.id
    const query = {type, _id}
    const result = await fashionModel.find(query)
    res.send(result)
})

export default router