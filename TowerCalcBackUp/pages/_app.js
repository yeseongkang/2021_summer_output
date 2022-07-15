import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

import wrapper from '../store/configureStore';

const TowerCalc = ({ Component }) => {
  return (
    <>
      <Head>
        <title>반천교회</title>
      </Head>
      <Component />
    </>
  );
};

TowerCalc.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(TowerCalc);
