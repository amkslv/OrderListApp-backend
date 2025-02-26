import express from 'express';
import cors from 'cors';
import orderRoutes from "./routes/orderRoute.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api', orderRoutes)

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});