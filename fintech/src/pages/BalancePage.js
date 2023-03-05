import axios from "axios";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BalanceCard from "../components/Balance/BalanceCard";
import AppHeader from "../components/Common/AppHeader";
import TransactionList from "../components/Balance/TransactionList";

const BalancePage = () => {
    const queryStr = useLocation().search;
    const queryObj = queryString.parse(queryStr)
    const fintechUseNo = queryObj.fintechUseNo;
    const accountNumMask = queryObj.accountNumMask;

    const [accountData, setAccountData] = useState({});
    const [transactionList, setTransactionList] = useState([]);

    const accessToken = localStorage.getItem("accessToken(3legged)");

    useEffect(() => {
        getBalance(); 
        getTransactionList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const genTransId = () => {
        let countNum = Math.floor(Math.random() * 1000000000) + 1;
        const clientNo = "M202300509";
        let transId = clientNo + "U" + countNum;

        return transId;
    };

    const getBalance = () => {
        const option = {
            method: "GET",
            url: "/v2.0/account/balance/fin_num",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: {
                bank_tran_id: genTransId(),
                fintech_use_num: fintechUseNo,
                tran_dtime: "20230303000000",
            },
        };

        axios(option).then(({ data }) => {
            console.log(data);
            setAccountData(data);
        });
    };

    const getTransactionList = () => {
        const option = {
            method: "GET",
            url: "/v2.0/account/transaction_list/fin_num",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: {
                bank_tran_id: genTransId(),
                fintech_use_num: fintechUseNo,
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
            setTransactionList(data.res_list);
        });
    };

    return (
        <div>
            <AppHeader title={"잔액 조회"}></AppHeader>
            <BalanceCard
                bankName={accountData.bank_name}
                fintechNo={fintechUseNo}
                balance={accountData.balance_amt}
                accountNum={accountNumMask}
            ></BalanceCard>
            <TransactionList transactionList={transactionList}></TransactionList>
        </div>
    );
};

export default BalancePage;