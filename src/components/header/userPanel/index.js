import React from "react";
import {Menu, Dropdown, Icon, Row, Avatar, Button} from "antd";
import styled from "styled-components";
import LanguageSelector from "./../languageOpt/index";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../../redux/user/user.actions";

const StyledMenu = styled(Menu)`
  background: #f8f9fa;
  width: 240px;
  &.ant-menu-inline .ant-menu-item {
    height: auto;
    line-height: 20px;
    width: auto;
    padding: 5px;
    border-bottom: 1px solid #e8e8e8;
    white-space: pre-wrap;
  }
  &.ant-menu-inline .ant-menu-item:hover,
  .ant-menu-item-selected {
    color: #8642bb;
  }
  &.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: transparent;
  }
  .ant-menu-item::after {
    border-right-color: transparent;
  }
  .ant-menu-item span {
    display: block;
  }
`;

const UserPanel = () => {
  const userInfo = useSelector((state) => state.userData.user);
  console.log(userInfo);
  const dispatch = useDispatch();
  const menu = (
    <StyledMenu className="shadow">
      <Menu.Item key="0">
        <a href="javascript:;">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="javascript:;">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Row type="flex" justify="space-around">
        <Button>Settings</Button>
        <Button type="danger" onClick={() => dispatch(logout())}>
          Logout
        </Button>
      </Row>
    </StyledMenu>
  );
  return (
    <Row type="flex" align="middle">
      <Dropdown placement="bottomCenter" overlay={menu} trigger={["click"]}>
        <a
          style={{color: "#2c3e50", fontWeight: "bold"}}
          className="ant-dropdown-link pl-1 text-decoration-none "
          href="#"
        >
          <Avatar size="large" src={userInfo.photoURL} />

          {userInfo.displayName}
        </a>
      </Dropdown>
      <LanguageSelector />
    </Row>
  );
};

export default UserPanel;
