import React, {useState} from "react";
import styled from "styled-components";
import {Tooltip} from "antd";

const LanguageSelector = () => {
  const [languageSelector, setLanguageSelector] = useState(false);
  const handleSelectLanguageClick = () => {
    setLanguageSelector(!languageSelector);
  };

  return (
    <StyledDiv className="text-light text-center">
      <p className="lang pr-1">BN</p>
      <p className="lang pl-1">EN</p>
    </StyledDiv>
  );
};

export default LanguageSelector;

const StyledDiv = styled.div`
  padding-left: 20px;
  height: 10px;
  display: table;
  p:first-child {
    border-right: 1px solid rgba(255, 255, 255, 0.5);
  }
  p {
    cursor: pointer;
    padding: 2px;
    font-weight: bold;
    width: 2rem;
    display: table-cell;
    vertical-align: middle;
  }
`;
