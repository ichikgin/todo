import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const HeaderBlock = styled.header`
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  background-color: #4682b4;
  display: flex;
  align-items: center;
`;

export const HeaderNavigate = styled.div`
  max-width: 97%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderLink = styled(NavLink).attrs({
  className: ({ isActive }: { isActive: boolean }) =>
    isActive ? "active" : "",
})`
  text-decoration: none;
  padding: 10px;
  color: #fff;
  &.active {
    color: #ffffff33;
  }
`;

export const ToggleButton = styled.button`
position: absolute;
right:15px;
top:50%;
transform: translateY(-50%);
border: 0px solid grey;
border-radius: 10px;
box-shadow: 1px 1px 2px 2px rgba(0, 0, 255, 0.2);
background-color: #4682b4;
cursor: pointer
  `;
