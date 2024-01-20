import express from "express"
import applyMiddleWare from "./middlewares/applyMiddleWare.js"
import fashionPost from "./routes/fashionPostRoute/index.js"
import fashionGet from "./routes/fashionGetRoute/index.js"
import cardGet from "./routes/cardGetRoute/index.js"
import cartPost from "./routes/cartPostRoute/index.js"
import cartGet from "./routes/cartGetRoute/index.js"
import cartDelete from "./routes/cartDeleteRoute/index.js"
import beautyGet from "./routes/beautyGetRoute/index.js"
import electronicsGet from "./routes/electronicsGetRoute/index.js"

const app =express()


applyMiddleWare(app)

app.use(fashionPost)
app.use(fashionGet)
app.use(cardGet)
app.use(cartPost)
app.use(cartGet)
app.use(cartDelete)
app.use(beautyGet)
app.use(electronicsGet)

app.get("/health", (req, res)=>{
    res.send("JasShop server is running")
})


app.all("*", (req, res, next)=>{
    const myErr = new Error(`The request URL is invalid : [${req.url}]`)
    myErr.status=404
    next(myErr)
})

app.use((err, req, res, next)=>{
    res.status(err.status || 500).json({message : err.message})
})

export default app