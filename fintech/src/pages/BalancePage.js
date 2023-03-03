import axios from "axios";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BalanceCard from "../components/Balance/BalanceCard";
import AppHeader from "../components/Common/AppHeader";

const BalancePage = () => {
    const queryStr = useLocation().search;
    const fintechUseNo = queryString.parse(queryStr).fintechUseNo;

    const [accountData, setAccountData] = useState({});

    useEffect(() => {
        getBalance(); 
        console.log(genTransId());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const genTransId = () => {
        let countNum = Math.floor(Math.random() * 1000000000) + 1;
        const clientNo = "M202300509";
        let transId = clientNo + "U" + countNum;

        return transId;
    };

    const getBalance = () => {
        const accessToken = localStorage.getItem("accessToken(3legged)");

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

    return (
        <div>
            <AppHeader title={"잔액 조회"}></AppHeader>
            <BalanceCard
                bankName={accountData.bank_name}
                fintechNo={fintechUseNo}
                balance={accountData.balance_amt}
            ></BalanceCard>
        </div>
    );
};

export default BalancePage;