import React from 'react';
import { useSelector } from 'react-redux';
import * as THREE from "three";
import styled from 'styled-components';
import {Row, Col, Tabs, Menu, Input, Button,  Radio } from 'antd';
import AppLayout from '../components/Header/MainPageHeader';
//import AppLayout from "./MainPageHeader";
// import PostForm from '../components/PostForm';
// import PostCard from '../components/PostCard';

const { SubMenu } = Menu;
const { TabPane } = Tabs;
const TowerViewSection = styled.div`
  position: relative;
  background : #ffffff;
  max-width: 1350px;
  height: 87vh;
  margin: 0 auto;
  padding-top: 30px;
  padding-left : 50px
  
`;

const SettingSection = styled.div`
  position: relative;
  height: 87vh;
  margin: 0 auto;
  padding-top: 30px;
  padding-inline: 5%;
`;

const CustomTabs = styled(Tabs)`
  .ant-tabs-tab {
    padding-inline : 1em;
  }
  .ant-tabs-tab-btn {
    font-size: medium;
    font-weight: bold;
    margin: 0 auto;
  }
`

/*Three.js*/


const Home = () => {
  // const { isLoggedIn } = useSelector(state => state.user);
  // const { mainPosts } = useSelector(state => state.post);
  

  const [value, setValue] = React.useState(1);
  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <AppLayout>
      <Row>
        <Col xs={8} lg={4}>
          <Menu mode="inline"> 
            <SubMenu key="교회학교" title="교회학교" style={{fontWeight:'bold'}}>
              <Menu.Item key="유아동부" style={{fontWeight:'normal'}}><a href = "school_baby">유아동부</a></Menu.Item>
              <Menu.Item key="중고등부" style={{fontWeight:'normal'}}><a href = "school_middle">중고등부</a></Menu.Item>
              <Menu.Item key="청년부" style={{fontWeight:'normal'}}><a href = "school_young">청년부</a></Menu.Item>
            </SubMenu>
            
          </Menu>
        </Col>
        <Col xs={16} lg={12}>
          <TowerViewSection>유아동부</TowerViewSection>
        </Col>
        
      </Row>
    </AppLayout>
  );
};

export default Home;
