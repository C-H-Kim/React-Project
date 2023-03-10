import axios from "axios";
import React, { useState } from "react";
import AppHeader from "../components/Common/AppHeader";
import InputComponent from "../components/InputComponent";
import ListComponents from "../components/ListComponents";

const NewsPage = () => {
    const [searchInputText, setSearchInputText] = useState("");
    const [newsList, setNewsList] = useState([]);
    const [selected, setSelected] = useState("publishedAt");

    const selectList = [
        {key: "최신순", value: "publishedAt"},
        {key: "인기순", value: "popularity"},
        {key: "관련순", value: "relevancy"},
    ];
    
    const handleSelectSort = (e) => {
        const { value } = e.target;
        setSelected(value);
    };

    const handleSearchInputChange = (e) => {
        const { value } = e.target;
        setSearchInputText(value);
        console.log(value);
    };

    const handleSearchButtonClick = () => {
        console.log("서버로 요청을 보냅니다.");
        // 템플릿 리터럴을 통해 API URL 작성
        const requestUrl = `https://newsapi.org/v2/everything?q=${searchInputText}&from=2023-02-04&sortBy=${selected}&apiKey=9559bd697b9c4e7dab65cdff4bf7369a&language=ko`;
        console.log(requestUrl);

        // axios를 통해서 news API에 요청 보내기
        axios.get(requestUrl).then(({ data }) => {
            console.log(data);
            setNewsList(data.articles);
        });
    };

    return (
        <div>
            <AppHeader title={"뉴스 검색"}></AppHeader>
            <InputComponent
                handleChange={handleSearchInputChange}
                handleClick={handleSearchButtonClick}
                handleSelect={handleSelectSort}
                selectList={selectList}
            ></InputComponent>
            <ListComponents newsList={newsList}></ListComponents>
        </div>
    );
};

export default NewsPage;