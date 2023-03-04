import axios from "axios";
import React, { useEffect, useState } from "react";
import AppHeader from "../components/Common/AppHeader";
import MainAccountCard from "../components/Main/MainAccountCard";

const MainPage = () => {
    useEffect(() => {
        console.log("시작하자마자 일을 시작합니다.");
        getAccountList();
    }, []);

    const [accountList, setAccountList] = useState([]);

    const getAccountList = () => {
        const accessToken = localStorage.getItem("accessToken(3legged)");
        const userSeqNo = localStorage.getItem("userSeqNo");

        const option = {
            method: "",
            url: "/v2.0/user/me",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: {
                user_seq_no: userSeqNo,
            },
        };

        axios(option).then(({ data }) => {
            console.log(data.res_list);
            setAccountList(data.res_list);
        });
    };

    return (
        <div>
            <AppHeader title={"계좌 목록"}></AppHeader>
            {accountList.map((account, index) => {
                return (
                    <MainAccountCard
                        key={index}
                        bankName={account.bank_name}
                        fintechUseNo={account.fintech_use_num}
                        accountNumMask={account.account_num_masked}
                    ></MainAccountCard>
                );
            })}
        </div>
    );
};

export default MainPage;