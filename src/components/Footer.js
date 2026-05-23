import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../theme';

const Wrapper = styled.footer`
  background: ${theme.colors.ink};
  color: ${theme.colors.paper};
  padding: 56px 32px 32px;
  border-top: 12px solid ${theme.colors.orange};
`;

const Inner = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: end;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const Big = styled.div`
  font-family: ${theme.fonts.display};
  font-weight: 800;
  font-size: clamp(2.4rem, 7vw, 5.5rem);
  line-height: 0.9;
  letter-spacing: -0.03em;
  text-transform: uppercase;

  em {
    font-style: italic;
    color: ${theme.colors.orange};
    font-weight: 400;
  }
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: ${theme.fonts.mono};
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.7;
`;

const MetaLink = styled(Link)`
  color: ${theme.colors.orange};
  border-bottom: 1px solid ${theme.colors.orange};
  padding-bottom: 1px;
  width: fit-content;

  &:hover {
    color: ${theme.colors.paper};
    border-color: ${theme.colors.paper};
  }
`;

const Bar = styled.div`
  max-width: ${theme.maxWidth};
  margin: 56px auto 0;
  padding-top: 20px;
  border-top: 1px solid rgba(250, 250, 247, 0.15);
  display: flex;
  justify-content: space-between;
  font-family: ${theme.fonts.mono};
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.55;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 8px;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <Inner>
        <Big>
          Hasta<br />pronto<em>.</em>
        </Big>
        <Meta>
          <div>Couchsurfing · Pereira</div>
          <div>04°48′N 75°41′W</div>
          <MetaLink to="/comunidad">→ Conoce la comunidad</MetaLink>
        </Meta>
      </Inner>
      <Bar>
        <div>© 2026 — Hecho en Pereira</div>
        <div>Vol. 01 / Edición Web</div>
      </Bar>
    </Wrapper>
  );
}
