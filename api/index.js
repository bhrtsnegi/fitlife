import express from 'express';

//nodemon is used for continous server refresh

const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});