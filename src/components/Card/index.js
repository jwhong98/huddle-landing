import React from "react";
import { Container, Img, TextWrap, Title, Description } from "./CardElements";

const Card = (props) => {
  return (
    <Container>
      <Img src={props.img} />
      <TextWrap>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </TextWrap>
    </Container>
  );
};

export default Card;
