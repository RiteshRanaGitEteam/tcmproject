import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

export const MainDiv = styled.div`
  width: 100%;
  padding: 0 10%;
`;

export const ImageCover = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
`;
export const LogoText = styled.h2`
background: linear-gradient(90deg, #2AB3DE 50.32%, #0021F5 96.18%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  margin: 0;
  line-height: normal;
  margin-left: 2%;
  font-weight: 400;
  font-size: 5.625rem;

  //   font-family: 'Harmattan';
`;

export const ContentBox = styled.p`
  color: #787878;
  text-align: left;
  font-style: normal;
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 147.02%;
`;
