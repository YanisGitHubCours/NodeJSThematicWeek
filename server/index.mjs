import router from "./routes.mjs"
import express from "express"
import bodyparser from "body-parser";

const port = 3000;
const app = express()

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

app.use(router)

app.listen(port, () => {
  console.log(`server listen at ${port}`)
})



