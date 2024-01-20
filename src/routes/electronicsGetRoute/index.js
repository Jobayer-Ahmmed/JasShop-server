import express from "express"
import electronicsModel from "../../models/Electronics.js"

const router = express.Router()

router.get("/electronics", async(req, res)=>{
    const result = await electronicsModel.find()
    res.send(result)
})

export default router