import express from "express";

const app = express();
import path from "path";
import router from "./routes/index.js"
import expressEjsLayouts from "express-ejs-layouts";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as http from "http";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: "./.env.config" });
app.locals.APP_ENV = process.env.APP_ENV;
app.locals.VITE_HOST = process.env.VITE_HOST;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(fileUpload());

app.use(express.static(__dirname + '/public'));

app.use('/', router);

const server = http.createServer(app);
server.listen(process.env.NODE_PORT, () => {
    console.log(`Server running on port ${process.env.NODE_PORT}`)
    console.log(`http://localhost:${process.env.NODE_PORT}`)
});
