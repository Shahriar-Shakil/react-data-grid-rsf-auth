import React from "react";
import {Form, Icon, Input, Button, Checkbox, Row} from "antd";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

const LoginContainer = (props) => {
  const {getFieldDecorator} = props.form;
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  const loginHandleClick = () => {
    dispatch({type: "LOGIN_SUCCESS"});
    history.push("/");
  };
  return (
    <StyledRow>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{required: true, message: "Please input your username!"}]
          })(
            <Input
              prefix={<Icon type="user" style={{color: "rgba(0,0,0,.25)"}} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{required: true, message: "Please input your Password!"}]
          })(
            <Input
              prefix={<Icon type="lock" style={{color: "rgba(0,0,0,.25)"}} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={loginHandleClick}
          >
            Log in
          </Button>
          Or <Link to="/sign-up">register now!</Link>
        </Form.Item>
      </Form>
    </StyledRow>
  );
};

export const LoginForm = Form.create({name: "normal_login"})(LoginContainer);

const StyledRow = styled(Row)`
  position: absolute;
  top: 30%;
  left: 50%;
  margin: -100px 0 0 -150px;

  .login-form {
    max-width: 300px;
  }
  .login-form-forgot {
    float: right;
  }
  .login-form-button {
    width: 100%;
  }
`;
