import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connection from './config/db.js';
import todoRoutes from './routes/todo.js'; // ✅ import your todo routes

dotenv.config();
const app = express();

app.use(cors()); // ✅ allow frontend requests
app.use(express.json());

// ✅ connect to DB
connection();

// ✅ use routes
app.use('/api/todo', todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
