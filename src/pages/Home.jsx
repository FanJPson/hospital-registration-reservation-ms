import { Layout, Menu, Button, Grid } from '@arco-design/web-react';
import { useNavigate } from 'react-router-dom';

import '../styles/Home.css';
import beian from '../static/beian.png';

function Home() {
  const navigate = useNavigate();

  const Info = {
    BrandName: 'FanJPson',
    ICPFiling: '粤ICP备12345678号',
    PublicSecurityFiling: '粤公网安备12345678901234号',
  };

  return (
    <Layout>
      <Layout.Header>
        <div className='logo' />
        <div className='nav-header'>
          <Menu mode='horizontal' defaultSelectedKeys={['0']}>
            <Menu.Item key='0'>Item00</Menu.Item>
            <Menu.Item key='1'>Item01</Menu.Item>
          </Menu>
        </div>
        <div style={{ flex: '1 1 0%' }} />
        <div className='nav-footer'>
          <Button type='primary' onClick={() => navigate('/login')}>
            登录
          </Button>
        </div>
      </Layout.Header>
      <Layout.Content>
        <div className='carousel-demo'></div>
        <Grid.Row>
          <Grid.Col span={14} offset={3}>
            1
          </Grid.Col>
          <Grid.Col span={4}>2</Grid.Col>
        </Grid.Row>
      </Layout.Content>
      <Layout.Footer>
        <div className='SiteInfo'>
          <span>© 2021 {Info.BrandName}. All rights reserved.</span>
          <span>
            <a href='https://beian.miit.gov.cn/'>{Info.ICPFiling}</a>
          </span>
          <span>
            <img src={beian} alt='' />
            <a href='https://beian.miit.gov.cn/'>{Info.PublicSecurityFiling}</a>
          </span>
        </div>
      </Layout.Footer>
    </Layout>
  );
}

export default Home;
