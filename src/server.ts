import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";
import swaggerUI from "swagger-ui-express";

// config
import { connectDB, envConfig, swaggerSpecs } from "./config";

// routes
import { todoRouter } from "./routes";

const app: Express = express();
const { PORT } = process.env;

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
// api endpoints
app.use("/todo", todoRouter);

app.use("/api-docs/swagger", swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

envConfig();
connectDB();
app.listen(PORT || 3000, () => console.log(`Server is running on port: ${PORT}`));
