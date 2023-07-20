import express from 'express'
import routes from './src/Routes/Routes';
import path from 'path'
import cors from 'cors'

require("dotenv").config({path: path.resolve(__dirname, "../.env")})
class App {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.Middlewares();
        this.Routes();
    }

    public Middlewares(): void{
        this.app.use("/files", express.static(path.resolve(__dirname, "src","public")));
        this.app.use(express.json());
        this.app.use(cors())
       
    }
    public Routes(): void{
        this.app.use(routes);
    }
}
export default new App().app;