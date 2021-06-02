const mongoose = require('mongoose')



mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

// const task = new Task({
//     description: " Eat Lunch ",
// })

// task.save().then((task) => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Error!', error)
// })