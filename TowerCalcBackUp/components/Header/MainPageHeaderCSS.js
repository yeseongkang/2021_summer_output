import styled, { createGlobalStyle } from 'styled-components';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';


export const HeaderSection = styled.div`
  position: relative;
  background-color: #fff;
  padding-bottom: 0px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
  margin-bottom: 0px;
  z-index: 999;
`;

export const HeaderWrapper = styled.div`
  position: relative;
  max-width: 1900px;
  padding-right: 60px;
  padding-left: 60px;
  margin: 0 auto;
`;

export const TopMenu = styled(Button)`
  margin-top: 16px;
  color: #707070;
  font-size: 16px;
  font-weight: regular;
  :hover {
    color: #000;
  }
  :focus {
    color: #000;
  }
  :active {
    color: #000;
  }
`;

export const MainMenu = styled(Button)`
  color: #000000;
  font-size: 18px;
  font-weight: Bold;
  :hover {
    color: #58ACFF;
  }
  :focus {
    color: #58ACFF;
  }
  :active {
    color: #58ACFF;
  }
`;
