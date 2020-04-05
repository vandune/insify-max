import * as React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

const Navigation: React.FC = () => {
  return (
    <Nav>
      <Section>
        <Logo>
          <Img src={logo} alt="Insify" />
        </Logo>
      </Section>
      <P>Let’s get <span>Amsterdam Barber Brothers</span> covered</P>
    </Nav>
  )
}

export default Navigation;

const Nav = styled.nav`
  height: 64px;
  position: relative;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid rgba(0,0,0,0.04);
`

const Section = styled.section`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 1354px;
  padding: 0 8px;
`

const Logo = styled.div`
  width: 112px;
  position: relative;
  background-color: #122A67;
  height: calc(100% + 14px);
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 0 0 4px 4px;
  z-index: 1;
`

const Img = styled.img`
  display: block;
  width: 100%;
`

const P = styled.p`
  font-size: 14px;
  color: #222222;
  margin-left: auto;
  text-align: right;
  position: absolute;
  top: 22px;
  right: 24px;

  span {
    font-weight: 600;
  }
`

