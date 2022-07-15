import React from 'react';
import { useSelector } from 'react-redux';
import * as THREE from "three";
import styled from 'styled-components';
import {Row, Col, Tabs, Menu, Input, Button,  Radio } from 'antd';
import AppLayout from '../components/Header/AppLayout';
// import PostForm from '../components/PostForm';
// import PostCard from '../components/PostCard';


import { Carousel } from 'antd';



const { SubMenu } = Menu;
const { TabPane } = Tabs;

const TowerViewSection = styled.div`
  position: relative;
  background : #ffffff;
  max-width: 1500px;
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


const contentStyle = {
  height: '800px',
  color: '#fff',
  lineHeight: '1000px',
  textAlign: 'center',
  background: '#364d79',
};

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
      <Col>
        <Carousel autoplay>
          <div>
          <h3 style={contentStyle}>1</h3>          
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </Col>
      
    
      
    </AppLayout>
  );
};

export default Home;
