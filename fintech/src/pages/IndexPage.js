import React from "react";
import AppHeader from "../components/Common/AppHeader";
import styled from "styled-components";

const AuthButton = styled.button`
    margin-top: 100px;
    width: 100%;
`;

const IndexPage = () => {
    const handleClick = () => {
        let tmpwindow = window.open("about:blank");

        const cliendId = "2b0e5c0e-5e81-4281-b336-bf1f058805e2";
        const callbackUrl = "http://localhost:3000/authResult";
        
        tmpwindow.location.href = `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${cliendId}&redirect_uri=${callbackUrl}&scope=login inquiry transfer&state=b80BLsfigm9OokPTjy03elbJqRHOfGSY&auth_type=0`;
    };

    return (
        <div>
            <AppHeader title={"인증시작"}></AppHeader>
            <AuthButton onClick={handleClick}>인증 사이트로 이동</AuthButton>
        </div>
    );
};

export default IndexPage;