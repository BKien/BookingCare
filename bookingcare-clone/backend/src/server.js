const express = require('express')
const cors = require('cors')
const {connectDatabase} = require('./config/database.js')
const db = require('./models/index.js');
const routes = require('./routes')
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',routes)

// test route
app.get("/", (req, res) => {
  return res.json({
    message: "Backend is running 🚀",
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  console.log(`Backend running on http://localhost:${PORT}`);
  await connectDatabase(); // 👈 KẾT NỐI MYSQL
  
});
