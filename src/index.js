const express = require("express");
const morgan = require("morgan");
const path = require("path");
const handle = require("express-handlebars");
const app = express();
const route = require("./routes");
const port = 3000;

//middleware xu lý form data cho POST
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
//HTTP logger
app.use(morgan("combined"));

//Template Engine ==> add .engine after handle to fix the error
app.engine(
  "hbs",
  handle.engine({
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));

//Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
