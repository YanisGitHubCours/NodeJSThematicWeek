import express from "express"
import {add, getAll, getByName} from "./products.mjs"

const router = express.Router()

router.get('/', (req, res) => {
    res.send('/products/name => un produit spé & /products => tout les produits')
})

router.get('/products', (req,res) => {
    res.send(getAll())
})

router.get('/products/:name',(req,res) => {
    const name = req.params.name
    res.send(getByName(req.params.name))
})

router.post('/products',(req,res) => {
    const {name, quantity} = req.body
    add(name,quantity)
    res.send("ajout ok")
})

export default router