import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../theme';
import logo from '../Couchsurfing_Pereira_1.png';

const Bar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 10px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.25s ease, backdrop-filter 0.25s ease, border-color 0.25s ease;
  background: ${(p) => (p.$scrolled ? 'rgba(250, 250, 247, 0.88)' : 'transparent')};
  backdrop-filter: ${(p) => (p.$scrolled ? 'blur(14px)' : 'none')};
  border-bottom: none;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 14px 18px;
  }
`;

const LogoMark = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: ${(p) => (p.$onLight ? theme.colors.ink : theme.colors.paper)};
  font-family: ${theme.fonts.mono};
  font-weight: 500;
  font-size: 0.7rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  transition: color 0.18s ease;
`;

const LogoImg = styled.img`
  width: 96px;
  height: 96px;
  display: block;
  object-fit: contain;
  transition: transform 0.2s ease;

  ${LogoMark}:hover & {
    transform: rotate(-8deg);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 72px;
    height: 72px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 14px;
  }
`;

const baseLinkStyle = `
  font-family: ${theme.fonts.mono};
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  position: relative;
  padding: 4px 0;
  transition: color 0.18s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background: ${theme.colors.orange};
    transition: width 0.22s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  ${baseLinkStyle}
  color: ${(p) => (p.$onLight ? theme.colors.ink : theme.colors.paper)};

  &:hover {
    color: ${theme.colors.orange};
  }
`;

const NavAnchor = styled.a`
  ${baseLinkStyle}
  color: ${(p) => (p.$onLight ? theme.colors.ink : theme.colors.paper)};
  cursor: pointer;

  &:hover {
    color: ${theme.colors.orange};
  }
`;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  // Hero de home es claro (paper) → nav oscuro siempre.
  // Hero de comunidad es oscuro → nav claro hasta scroll; al hacer scroll el bg se vuelve claro y el nav oscuro.
  const onLight = isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Bar $scrolled={scrolled}>
      <LogoMark to="/" $onLight={onLight}>
        <LogoImg src={logo} alt="Couchsurfing Pereira" />
      </LogoMark>
      <Links>
        <NavLink to="/" $onLight={onLight}>Inicio</NavLink>
        <NavLink to="/comunidad" $onLight={onLight}>Comunidad</NavLink>
        {isHome ? (
          <NavAnchor href="#contacto" $onLight={onLight}>Contacto</NavAnchor>
        ) : (
          <NavLink to="/#contacto" $onLight={onLight}>Contacto</NavLink>
        )}
      </Links>
    </Bar>
  );
}
