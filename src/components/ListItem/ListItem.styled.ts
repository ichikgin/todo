import styled from "styled-components";
import { Link } from "react-router-dom";

export const Item = styled(Link)<{ done: boolean }>`
  text-decoration: none;
  padding: 10px;
  color: ${props => props.done?'green': 'red'};

`