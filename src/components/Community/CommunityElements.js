import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
  z-index: 10;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 15px;
  padding: 2rem 1rem;
  background-color: #fff;
`;

export const Title = styled.h2`
  text-transform: capitalize;

  margin-bottom: 1.5rem;
`;
