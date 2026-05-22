import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../theme';

const Bar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 18px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease;
  background: ${(p) => (p.$scrolled ? 'rgba(11, 27, 43, 0.85)' : 'transparent')};
  backdrop-filter: ${(p) => (p.$scrolled ? 'blur(12px)' : 'none')};
  border-bottom: 1px solid ${(p) => (p.$scrolled ? 'rgba(248, 244, 237, 0.08)' : 'transparent')};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 14px 20px;
  }
`;

const Logo = styled(Link)`
  font-family: ${theme.fonts.display};
  font-size: 1.5rem;
  color: ${theme.colors.cream};
  font-style: italic;
  letter-spacing: 0.02em;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 16px;
  }
`;

const NavLink = styled(Link)`
  color: ${theme.colors.cream};
  font-size: 0.92rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  opacity: 0.85;
  transition: opacity 0.2s ease, color 0.2s ease;

  &:hover {
    opacity: 1;
    color: ${theme.colors.coral};
  }
`;

const NavAnchor = styled.a`
  color: ${theme.colors.cream};
  font-size: 0.92rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  opacity: 0.85;
  cursor: pointer;
  transition: opacity 0.2s ease, color 0.2s ease;

  &:hover {
    opacity: 1;
    color: ${theme.colors.coral};
  }
`;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Bar $scrolled={scrolled}>
      <Logo to="/">CP</Logo>
      <Links>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/comunidad">Comunidad</NavLink>
        {isHome ? (
          <NavAnchor href="#contacto">Contacto</NavAnchor>
        ) : (
          <NavLink to="/#contacto">Contacto</NavLink>
        )}
      </Links>
    </Bar>
  );
}
