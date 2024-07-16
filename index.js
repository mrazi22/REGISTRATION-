const express = require('express')
const Routes = require('./routes/routes')
const app = express()
const cors = require('cors')

require('dotenv').config()
require('./helpers/init_mongoose')


app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000'
  }));
app.use(Routes)



//when creating a  backend server always start with routes and testing routes work before connecting  to the database 






app.listen(5000, () => console.log('server running on port 5000'))