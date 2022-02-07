const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
const app = express()

//------------import routs---------------
const userRoute = require('./routes/user.js')
const productRouter = require('./routes/product.js')
const categoryRouter = require('./routes/category.js')
const authRoute = require('./routes/auth.js')

//---------connect to database-----------
const config = {
    useNewUrlParser:true,
    useUnifiedTopology:false
};

mongoose.connect(process.env.DATABASE, config)
.then(() => {
    console.log("Connect to Database Successfully");
})
.catch(() => {
    console.log(err);
})

//--------------middleware---------------
app.use(express.json())
app.use(cors())
app.use(morgan())

//-------------route--------------------
app.use('/api', userRoute)
app.use('/api', productRouter)
app.use('/api', categoryRouter)
app.use('/api', authRoute)

//---------------port-------------------
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`listening at port ${port}`)
})


