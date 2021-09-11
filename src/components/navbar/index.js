import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import {
  MobileIcon,
  Nav,
  NavBarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from "./navBarElements";
import { useState } from "react";

export default function NavBar({ toggle }) {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">The Master's Way</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="prayer">Prayer</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="donations">Donations</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink>Request</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
}
