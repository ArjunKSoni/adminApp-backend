const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');

require("./mongooConnect")

const port = 4000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.status(200).send({ "hi": "done" })
})

app.use("/auth", require("./routes/auth"))
app.use("/user", require("./routes/user"))

app.listen(port, (err) => {
    if (err) console.log(err);
    else {
        console.log(`server started at port`, port);
    }
})
