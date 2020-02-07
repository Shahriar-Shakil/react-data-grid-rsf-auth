import React from "react";
import {Row, Col} from "antd";
import UserPanel from "./userPanel";
import LanguageSelector from "./languageOpt/index";

const PageHeader = () => {
  return (
    <>
      <Row type="flex" justify="space-between" align="middle">
        <Col span={4}>
          <h5 className="text-light">React Data Grid</h5>
        </Col>
        <Col span={4}>
          <UserPanel />
        </Col>
      </Row>
    </>
  );
};

export default PageHeader;
