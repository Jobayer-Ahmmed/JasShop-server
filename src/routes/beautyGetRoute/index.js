import express from "express"
import beautyModel from "../../models/Beauty.js"

const router = express.Router()

router.get("/beauty", async(req, res)=>{
    const result = await beautyModel.find()
    res.send(result)
})

export default router