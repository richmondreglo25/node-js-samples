import express, { Application } from 'express';
import cors from 'cors';
import swagger from '../config/swagger';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import userRouter from '../routers/userRouter';

class ApiServer {
    private app: Application;
    private port: string | undefined;

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.initializeMiddlewares();
        this.initializeRoutes();
        this.initializeSwagger();
    }

    private initializeMiddlewares(): void {
        this.app.use(cors());
        this.app.use(express.json());
    }

    private initializeRoutes(): void {
        this.app.use('/api/users', userRouter);
    }

    private initializeSwagger(): void {
        const specs = swaggerJSDoc(swagger);
        this.app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
    }

    public start(): void {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
    public getApp(): Application {
        return this.app;
    }
}

export default ApiServer;
