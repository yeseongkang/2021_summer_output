import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import styled, {createGlobalStyle} from 'styled-components';

import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

import MainPageHeader from "./MainPageHeader";
// import MainPageContents from "./MainPage/MainPageContents";


const ContentsWrapper = styled.div`
  position: relative;
  max-width: 1800px;
  padding-right: 60px;
  padding-left: 60px;
  margin: 0 auto;
`; 

const AppLayout = ({children}) => {
    const {isLoggedIn} = useSelector(state => state.user);
    return (
        <>
              <Layout>
                <MainPageHeader/>
            <Content>
            {children}
            </Content>
            <Footer>Copyright ©반천교회   
            울산광역시 울주군 언양읍 대암둔기로 7. Tel.052-262-9555</Footer>
            </Layout>
            
            
        </>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;




