require('dotenv').config();
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import session from "express-session";
import connectFlash from "connect-flash";
import passport from "passport";

let app = express();

app.use(cookieParser('secret'));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 86400000 1 dia
    }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//View engine
configViewEngine(app);

app.use(connectFlash());

//Configuración de middleware
app.use(passport.initialize());
app.use(passport.session());

// Iniciar rutas
initWebRoutes(app);

let port = process.env.PORT || 8080;
app.listen(port, () => console.log(`El inicio de sesión esta siendo ejecutado en ${port}!`));
