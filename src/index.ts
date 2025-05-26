import express from 'express';
import cors from 'cors';
import swagger from './app/config/swagger';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import userRouter from './app/routers/userRouter';

// Constants.
const PORT = process.env.PORT;
const app = express();


app.use(cors());
app.use(express.json()); // Express request body parser.
app.use('/api/users', userRouter);

// Swagger
const specs = swaggerJSDoc(swagger);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));