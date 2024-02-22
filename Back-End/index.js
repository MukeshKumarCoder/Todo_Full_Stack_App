const express = require("express");
const { connection } = require("./db");
const { toDoRouter } = require("./routes/toDoRoutes");
const cors = require('cors')
require("dotenv");

const app = express();
const port = process.env.port;


app.use(cors());
app.use(express.json());
app.use("/todos", toDoRouter)

app.listen(port, async () => {
  try {
    await connection;
    console.log(`app is listing at port ${port} db is also connect`);
  } catch (error) {
    console.log(error);
  }
});
