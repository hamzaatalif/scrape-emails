const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/",(req,res)=>{
    res.send("Hello world!")
})

const mainUrl = `https://demarchesadministratives.fr/pole-emploi`;

app.get("/scrape",async(req,res)=>{
    try {
        const response = await axios.get(mainUrl);
        res.send(response.data);
    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT,()=>{
    console.log(`Server is listening on http://localhost:${PORT}/`);
})