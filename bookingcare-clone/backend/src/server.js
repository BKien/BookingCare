const express = require('express')
const cors = require('cors')
const cookieParser  = require('cookie-parser')
const path = require('path')
const {connectDatabase} = require('./config/database.js')
const db = require('./models/index.js');
const routes = require('./routes')
const app = express();

// middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//middleware cho phép phía frontend truy cập vào folder public
app.use('/public',express.static(path.join(__dirname,"..","public")))


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
