import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './route/user.route.js';
import authRoutes from './route/auth.route.js';
import postRoutes from './route/post.route.js';
import commentRoutes from './route/comment.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(
  () => {console.log('Database is connected');
})
  .catch((err) => {
    console.log(err);
});

//nodemon is used for continous server refresh

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
});