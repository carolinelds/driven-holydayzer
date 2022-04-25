import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get("/holidays", (request,response) => {

})

app.get("/is-today-holiday", (request,response) => {

})

app.listen(5000);