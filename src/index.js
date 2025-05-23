import express from 'express';
import userRouter from './app/routers/userRouter.js'

// Constants.
const PORT = process.env.PORT;
const app = express();

app.use(express.json()); // Express request body parser.
app.use('/api/users', userRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));