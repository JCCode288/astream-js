const express = require("express");
const cors = require("cors");
const router = require("./routers");
const errorHandler = require("./middlewares/errorHandler");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static("/"));
app.use(router);
app.use(errorHandler);

app.listen(PORT, () => console.log(`listening to http://localhost:${PORT}`));
