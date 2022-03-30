import router from "./routes.mjs"
import express from "express"

const port = 3009;
const app = express()

app.use(express.json({extended:false}))
app.use(router)

app.listen(port, () => {
  console.log(`server listen at ${port}`)
})



