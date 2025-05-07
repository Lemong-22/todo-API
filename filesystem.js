import fs from 'fs'


function ambil(a){
    fs.writeFile('ucup.txt', a ,'utf-8', (err)=>{
        if (err){
            console.log("terjadi kesalahan");
        } else {
        console.log("data berhasil disalin")
        }
    })
}

fs.readFile('iclik.txt','utf-8', (err,data)=>{
    if (err){
        console.log("ga work",err)
    } else {
    console.log(data)
    ambil(data)
    }
})
