import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../theme';

const Wrapper = styled.footer`
  background: ${theme.colors.midnight};
  color: ${theme.colors.cream};
  padding: 32px;
  text-align: center;
  font-size: 0.88rem;
  opacity: 0.85;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

const FooterLink = styled(Link)`
  color: ${theme.colors.coral};
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <div>Couchsurfing Pereira · 2026</div>
      <div>
        Conoce más sobre <FooterLink to="/comunidad">nuestra comunidad</FooterLink>
      </div>
    </Wrapper>
  );
}
