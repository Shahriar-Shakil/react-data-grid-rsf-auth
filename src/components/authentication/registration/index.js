import React, {useState} from "react";
import styled from "styled-components";
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete
} from "antd";
const {Option} = Select;
const Register = (props) => {
  const {getFieldDecorator} = props.form;
  const [state, setState] = useState({
    confirmDirty: false,
    autoCompleteResult: []
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  const handleConfirmBlur = (e) => {
    const {value} = e.target;
    setState((prev) => {
      return {
        ...state,
        confirmDirty: state.confirmDirty || !!value
      };
    });
  };

  const compareToFirstPassword = (rule, value, callback) => {
    const {form} = props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };
  const validateToNextPassword = (rule, value, callback) => {
    const {form} = props;
    if (value && state.confirmDirty) {
      form.validateFields(["confirm"], {force: true});
    }
    callback();
  };
  const prefixSelector = getFieldDecorator("prefix", {
    initialValue: "88"
  })(
    <Select style={{width: 70}}>
      <Option value="88">+88</Option>
      <Option value="86">+86</Option>
    </Select>
  );
  return (
    <StyledRow>
      <Form {...formItemLayout} onSubmit={handleSubmit}>
        <Form.Item label="E-mail">
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Password" hasFeedback>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Please input your password!"
              },
              {
                validator: validateToNextPassword
              }
            ]
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="Confirm Password" hasFeedback>
          {getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "Please confirm your password!"
              },
              {
                validator: compareToFirstPassword
              }
            ]
          })(<Input.Password onBlur={handleConfirmBlur} />)}
        </Form.Item>
        <Form.Item
          label={
            <span>
              Factory&nbsp;
              <Tooltip title="Put your Factory Name here..">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator("Factory", {
            rules: [
              {
                required: true,
                message: "Please input your Factory Name",
                whitespace: true
              }
            ]
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Phone Number">
          {getFieldDecorator("phone", {
            rules: [
              {required: true, message: "Please input your phone number!"}
            ]
          })(<Input addonBefore={prefixSelector} style={{width: "100%"}} />)}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator("agreement", {
            valuePropName: "checked"
          })(
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </StyledRow>
  );
};

export const RegisterForm = Form.create({name: "register"})(Register);

const StyledRow = styled(Row)`
  position: absolute;
  top: 30%;
  left: 50%;
  margin: -100px 0 0 -150px;
`;

const formItemLayout = {
  labelCol: {
    xs: {span: 24},
    sm: {span: 8}
  },
  wrapperCol: {
    xs: {span: 24},
    sm: {span: 16}
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};
