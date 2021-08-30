import express from "express";

const PORT = 4000;
const app = express();

const listening = () => console.log( `http://localhost:${PORT}` );
app.listen( PORT, listening() );