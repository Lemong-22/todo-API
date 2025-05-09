import express from 'express'
const app = express()

app.get('/produk/:nama',(req,res)=>{
    let produk = req.params.nama
    let warna = req.query.warna
    res.send(`detail produk : ${produk} dengan warna ${warna}`)
})



app.listen(3000,()=>{
    console.log("server run di http://localhost:3000/produk/laptop?warna=biru")
})