import { Button, Form, Input } from '@arco-design/web-react';
import { IconUser, IconLock } from '@arco-design/web-react/icon';

import '../styles/Login.css';

async function SignIn(data) {
  console.log(data);
}

function Login() {
  return (
    <div className='Login'>
      <div className='LoginPanel'>
        <Form
          layout='horizontal'
          size='large'
          onSubmit={(data) => SignIn(data)}>
          <Form.Item
            field='username'
            rules={[{ required: true, message: '账号不能为空！' }]}>
            <Input prefix={<IconUser />} placeholder='电话/邮箱' />
          </Form.Item>
          <Form.Item
            field='password'
            rules={[{ required: true, message: '密码不能为空！' }]}>
            <Input prefix={<IconLock />} placeholder='密码' />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit' long>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
