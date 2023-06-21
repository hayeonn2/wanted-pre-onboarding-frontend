import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavBar() {
  return (
    <Nav className="flex justify-center items-center">
      <NavList className="flex flex-row my-8">
        <li>
          <NavItem to="/signin" className="ml-8 hover:text-blue-500">
            SignIn
          </NavItem>
        </li>
        <li>
          <NavItem to="/signup" className="ml-8 hover:text-blue-500">
            SingUp
          </NavItem>
        </li>
        <li>
          <NavItem to="/todo" className="ml-8 hover:text-blue-500">
            Todo
          </NavItem>
        </li>
      </NavList>
    </Nav>
  );
}

const Nav = styled.nav`
  width: 300px;
  margin: 50px auto 30px;
  font-size: 20px;
`;

const NavList = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-between;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: #000;
`;
