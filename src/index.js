const express = require('express')
let data = require("./InitialData")
const app = express()
const bodyParser = require("body-parser");
const { query } = require('express');
const { json } = require('body-parser');
const port = 8080
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here
app.get("/api/student", (req, res) => {
    try {

        res.status(200).json({
            status: "Success",
            data

        })
    } catch (e) {
        res.status(404).json({
            status: "Failed",
            message: e.message

        })
    }
})

app.get("/api/student/:id", (req, res) => {
    try {
        console.log(req.params.id);
        //const studentArray = JSON.parse(data)

        const sData = data.find(value => value.id == req.params.id);

        console.log(sData)
        res.status(200).json({
            status: "Success",
            sData

        })
    } catch (e) {
        res.status(404).json({
            status: "Failed",
            message: e.message

        })
    }
})

app.post("/api/student", (req, res) => {
    try {
        const addData = data.push(req.body)
        res.status(200).json({
            status: "Success",
            addData

        })
    } catch (e) {
        res.status(404).json({
            status: "Failed",
            message: e.message

        })
    }
})

app.put("/api/student/:id", (req, res) => {
    try {
        let uData = data.findIndex(value => value.id === req.params.id);

        let upData = data[uData];
        res.status(200).json({
            status: "Success",
            upData

        })
    } catch (e) {
        res.status(404).json({
            status: "Failed",
            message: e.message

        })
    }
})
app.delete("/api/student/:id", (req, res) => {
    try {
        let vData = delete data[value => value.id == req.params.id];


        res.status(200).json({
            status: "Success",
            vData

        })
    } catch (e) {
        res.status(404).json({
            status: "Failed",
            message: e.message

        })
    }
})
app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   