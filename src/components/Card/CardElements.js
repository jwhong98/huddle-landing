import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 15px;
  margin-top: 1.5rem;
`;

export const Img = styled.img`
  width: 100%;
  margin-bottom: 2rem;
`;

export const TextWrap = styled.div`
  text-align: center;
  padding: 0.75rem;
`;

export const Title = styled.h2`
  text-transform: capitalize;
  margin-bottom: 1rem;
  font-family: "Poppins", sans-serif;
  color: hsl(192, 100%, 9%);
`;

export const Description = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  color: hsl(208, 11%, 55%);
  line-height: 1.5;
`;
