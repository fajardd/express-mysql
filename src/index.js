require("dotenv").config();
const PORT = process.env.PORT || 5000;

const express = require("express");

const userRoutes = require("./routes/users");

const serviceRoutes = require("./routes/services");

const middlewareLogRequest = require("./middleware/logs");

const app = express();

app.use(middlewareLogRequest);

app.use(express.json());

// Route untuk halaman users
app.use("/users", userRoutes);

app.use("/services", serviceRoutes);

// Route untuk halaman utama
app.get("/", (req, res) => {
  res.send("<p>Server Tersedia</p>");
});

app.listen(PORT, () => {
  console.log(`server di running di port ${PORT}`);
});
