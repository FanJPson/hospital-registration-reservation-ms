import { Result, Button } from '@arco-design/web-react';
import { useNavigate } from 'react-router-dom';

function NoMatch() {
  const navigate = useNavigate();
  return (
    <Result
      status='404'
      subTitle='404 页面消失了'
      style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-60%)',
      }}
      extra={[
        <Button key='back' type='primary' onClick={() => navigate('/')}>
          返回首页
        </Button>,
      ]}></Result>
  );
}

export default NoMatch;
