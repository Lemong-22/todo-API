import express from 'express'
const app = express()
app.use(express.json())

app.use((req,res,next)=>{
    const waktu = new Date().toISOString()
    console.log(`${waktu}, METHOD : ${req.method}, url : ${req.url}`)
    next()
})

app.get('/', (req,res)=>{
    res.send("selamat datang di to-do API")
});

app.get('/tasks', (req,res)=>{
    res.send(tasks)
})
let tasks=[]
app.post("/tasks", (req, res) => {
    console.log("Data yang diterima di req.body: ", req.body);

    const taskDataFromClient = req.body;

    if (!taskDataFromClient || !taskDataFromClient.name || taskDataFromClient.name.trim() === "") {
        return res.status(400).send({ message: "Nama tugas tidak boleh kosong dan harus ada!" });
    }

    // 2. Buat ID baru untuk tugas
    // Logika sederhana: jika tasks kosong, ID = 1. Jika tidak, ID = ID terakhir + 1.
    let newTaskId = 1;
    if (tasks.length > 0) {
        newTaskId = tasks[tasks.length - 1].id + 1;
    }

    // 3. Buat objek tugas baru dengan struktur yang benar
    const newTask = {
        id: newTaskId,
        name: taskDataFromClient.name.trim() // Ambil nama dari client, trim whitespace
    };
    tasks.push(newTask);

    // 5. Kirim respons sukses ke client
    // Status 201 artinya "Created" (resource baru berhasil dibuat)
    // Kirim juga objek tugas yang baru dibuat
    console.log("Tugas baru ditambahkan:", newTask);
    console.log("Array tasks sekarang:", tasks);
    res.status(201).send(newTask);
});

app.listen(3000, ()=>{
    console.log("http://localhost:3000")
})