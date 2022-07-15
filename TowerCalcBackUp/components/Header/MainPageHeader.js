import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Input, Row, Col, Image, Button} from 'antd';
import Link from "next/link";


import {HeaderSection, HeaderWrapper, TopMenu, MainMenu} from './MainPageHeaderCSS';


import { Menu } from 'antd';

import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;





const MainPageHeader = () => {
    const {isLoggedIn} = useSelector(state => state.user);
    return (
        <Menu>
            <HeaderSection>
                <HeaderWrapper>
                    <Row justify="end" align="middle">
                        {!isLoggedIn ?
                            <>
                                <Col>
                                    <TopMenu type="link">
                                        <Link href="#"><a>Login</a></Link>
                                    </TopMenu>
                                </Col>
                                <Col>
                                    <TopMenu type="link">
                                        <Link href="signup"><a>Sign Up</a></Link>
                                    </TopMenu>
                                </Col>
                                <Col>
                                    <TopMenu type="link">
                                        <Input.Search style={{ width: 200 }}/>            
                                    </TopMenu>
                                </Col>
                            </>
                            :
                            <>
                                
                            </>
                        }
                    </Row>

                    <Row gutter={0} align="middle">
                        <Col span={8} style={{marginBottom: 20}}>
                            <Link href="/"><a><img src='/assets/logoIM.png'/></a></Link>
                        </Col>
                        <Col span={8}>
                            {/*<Input.Search enterButton style={{ verticalAlign: 'middle' }} />*/}
                        </Col>
                        <Col span={8}>
                            <Row justify="end" gutter={0}>
                                <Col>
                                    <MainMenu type="link">
                                        <Link href="church_intro"><a>교회안내</a></Link>
                                                                                  
                                    </MainMenu>
                                </Col>
                                
                                <Col>
                                    <MainMenu type="link">
                                        <Link href="preaching"><a>말씀과설교</a></Link>
                                       
                                    </MainMenu>
                                </Col>
                                <Col>
                                    <MainMenu type="link">
                                        <Link href="school_baby"><a>교회학교</a></Link>
                                        
                                    </MainMenu> 
                                </Col>
                                <Col>
                                    <MainMenu type="link">
                                        <Link href="appar_man"><a>교회기관</a></Link>
                                              
                                    </MainMenu>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </HeaderWrapper>
            </HeaderSection>
        </Menu>
        
        
    );
};



export default MainPageHeader;






