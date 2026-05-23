import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../theme';
import WhatsAppButton from '../components/WhatsAppButton';

const Hero = styled.section`
  background: ${theme.colors.ink};
  color: ${theme.colors.paper};
  padding: 160px 32px 80px;
  position: relative;
  overflow: hidden;
  border-bottom: 12px solid ${theme.colors.orange};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 140px 20px 64px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 120px 16px 48px;
    border-bottom-width: 8px;
  }
`;

const HeroInner = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const HeroMeta = styled.div`
  grid-column: 1 / 13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${theme.fonts.mono};
  font-size: 0.74rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(250, 250, 247, 0.6);
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(250, 250, 247, 0.2);

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.62rem;
  }
`;

const HeroEyebrow = styled.div`
  grid-column: 1 / 13;
  margin-top: 32px;
  font-family: ${theme.fonts.mono};
  font-size: 0.78rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${theme.colors.orange};
`;

const HeroTitle = styled.h1`
  grid-column: 1 / 13;
  font-family: ${theme.fonts.display};
  font-weight: 800;
  font-size: clamp(2.4rem, 11vw, 10rem);
  line-height: 0.9;
  letter-spacing: -0.04em;
  margin: 16px 0 32px;
  text-transform: uppercase;

  em {
    font-style: italic;
    font-weight: 400;
    color: ${theme.colors.orange};
  }

  .stroke {
    -webkit-text-stroke: 2px ${theme.colors.paper};
    color: transparent;
    font-weight: 400;
    font-style: italic;

    @media (max-width: ${theme.breakpoints.mobile}) {
      -webkit-text-stroke: 1px ${theme.colors.paper};
    }
  }
`;

const HeroSub = styled.p`
  grid-column: 1 / 8;
  font-family: ${theme.fonts.display};
  font-weight: 400;
  font-size: clamp(1.2rem, 2vw, 1.6rem);
  line-height: 1.25;
  color: rgba(250, 250, 247, 0.85);
  margin: 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-column: 1 / -1;
  }
`;

const SectionWrap = styled.section`
  padding: 120px 32px;
  background: ${(p) => p.$bg || theme.colors.paper};
  color: ${(p) => p.$fg || theme.colors.ink};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 96px 20px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 72px 16px;
  }
`;

const SectionInner = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const SectionLabel = styled.div`
  grid-column: 1 / 4;
  font-family: ${theme.fonts.mono};
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${(p) => p.$fg || theme.colors.mute};
  display: flex;
  flex-direction: column;
  gap: 6px;

  .num {
    font-family: ${theme.fonts.display};
    font-weight: 800;
    font-size: 2.6rem;
    color: ${theme.colors.orange};
    line-height: 1;
    letter-spacing: -0.02em;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-column: 1 / -1;
    flex-direction: row;
    align-items: baseline;
    gap: 14px;

    .num {
      font-size: 2rem;
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.66rem;
    letter-spacing: 0.14em;
  }
`;

const SectionBody = styled.div`
  grid-column: 4 / 13;
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-column: 1 / -1;
  }
`;

const SectionTitle = styled.h2`
  font-family: ${theme.fonts.display};
  font-weight: 700;
  font-size: clamp(2.2rem, 5.5vw, 4.6rem);
  line-height: 0.95;
  letter-spacing: -0.035em;
  margin: 0;
  text-transform: uppercase;

  em {
    font-style: italic;
    color: ${theme.colors.orange};
    font-weight: 400;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
  max-width: 60ch;
`;

const Requirement = styled.div`
  margin-top: 8px;
  padding: 24px 28px;
  border-left: 6px solid ${theme.colors.orange};
  background: ${theme.colors.paper};
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 60ch;
`;

const RequirementLabel = styled.div`
  font-family: ${theme.fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${theme.colors.orange};
  font-weight: 700;
`;

const RequirementText = styled.p`
  font-family: ${theme.fonts.display};
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.01em;
  margin: 0;
  color: ${theme.colors.ink};

  a {
    color: ${theme.colors.orange};
    border-bottom: 2px solid ${theme.colors.orange};
    padding-bottom: 1px;
    transition: background 0.15s ease, color 0.15s ease;

    &:hover {
      background: ${theme.colors.orange};
      color: ${theme.colors.paper};
    }
  }
`;

const CTANumber = styled.div`
  font-family: ${theme.fonts.mono};
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${theme.colors.ink};
`;

const CTASection = styled.section`
  background: ${theme.colors.orange};
  color: ${theme.colors.ink};
  padding: 120px 32px;
  position: relative;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 96px 20px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 72px 16px;
  }
`;

const CTAInner = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

const CTATitle = styled.h2`
  font-family: ${theme.fonts.display};
  font-weight: 800;
  font-size: clamp(2.6rem, 10vw, 9rem);
  line-height: 0.9;
  letter-spacing: -0.04em;
  margin: 0;
  text-transform: uppercase;
  max-width: 14ch;
`;

const BackLink = styled(Link)`
  font-family: ${theme.fonts.mono};
  font-size: 0.8rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 8px 0;
  border-bottom: 2px solid ${theme.colors.ink};
  transition: gap 0.2s ease;

  &:hover {
    color: ${theme.colors.paper};
    border-color: ${theme.colors.paper};
  }
`;

export default function Comunidad() {
  return (
    <main>
      <Hero>
        <HeroInner>
          <HeroMeta>
            <span>· La comunidad / Vol. 01</span>
            <span>Pereira · Colombia</span>
          </HeroMeta>
          <HeroEyebrow>Capítulo 01 — Quiénes somos</HeroEyebrow>
          <HeroTitle>
            Una <em>red</em><br />
            <span className="stroke">abierta</span>
          </HeroTitle>
          <HeroSub>
            Viajeros, anfitriones y curiosos que creen que el mundo se entiende
            mejor desde la sala de alguien más.
          </HeroSub>
        </HeroInner>
      </Hero>

      <SectionWrap $bg={theme.colors.paper}>
        <SectionInner>
          <SectionLabel>
            <span className="num">01</span>
            <span>El manifiesto</span>
          </SectionLabel>
          <SectionBody>
            <SectionTitle>
              Sin formularios.<br />
              <em>Sin filtros</em>.
            </SectionTitle>
            <Paragraph>
              Couchsurfing Pereira es un grupo local de viajeros, anfitriones y
              curiosos. Creemos que la mejor forma de conocer un lugar es a través
              de su gente. Organizamos encuentros, rutas y experiencias para que
              cualquier persona que pase por Pereira pueda sentirse en casa.
            </Paragraph>
            <Paragraph>
              La comunidad es abierta y gratuita. Si te interesa hospedar, viajar,
              o simplemente unirte a un próximo evento, contáctanos por WhatsApp.
            </Paragraph>
            <Requirement>
              <RequirementLabel>· Único requisito</RequirementLabel>
              <RequirementText>
                Que hagas parte de la comunidad global de{' '}
                <a
                  href="https://www.couchsurfing.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Couchsurfing
                </a>
                .
              </RequirementText>
            </Requirement>
          </SectionBody>
        </SectionInner>
      </SectionWrap>

      <CTASection>
        <CTAInner>
          <CTANumber>→ 02 / Únete</CTANumber>
          <CTATitle>
            Tu turno<br />de entrar.
          </CTATitle>
          <WhatsAppButton
            label="Escribir por WhatsApp"
            message="¡Hola! Quiero unirme a la comunidad de Couchsurfing Pereira."
          />
          <BackLink to="/">← Volver al inicio</BackLink>
        </CTAInner>
      </CTASection>
    </main>
  );
}
