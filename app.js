// const names=require('./names')
// const sayHi=require('./utils')
// const data=require('./ait')
// sayHi(names.susan)
// sayHi(names.john)
// console.log(names);
// console.log(data.items)
// console.log(data.singlePerson)


// const { log } = require('console')
// const os=require('os')
// const user=os.userInfo()
// console.log(user)

// console.log(`the sys uptime is ${os.uptime()} seconds`)

// const currentOS={
//     name:os.type(),
//     release:os.release(),
//     totalmem:os.totalmem(),
//     freemem:os.freemem(),
// }

// console.log(currentOS)

// const path=require('path')

// console.log(path.sep)


// const filePath=path.join('contents','subfolder','test.txt');
// console.log(filePath)

// const base=path.basename(filePath)
// console.log(base)

// const absolute=path.resolve(__dirname,'contents','subfolder','test.txt')
// console.log(absolute)

// const {readFileSync,writeFileSync}=require('fs')
// const first=readFileSync('./contents/first.txt','utf8')
// const second=readFileSync('./contents/second.txt','utf8')

// console.log(first)
// console.log(second)

// writeFileSync(
//     './contents/result-sync.txt',
//     `here is the result:${first},${second}`,
//     {flag:'a'}
// )

// const { log } = require('console');



// const {readFile,writeFile}=require('fs')

// readFile('./contents/first.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     const first=result;

//     readFile('./contents/second.txt','utf8',(err,result)=>{
//         if(err){
//             console.log(err);
//             return
//         }
//         const second=result;
//         console.log(second)

//     writeFile('./contents/result-async',
//         `Here is the result:${first},${second}`,
//         (err,result)=>{
//             if(err){
//                 console.log(err);
//                 return
                
//             }
//             console.log(result)
//         }
//     )

// })

// })


// const http=require('http')
// const server=http.createServer((req,res)=>{
//     console.log(req);
    
//     res.write("welcome Home");
//     res.end();
// })
// server.listen(3002,()=>{
//     console.log('Server is running on http://localhost:3002');
// })


const http1=require("http")
const server1=http1.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("welcome to home page")
    }
    if(req.url ==='/about'){
        res.end("welcome to About Page")
    }
    res.end(`
        <h1>Oops!</h1>
        <p>something went wrong</a>
        <a href='/'>back home</a>
        `)
})

server1.listen(5000,()=>{
    console.log("connected http://localhost:5000")
})

