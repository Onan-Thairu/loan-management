import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>Loan Management</Logo>
        <Links>
          <NavLink to={"#"}>Payments</NavLink>
          <NavLink to={"/logout"}>Logout</NavLink>
        </Links>
      </Nav>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .8rem;
  background-color: #004c3f;
`;

const Logo = styled.h1`
  font-size: 1rem;
  color: #fff;
  background-color: #004c3f;
`;

const Links = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #004c3f;
`;

const NavLink = styled(Link)`
font-size: .6rem;
color: #fff;
margin-left: 2rem;
text-decoration: none;
cursor: pointer;
background-color: #004c3f;

&:hover {
  text-decoration: underline;
}

@media screen and (max-width: 768px) {
  margin-left: 1rem;
}
`

export default Header;
