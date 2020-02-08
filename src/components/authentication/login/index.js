import React, {useState} from "react";
import {Form, Icon, Input, Button, Checkbox, Row} from "antd";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {
  login,
  loginWithGoogle,
  loginWithFacebook
} from "../../../redux/user/user.actions";
import google_logo from "../../../assets/google_logo.jpg";
import fb_icon from "../../../assets/fb_icon.png";

const LoginContainer = (props) => {
  const {getFieldDecorator} = props.form;
  const [emailAndPass, setEmailAndPass] = useState({
    email: "",
    password: ""
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  const loginHandleClick = () => {
    dispatch(
      login({
        email: emailAndPass.email,
        password: emailAndPass.password
      })
    );
  };
  const signinWithGoogle = () => {
    dispatch(loginWithGoogle());
  };
  const signinWithFacebook = () => {
    dispatch(loginWithFacebook());
  };
  const onChange = (event) => {
    const {name, value} = event.target;
    setEmailAndPass((prevState) => ({...prevState, [name]: value}));
  };

  return (
    <StyledLogin>
      <StyledRow className="shadow px-4 py-5">
        <Form onSubmit={handleSubmit} className="login-form">
          <h3 className="title text-center">Register here for Sign in!!</h3>

          <Form.Item>
            {/*   {getFieldDecorator("email", {
              rules: [{required: true, message: "Please input your E-mail!"}]
            })(
              <Input
                type="email"
                prefix={<Icon type="user" style={{color: "rgba(0,0,0,.25)"}} />}
                placeholder="E-mail"
                name="email"
                onChange={onChange}
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
                name="password"
                placeholder="Password"
                onChange={onChange}
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
            </Button> */}
            <Row>
              <Link to="/sign-up">register now!</Link> or
            </Row>
            <AuthProviderButton
              authProvider={signinWithGoogle}
              img={google_logo}
              title={"Google signup"}
            />
            <br />
            <AuthProviderButton
              authProvider={signinWithFacebook}
              img={fb_icon}
              title={"Facebook signup"}
            />
          </Form.Item>
        </Form>
      </StyledRow>
    </StyledLogin>
  );
};

export const LoginForm = Form.create({name: "normal_login"})(LoginContainer);

const AuthProviderButton = (props) => {
  return (
    <SigninButton onClick={props.authProvider}>
      <img src={props.img} alt={props.title}></img>
      <p>{props.title}</p>
    </SigninButton>
  );
};

const StyledLogin = styled(Row)`
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
  height: 100vh;
  background-size: cover;
  overflow: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
`;

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

const SigninButton = styled.div`
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
