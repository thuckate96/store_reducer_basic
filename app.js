var express = require("express")
var app = express()
var port = process.env.PORT|3000
var path = require("path")

var index = require("./routers/index")
app.use("/", index)
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static("public"))

app.listen(port, () =>{
  console.log("server listening on port "+port)
})
