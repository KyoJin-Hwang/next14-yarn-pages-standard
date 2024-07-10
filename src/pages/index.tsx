import { css } from '@emotion/react';
import React from 'react';

const Home = () => {
  return <div css={test}>Hello</div>;
};
const test = css`
  background-color: red;
`;
export default Home;
