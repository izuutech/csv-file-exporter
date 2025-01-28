const express = require("express");
const app = express();
const PORT = process.env.PORT || 4001;

app.listen(PORT, () => console.log(`server running on ${PORT}`));

app.set("view engine", "ejs");

const mainRoute = require("./routes/main.routes");

app.use("/", mainRoute);
