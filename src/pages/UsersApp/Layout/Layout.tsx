import { useNavigate } from "react-router-dom"

import { LayoutProps } from "./types"
import {
  LayoutWrapper,
  Header,
  HeaderLogoContainer,
  HeaderLogo,
  NavContainer,
  Main,
  Footer,
  StyledNavLink,
  StyledLink,
  FooterNavContainer,
} from "./styles"

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()

  const goToHomePage = () => navigate("/")

  return (
    <LayoutWrapper>
      <Header>
        <HeaderLogoContainer onClick={goToHomePage}>
          <HeaderLogo />
        </HeaderLogoContainer>
        <NavContainer>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/"
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/users"
          >
            Users
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <HeaderLogoContainer onClick={goToHomePage}>
          <HeaderLogo />
        </HeaderLogoContainer>
        <FooterNavContainer>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/users">Users</StyledLink>
        </FooterNavContainer>
      </Footer>
    </LayoutWrapper>
  )
}

export default Layout
