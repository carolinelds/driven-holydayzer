import express from 'express';
import cors from 'cors';
import dayjs from 'dayjs';

const app = express();
app.use(cors());

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
  ];

app.get("/holidays", (request,response) => {

    let holydaysBrasil = [];

    holidays.map(holiday => {
          let dataBrasil = dayjs(holiday.date).format("DD/MM/YYYY");
          holydaysBrasil.push(`${dataBrasil}: ${holiday.name}`);
      })
    
    holydaysBrasil = ["Lista de feriados em 2022: ", ...holydaysBrasil];
    holydaysBrasil = holydaysBrasil.join("<br />");

    response.send(holydaysBrasil);
})

app.get("/is-today-holiday", (request,response) => {
    let today = dayjs().date();
    today = dayjs(today).format("DD/MM/YYYY");
    //let today = "25/12/2022"; // para testes

    let isTodayHoliday = "Não, hoje não é feriado";

    holidays.map(holiday => {
        holiday.date = dayjs(holiday.date).format("DD/MM/YYYY");
        today === holiday.date ? isTodayHoliday = `Sim, hoje é ${holiday.name}` : null;        
    })

    response.send("Hoje é feriado? " + isTodayHoliday);
})

app.listen(5000);