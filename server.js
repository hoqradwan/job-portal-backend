const mongoose = require('mongoose');
const dotenv = require("dotenv").config();
const colors = require("colors")

const app = require('./app');
mongoose.connect(process.env.DB_URL).then(()=>{
    console.log(`Database connection is successful 🛢` .red.bold);
})
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`App is running on port ${port}`.yellow.bold);
  });
  