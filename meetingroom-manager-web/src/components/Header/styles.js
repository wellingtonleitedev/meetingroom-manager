import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: #fff;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
`;
export const Nav = styled.ul`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
`;

export const Perfil = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Item = styled(Link)`
  margin: 0 10px 10px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 0;
`;
