import React, { FC } from "react";
import styled from "styled-components";
import { Side } from './Side';
import { Container } from './Container';

const Base = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #222831;
  height: 100vh;
  width: 100vw;
  @media (max-width: 768px) {
    flex-direction: column;
  } ;
`;

const Main = styled.main`
  ${Container}
  flex: 4;
  display: flex;
  flex-direction: column;
  padding:5vw;
  justify-content: flex-end;
  align-items: flex-start;
`;
export const ResponsiveMain:FC= ({ children }) => {
  return (
    <Base>
      <Main>{children}</Main>
      <Side />
    </Base>
  );
};
