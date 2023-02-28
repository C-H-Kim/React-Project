import React from "react";
import styled from "styled-components";

const Button = styled.button`
    color: greys;
`;

const StyledComponent = () => {
    return (
        <div>
            <Button>스타일드 컴포넌트로 만든 버튼입니다.</Button>
        </div>
    );
};

export default StyledComponent