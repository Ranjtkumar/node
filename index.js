// require("./iife")
// const add = require("./add")
// console.log("hello")
// console.log(add(2,3))
// console.log(add(3,4))
// const Building = require("./building")
// const building = require("./building")
// console.log(building.getNmae())
// building.setNmae("villa")
// console.log(building.getNmae())

// const a = new Building("House")
// console.log(a.getName())
// a.setName("villa")
// console.log(a.getName()) 

// const building1 = require("./building")
// building1.setNmae("naha")
// const b = new   Building.Building("House")
// console.log(b.getName())

// const c = new Building.Car("Jaquar")
// console.log(c.getName())

// const add = require("./math")

// const {add,sub,div}  = require("./math")
// add(2,3) 
// sub(7,3)
// div(12,3)

// const db = require("./db.json")
// console.log(db)
// console.log(db?.name)

// console.log("Ranjit")

// const path = require("node:path")
// console.log(__filename)
// console.log(__dirname)


// const buffer = new Buffer("Hello world")
// console.log(buffer.toString())
// buffer.write("Welcome")
// console.log(buffer.toString())
// console.log(buffer.slice(0,4).toString())
// const buffer1 = Buffer.from("hello","utf-8")
// console.log(buffer1)

const fs = require("node:fs")

// fs.writeFileSync("./file1.txt","Hello world")

// fs.writeFile("data.txt","Hi world",{flag:"a"},(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("File written successfully")
//     }
    
// })

//delete
// fs.unlink("./data.txt",(err)=>{
//     if(err){
//         console.log(err)
//     }else{

//         console.log("Deleted successfully")
//     }
// })


//stream

// const zlib = require("zlib")
// const zip = zlib.createGzip()
// const readableStream = fs.createReadStream("./file1.txt",{encoding:"utf-8",highWaterMark:2})
// const writeableStream = fs.createWriteStream("./file2.txt")

// readableStream.on("data",(chunk)=>{
//     console.log(chunk)
//     writeableStream.write(chunk)
// })

//pipes
// readableStream.pipe(createWriteStream("./file4.txt"))
// readableStream.pipe(zip).pipe(fs.WriteStream("./file3.txt.zip"))

const http = require("node:http")
const json = require("./db.json")
const server = http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    if(req.url==="/"){
        res.writeHead(200,{"content-type":"text/plain"})
         res.end("Homepage")
    }else if(req.url==="/api"){
        res.writeHead(200,{"content-type":"text/json"})
        res.end(JSON.stringify(json))
    }else if(req.url==="/about"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("About page")
    }else if(req.url==="/html") {
        res.writeHead(200,{"content-type":"text/html"})
         fs.createReadStream("./index.html").pipe(res)
    }else {
        res.writeHead(404)
        res.end("Pge not found")
    }

})

server.listen(3002,()=>{
    console.log("server is running on port 3002")
})

// const path = require("node:path")
// console.log(path.basename(__filename))
// console.log(path.isAbsolute(__filename))
// console.log(path.isAbsolute(path.basename(__filename)))

// console.log(path.format(path.parse(__filename)))

// console.log(path.join('form','form1','index.js'))
// console.log(path.resolve('form','form1','index.js'))

// const readableStream = fs.createReadStream("./file1.txt",{encoding:"utf-8"})
// // const writeableStream = fs.createWriteStream("./file4.txt")

// readableStream.pipe(fs.WriteStream("./file4.txt"))

// readableStream.on("data",(chunk)=>{
//     writeableStream.write(chunk)
// })