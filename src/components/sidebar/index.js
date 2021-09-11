import React from "react";
import {
  CloseIcon,
  Icon,
  sideBarContainer,
  SideBarLink,
  SideBarRoute,
  SideBarWrapper,
  SideBtnWrap,
  SideBarMenu
} from "./sideBarElements";

export default function SideBar({ isOpen, toggle }) {
  return (
    <sideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="Home" onClick={toggle}>
            Home
          </SideBarLink>
          <SideBarLink to="Contacts" onClick={toggle}>
            Contact
          </SideBarLink>
          <SideBarLink to="Directions" onClick={toggle}>
            Directions
          </SideBarLink>
          <SideBarLink to="Donations" onClick={toggle}>
            Donations
          </SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute></SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </sideBarContainer>
  );
}
