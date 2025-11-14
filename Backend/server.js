const express = require('express')
const cors = require('cors')

//user defined modules

const userRouter = require('./routes/user')
const reviewRouter = require('./routes/review')

const app = express()

//middleware
app.use(cors())

app.use(express.json())

app.use('/user', userRouter)
app.use('/review',reviewRouter)


app.listen(4000, 'localhost', () => {
    console.log('server started at port 4000')
})