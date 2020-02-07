import React from "react";
import {Form, Icon, Input, Button, Checkbox, Row} from "antd";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {login} from "../../../redux/user/user.actions";
import google_logo from "../../../assets/google_logo.jpg";
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

  const registerWithGoogle = () => {
    dispatch(login());
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
            // onClick={loginHandleClick}
          >
            Log in
          </Button>
          <Row>
            <Link to="/sign-up">register now!</Link> or
          </Row>
          <GoogleSigninButton onClick={registerWithGoogle}>
            <img src={google_logo} alt="google_logo"></img>
            <p>Sign in with google</p>
          </GoogleSigninButton>
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

const GoogleSigninButton = styled.div`
  cursor: pointer;
  border: 2px solid #4285f4;
  display: flex;
  align-items: center;
  height: 2rem;
  background: #4285f4;
  img {
    height: inherit;
    padding: 2px 0;
  }
  p {
    font-size: medium;
    font-weight: bold;
    color: #fff;
    padding-left: 1rem;
    margin: 0;
  }
`;
