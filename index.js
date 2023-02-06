

// NODE

// const log =require('./logger')
// log('xayr')

  // PATH
// const path = require('path');
// const pathObj =path.parse(__filename)
// const pathName =path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
// console.log(pathName)
// console.log(pathObj)
  
  //OS
//   const os = require('os') 
//   const osMem =os.freemem()   // bosh joyni aniqlaydi
//   const osTotMem =os.totalmem() // qancha joyni aniqlaydi
// const osUpTIme =os.uptime()  // qancha vaqtdan beri ishlayotganini anqlid
// const osInfo =os.userInfo() // foydalanuvchi malumoti
//   console.log(osMem)
//   console.log(osTotMem )
// console.log(osUpTIme)
// console.log(osInfo )
  
   //FS filesystem
 // koproq asynchron func ishlatamiz  
const fs = require('fs');
// const files = fs.readdirSync('./')
//     console.log(files)

 
// fs.readdir('./' ,(err,files)=>{
//   if(err)
//    console.log(err)
//   else
//    console.log(files) 
// })

//  fs.readFile('./index.js',(err,file)=>{
//  if(err)
//   throw err;
//   else
//   console.log(file)
// })  qanday turdagi degan joyi yoq misol ucn utf-8 
 
//  fs.readFile('./index.html','utf-8',(err,file)=>{
//  if(err)
//   throw err;
//   else
//   console.log(file)
// })

  //EVENT 
const EventEmitter= require('events')
const emitter = new EventEmitter
emitter.on('message', ()=>{
    console.log('listener caqirld')
})
emitter.emit('message')