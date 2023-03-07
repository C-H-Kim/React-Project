import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const ModalCardBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 20px;
  border: 1px #112211 solid;
`;
const CardTitle = styled.div`
  font-size: 1rem;
  color: black;
`;
const FintechUseNo = styled.div`
  font-size: 0.7rem;
  margin-bottom: 30px;
`;

const WithDrawButton = styled.button`
  border: none;
  padding: 0.3rem;
  background: #2aa450;
  color: white;
  margin-top: 0.3rem;
`;

const ModalCard = ({ bankName, fintechUseNo, tofintechno }) => {
    //fintechUseNo : 내계좌
    //tofintechno : QR 코드로 읽어온 핀테크 계좌
    const [amount, setAmount] = useState("");

    const genTransId = () => {
        let countNum = Math.floor(Math.random() * 1000000000) + 1;
        const clientNo = "M202300509";
        let transId = clientNo + "U" + countNum;

        return transId;
    };

    const handlePayButtonClick = () => {
        const accessToken = localStorage.getItem("accessToken(3legged)");

        const data = {
            "bank_tran_id": genTransId(),
            "cntr_account_type": "N",
            "cntr_account_num": "100000000001", // 약정계좌의 출금계좌 번호와 같아야 함
            "dps_print_content": "ㅂㅈㄷㄱ", 
            "fintech_use_num": fintechUseNo, // 요청전문의 핀테크이용번호와 같아야 함
            "tran_amt": amount, // 요청전문의 금액과 같아야 함
            "tran_dtime": "20230303114800",
            "req_client_name": "홍길동",
            "req_client_fintech_use_num": tofintechno,
            "req_client_num": "NICK6253",
            "transfer_purpose": "ST",
            "recv_client_name": "김창훈", // 요청전문의 수취인성명과 같아야 함
            "recv_client_bank_code": "097",
            "recv_client_account_num": "500000000001"
        };

        const option = {
            method: "POST",
            url: "/v2.0/transfer/withdraw/fin_num",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            data: data
        };

        axios(option).then(({ data }) => {
            if(data.rsp_code === "A0000") {
                deposit();
            }
            else {
                alert("출금 이체가 실패하였습니다.");
            }
        });
    };

    const deposit = () => {
        const twoLeggedToken = localStorage.getItem("accessToken(2legged)");

        const data = {
            "cntr_account_type": "N",
            "cntr_account_num": "200000000001",
            "wd_pass_phrase": "NONE",
            "wd_print_content": "환불금액",
            "name_check_option": "off",
            "tran_dtime": "20230307000000",
            "req_cnt": "1",
            "req_list": [
                {
                    "tran_no": "1",
                    "bank_tran_id": genTransId(),
                    "fintech_use_num": tofintechno,
                    "print_content": "쇼핑몰환불",
                    "tran_amt": amount,
                    "req_client_name": "홍길동",
                    "req_client_fintech_use_num": fintechUseNo,
                    "req_client_num": "HONGGILDONG1234",
                    "transfer_purpose": "ST"
                }
            ]
        };

        const option = {
            method: "POST",
            url: "/v2.0/transfer/deposit/fin_num",
            headers: {
                Authorization: `Bearer ${twoLeggedToken}`,
            },
            data: data
        };

        axios(option).then(({ data }) => {
            if(data.rsp_code === "A0000") {
                alert("결제 완료!");
            }
        });
    };

    const handleChange = (e) => {
        const { value } = e.target;
        setAmount(value);
    };

    return (
        <ModalCardBlock>
            <CardTitle>{bankName}</CardTitle>
            <FintechUseNo>{fintechUseNo}</FintechUseNo>
            <p>{tofintechno}로 돈을 보냅니다.</p>
            <input onChange={handleChange}></input>
            <WithDrawButton onClick={handlePayButtonClick}>결제하기</WithDrawButton>
        </ModalCardBlock>
    );
};

export default ModalCard;