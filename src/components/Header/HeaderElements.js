import styled from "styled-components";
import img from "../../images/bg-hero-mobile.svg";

export const Head = styled.section`
  width: 100%;
  padding: 1rem;
  background-image: url(${img});
  background-color: hsl(193, 100%, 96%);
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 6.25rem;
`;

export const NavButton = styled.button`
  text-transform: capitalize;
  font-size: 0.65rem;
  border: none;
  background-color: #fff;
  font-weight: 700;
  padding: 0.25rem 1.25rem;
  border-radius: 25px;
  font-family: inherit;
  box-shadow: 0 2px 5px rgb(0 0 0 / 0.2);
`;

export const TextWrap = styled.div`
  text-align: center;
  margin-top: 3.5rem;
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  text-transform: capitalize;
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
`;

export const Description = styled.p`
  margin-bottom: 2rem;
`;

export const Img = styled.img`
  width: 100%;
  margin-top: 3rem;
`;
