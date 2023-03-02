import React from "react";
import { useLocation } from "react-router-dom";
import AppHeader from "../components/Common/AppHeader";
import queryString from "query-string";

const AuthResultPage = () => {
    const queryStr = useLocation().search;
    console.log(queryString.parse(queryStr));

    const authCode = queryString.parse(queryStr).code;

    return (
        <div>
            <AppHeader title={"인증완료 / 토큰 요청"}></AppHeader>
            사용자 authCode : {authCode}
        </div>
    )
}

export default AuthResultPage;