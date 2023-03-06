import queryString from "query-string";
import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import AppHeader from "../components/Common/AppHeader";

const QrBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
`;

const QrCodePage = () => {
    const search = useLocation().search;
    const fintechUseNo = queryString.parse(search).fintechUseNo;

    return (
        <div>
            <AppHeader title={"QR 코드 생성"}></AppHeader>
            <QrBlock>
                <QRCodeSVG size={200} value={fintechUseNo}></QRCodeSVG>
                <p>fintech 번호 : {fintechUseNo}</p>
            </QrBlock>
        </div>
    )
}

export default QrCodePage;