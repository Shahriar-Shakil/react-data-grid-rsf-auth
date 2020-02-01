import React from "react";
import {Row} from "antd";
import ReactDataGridContainer from "../reactDataGrid";
import createRowData from "../reactDataGrid/createRowData";
import styled from "styled-components";
import {Layout} from "antd";

const {Header, Footer, Sider, Content} = Layout;
const Dashboard = () => {
  return (
    <StyledLayout className="h100">
      <Header>
        <h2>React Data Grid</h2>
      </Header>
      <Content>
        <ReactDataGridContainer initialRows={createRowData(100)} />
      </Content>
      <Footer>@pondit web</Footer>
    </StyledLayout>
  );
};

export default Dashboard;

const StyledLayout = styled(Layout)`
  .ant-layout-header {
    text-align: center;
    h2 {
      color: #fff;
    }
  }
  .ant-layout-content {
    .rdg-viewport {
      height: calc(100vh - 158px) !important;
    }
  }

  .ant-layout-footer {
    text-align: center;
  }
`;
