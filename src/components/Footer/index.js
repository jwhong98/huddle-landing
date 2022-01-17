import React from "react";
import {
  Foot,
  Logo,
  Icon,
  Span,
  List,
  ListItem,
  Link,
  Social,
  Info,
  CopyRight,
} from "./FooterElements";
import logo from "../../images/logo.svg";
import location from "../../images/icon-location.svg";
import phone from "../../images/icon-phone.svg";
import email from "../../images/icon-email.svg";

const Footer = () => {
  return (
    <Foot>
      <List>
        <Logo src={logo} />
        <ListItem>
          <Icon src={location} />
          <Span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Span>
        </ListItem>
        <ListItem>
          <Icon src={phone} />
          <Span>+1-543-123-4567</Span>
        </ListItem>
        <ListItem>
          <Icon src={email} />
          <Span>example@huddle.com</Span>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <Link>about us</Link>
        </ListItem>
        <ListItem>
          <Link>what we do</Link>
        </ListItem>
        <ListItem>
          <Link>FAQ</Link>
        </ListItem>
        <ListItem>
          <Link>career</Link>
        </ListItem>
        <ListItem>
          <Link>blog</Link>
        </ListItem>
        <ListItem>
          <Link>contact us</Link>
        </ListItem>
      </List>
      <Info>
        <Social>
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
        </Social>
        <CopyRight>
          &copy; Copyright 2018 Huddle. All rights reserved.
        </CopyRight>
      </Info>
    </Foot>
  );
};

export default Footer;
