import React from "react";
import {
  ImageCover,
  MainDiv,
  ContentBox,
  LogoText,
} from "./AuthImageCol.styles";
import NarutoSign from "../../../img/NarutoSign.png";
import AuthContextImage from "../../../img/AuthContextImage.png";
function AuthImageCol() {
  return (
    <MainDiv>
      <ImageCover>
        <img
          src={NarutoSign}
          alt="logo"
          style={{ width: "90px", height: "90px" }}
        />
        <LogoText>Logo</LogoText>
      </ImageCover>
      <ContentBox>
        #Lorem ipsum dolor sit amet, consectetur adipiscing elit Suspendisse
        quis amet,
      </ContentBox>
      <ImageCover>
        <img
          src={AuthContextImage}
          Style={{
            position: "absolute",
            width: "649px",
            height: "502px",
            left: "95px",
            top: "493px",
          }}
          alt="image"
        />
      </ImageCover>
    </MainDiv>
  );
}

export default AuthImageCol;
