import React from "react";
import ReactDataGridContainer from "../reactDataGrid";
import createRowData from "../reactDataGrid/createRowData";
import styled from "styled-components";
import {Layout} from "antd";
import PageHeader from "../header";

const {Header, Footer, Content} = Layout;
const Dashboard = () => {
  return (
    <StyledLayout className="h100">
      <Header>
        <PageHeader />
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
    background: #16a085 !important;
  }
  .ant-layout-content {
    .rdg-viewport {
      height: calc(100vh - 158px) !important;
    }
  }

  .ant-layout-footer {
    text-align: center;
    background: #2c3e50 !important;
    color: #3498db;
  }
`;
