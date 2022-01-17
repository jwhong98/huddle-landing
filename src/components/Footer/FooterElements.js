import styled from "styled-components";

export const Foot = styled.footer`
  width: 100%;
  background-color: hsl(192, 100%, 9%);
  padding: 3rem 1rem;
  z-index: 1;
  margin-top: -4.25rem;
`;

export const Logo = styled.img`
  margin-top: 3.25rem;
  margin-bottom: 1rem;
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(300deg)
    brightness(107%) contrast(102%);
  width: 8rem;
`;

export const Location = styled.div``;

export const Icon = styled.img`
  margin-right: 1rem;
`;

export const Span = styled.span`
  font-size: 0.75rem;
`;

export const Phone = styled.div``;

export const Email = styled.div``;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 3.5rem;
`;

export const ListItem = styled.li`
  color: #fff;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
`;

export const Link = styled.a`
  text-transform: capitalize;
  font-size: 0.9rem;
`;

export const Info = styled.div`
  width: 100%;
`;

export const Social = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 5rem;
  margin: auto;
  margin-bottom: 1.5rem;
`;

export const CopyRight = styled.p`
  color: #fff;
  font-size: 0.65rem;
  text-align: center;
`;
