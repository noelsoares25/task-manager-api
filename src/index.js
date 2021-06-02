const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/tasks')

const app = express()
const port = process.env.PORT


// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if(!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload a word document'))
//         }

//         cb(undefined, true)

//         // cb(new Error('File must be a PDF'))
//         // cb(undefined, true)
//         // cd(undefined, false)
//     }
// })

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({error: error.message})
// })


// app.use((req, res, next) => {
//     if(req.method === 'GET') {
//         res.send('GET requestes are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down check back soon!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log('Server is up on port '+port)
})

// const Task = require('./models/user')
// const User = require('./models/user')

// const main = async () => {
// const task = await Task.findById('60b690971fa23017d0d92906')
// await task.populate('owner').execPopulate()
// console.log(task.owner)

// const user = await User.findById('60b68fc6db867340a035ca5f')
// await user.populate('tasks').execPopulate()
// console.log(user.tasks) 

// }

// main()

// const pet = {
//     name: 'Hal'
// }

// pet.toJSON =function () {
    
//     return {}
// }

// console.log(JSON.stringify(pet))



// app.get('/users/:id', (req, res) => {
//     const _id= req.params.id

//     User.findById(_id).then((user) => {
//         if(!user) {
//             return res.status(404).send()
//         }

//         res.send(user)
//     }).catch((e) => {
//         res.status(500).send()
//     })
// })