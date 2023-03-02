import React from "react";
import { useLocation } from "react-router-dom";
import AppHeader from "../components/Common/AppHeader";
import queryString from "query-string";
import axios from "axios";

const AuthResultPage = () => {
    const queryStr = useLocation().search;
    console.log(queryString.parse(queryStr));
    const authCode = queryString.parse(queryStr).code;

    const handleAuthButtonClick = () => {
        let sendData = {
            code: authCode,
            client_id: "2b0e5c0e-5e81-4281-b336-bf1f058805e2",
            client_secret: "04dc8a03-bb68-446b-bc5b-7afe1271bebf",
            redirect_uri: "http://localhost:3000/authResult",
            grant_type: "authorization_code",
        };

        const option = {
            method: "POST",
            url: "/oauth/2.0/token",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            },
            data: sendData,
        };

        axios(option).then((response) => {
            console.log(response);
        });
    };

    return (
        <div>
            <AppHeader title={"인증완료 / 토큰 요청"}></AppHeader>
            사용자 authCode : {authCode}
            <br />
            <button onClick={handleAuthButtonClick}>Access Token 요청</button>
        </div>
    )
}

export default AuthResultPage;