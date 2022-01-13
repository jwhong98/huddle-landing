import React from "react";
import {
  Head,
  Nav,
  Logo,
  NavButton,
  TextWrap,
  Title,
  Description,
  Img,
} from "./HeaderElements";
import logo from "../../images/logo.svg";
import img from "../../images/illustration-mockups.svg";
import Button from "../Button";

const Header = () => {
  return (
    <Head>
      <Nav>
        <Logo src={logo} />
        <NavButton>try it free</NavButton>
      </Nav>
      <TextWrap>
        <Title>build the community your fans will love</Title>
        <Description>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </Description>
        <Button />
      </TextWrap>
      <Img src={img} />
    </Head>
  );
};

export default Header;
