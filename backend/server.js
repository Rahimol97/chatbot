import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB  from './config/db.js';
import userRoutes from './routes/userRoutes.js'
dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users",userRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
});
