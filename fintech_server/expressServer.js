const express = require("express");
const axios = require("axios");
const app = express();

const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxMTAxMDIyMDA3Iiwic2NvcGUiOlsiaW5xdWlyeSIsImxvZ2luIiwidHJhbnNmZXIiXSwiaXNzIjoiaHR0cHM6Ly93d3cub3BlbmJhbmtpbmcub3Iua3IiLCJleHAiOjE2ODU1NDI4NjQsImp0aSI6ImUxYzc5NzI2LTE2ZGUtNDc2OC1iMTI4LWU5YmU2MDczYWZiNiJ9.CzI0HegLkZJ9kG1rjV41iX0gnyekmeiZMopOleVhLjs";

app.get("/", function(req, res) {
    res.send("Hello World");
});

app.get("/user", (req, res) => {
    res.json("get method");
});

app.post("/user", (req, res) => {
    res.json("post method");
});

app.delete("/user", (req, res) => {
    res.json("delete method");
});

app.put("/user", (req, res) => {
    res.json("put method");
});

app.get("/transaction", (req, res) => {
    const option = {
        method: "GET",
        url: "https://testapi.openbanking.or.kr/v2.0/account/transaction_list/fin_num",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        params: {
            bank_tran_id: genTransId(),
            fintech_use_num: "120230050988951030734869",
            inquiry_type: "A",
            inquiry_base: "D",
            from_date: "20230303",
            to_date: "20230305",
            sort_order: "D",
            tran_dtime: "20230305000000",
        },
    };

    axios(option).then(({ data }) => {
        console.log(data);
        res.json(data);
    });
});

const genTransId = () => {
    let countNum = Math.floor(Math.random() * 1000000000) + 1;
    const clientNo = "M202300509";
    let transId = clientNo + "U" + countNum;

    return transId;
};

app.listen(4000);