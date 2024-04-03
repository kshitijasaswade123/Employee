const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const cors = require('cors')
const EmployeeRoute = require('./Route/EmployeeRout')

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("HOME");
});

app.use("/api/employeedata", EmployeeRoute);

app.listen(process.env.PORT);

async function dbconnection() {
  try {
    const res = await mongoose.connect(process.env.CONNECT);
    const data = await res.default;
    console.log(data.STATES.connected);
  } catch (error) {
    console.log(error.message);
  }
}

dbconnection();