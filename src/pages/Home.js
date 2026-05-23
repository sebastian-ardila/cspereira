import styled, { keyframes, css } from 'styled-components';
import { theme } from '../theme';
import WhatsAppButton from '../components/WhatsAppButton';

const marqueeScroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const slideUp = keyframes`
  from { transform: translateY(40px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const drawLine = keyframes`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`;

const slideDelay = (delay) => css`
  animation: ${slideUp} 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s both;
`;

const Hero = styled.section`
  position: relative;
  min-height: 100vh;
  background: ${theme.colors.paper};
  color: ${theme.colors.ink};
  padding: 120px 32px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 100px 18px 0;
  }
`;

const GridBg = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(10, 10, 10, 0.04) 1px, transparent 1px);
  background-size: 8.33% 100%;
  pointer-events: none;
  z-index: 0;
`;

const HeroGrid = styled.div`
  position: relative;
  z-index: 2;
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  align-items: start;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`;

const Eyebrow = styled.div`
  grid-column: 1 / 13;
  margin-top: 40px;
  font-family: ${theme.fonts.mono};
  font-size: 0.78rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${theme.colors.mute};
  display: flex;
  align-items: center;
  gap: 14px;
  ${slideDelay(0.2)}
`;

const EyebrowMark = styled.span`
  display: inline-block;
  width: 28px;
  height: 1px;
  background: ${theme.colors.ink};
`;

const Title = styled.h1`
  grid-column: 1 / 13;
  font-family: ${theme.fonts.display};
  font-weight: 800;
  font-size: clamp(3rem, 11.2vw, 10.5rem);
  line-height: 0.85;
  letter-spacing: -0.055em;
  margin: 24px 0 0;
  text-transform: uppercase;
  word-break: break-word;
  overflow-wrap: anywhere;
  ${slideDelay(0.3)}

  .line1 {
    display: block;
  }

  .line2 {
    display: block;
    -webkit-text-stroke: 2px ${theme.colors.ink};
    color: transparent;
    font-style: italic;
    font-weight: 400;
    margin-left: 6vw;

    @media (max-width: ${theme.breakpoints.mobile}) {
      -webkit-text-stroke: 1px ${theme.colors.ink};
      margin-left: 10vw;
    }
  }

  .accent {
    color: ${theme.colors.orange};
    -webkit-text-stroke: 0;
  }
`;

const TitleUnderline = styled.div`
  grid-column: 1 / 13;
  height: 12px;
  background: ${theme.colors.orange};
  margin-top: 16px;
  transform-origin: left;
  ${slideDelay(0.5)}
  animation-name: ${drawLine};
`;

const Lower = styled.div`
  grid-column: 1 / 13;
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  align-items: end;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const TaglineBlock = styled.div`
  grid-column: 1 / 7;
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${slideDelay(0.45)}

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-column: 1 / -1;
  }
`;

const Tagline = styled.p`
  font-family: ${theme.fonts.display};
  font-weight: 400;
  font-size: clamp(1.4rem, 2.4vw, 2rem);
  line-height: 1.1;
  letter-spacing: -0.01em;
  margin: 0;
  max-width: 28ch;

  em {
    font-style: italic;
    color: ${theme.colors.orange};
  }
`;

const Caption = styled.div`
  font-family: ${theme.fonts.mono};
  font-size: 0.74rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${theme.colors.mute};
`;

const CTABlock = styled.div`
  grid-column: 8 / 13;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  ${slideDelay(0.55)}

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-column: 1 / -1;
    align-items: flex-start;
  }
`;

const CTANumber = styled.div`
  font-family: ${theme.fonts.mono};
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${theme.colors.mute};
`;

const CTA = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 18px 26px;
  background: ${theme.colors.ink};
  color: ${theme.colors.paper};
  border: 2px solid ${theme.colors.ink};
  border-radius: 2px;
  font-family: ${theme.fonts.mono};
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease, color 0.18s ease;
  box-shadow: 6px 6px 0 ${theme.colors.orange};

  &:hover {
    background: ${theme.colors.orange};
    color: ${theme.colors.ink};
    transform: translate(-3px, -3px);
    box-shadow: 9px 9px 0 ${theme.colors.ink};
  }
`;

const Marquee = styled.div`
  position: relative;
  z-index: 2;
  margin-top: 80px;
  background: ${theme.colors.ink};
  color: ${theme.colors.paper};
  border-top: 2px solid ${theme.colors.ink};
  border-bottom: 2px solid ${theme.colors.ink};
  overflow: hidden;
  margin-left: -32px;
  margin-right: -32px;
  padding: 18px 0;

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-left: -18px;
    margin-right: -18px;
  }
`;

const MarqueeTrack = styled.div`
  display: flex;
  white-space: nowrap;
  animation: ${marqueeScroll} 28s linear infinite;
  font-family: ${theme.fonts.display};
  font-weight: 800;
  font-size: clamp(2rem, 5vw, 3.6rem);
  text-transform: uppercase;
  letter-spacing: -0.02em;
`;

const MarqueeItem = styled.span`
  padding: 0 28px;
  display: inline-flex;
  align-items: center;
  gap: 28px;

  &::after {
    content: '✺';
    color: ${theme.colors.orange};
    font-size: 0.7em;
  }
`;

const Contacto = styled.section`
  background: ${theme.colors.cream};
  padding: 120px 32px;
  color: ${theme.colors.ink};
  position: relative;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 96px 18px;
  }
`;

const ContactoInner = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  align-items: end;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const ContactoLabel = styled.div`
  grid-column: 1 / 5;
  font-family: ${theme.fonts.mono};
  font-size: 0.78rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${theme.colors.mute};
  display: flex;
  align-items: center;
  gap: 14px;

  &::before {
    content: '02';
    color: ${theme.colors.orange};
    font-weight: 700;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-column: 1 / -1;
  }
`;

const ContactoBody = styled.div`
  grid-column: 5 / 13;
  display: flex;
  flex-direction: column;
  gap: 36px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-column: 1 / -1;
  }
`;

const ContactoTitle = styled.h2`
  font-family: ${theme.fonts.display};
  font-weight: 700;
  font-size: clamp(2.4rem, 6vw, 5rem);
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

const ContactoText = styled.p`
  font-size: 1.05rem;
  line-height: 1.55;
  color: ${theme.colors.inkSoft};
  max-width: 48ch;
  margin: 0;
`;

const ContactoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
`;

const NumberPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  border: 2px solid ${theme.colors.ink};
  border-radius: 2px;
  background: ${theme.colors.paper};
  font-family: ${theme.fonts.mono};
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.05em;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${theme.colors.orange};
  }
`;

const OrangeStripe = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 12px;
  background: ${theme.colors.orange};
`;

export default function Home() {
  return (
    <main>
      <Hero>
        <GridBg />
        <HeroGrid>
          <Eyebrow>
            <EyebrowMark />
            Comunidad de viajeros · Edición 2026
          </Eyebrow>

          <Title>
            <span className="line1">Couchsurfing</span>
            <span className="line2">
              Pereira<span className="accent">.</span>
            </span>
          </Title>

          <TitleUnderline />

          <Lower>
            <TaglineBlock>
              <Caption>·· Manifiesto</Caption>
              <Tagline>
                Viaja. Comparte. <em>Pertenece</em>.<br />
                Una casa abierta en cada esquina.
              </Tagline>
            </TaglineBlock>

            <CTABlock>
              <CTANumber>→ 01 / Hablemos</CTANumber>
              <CTA href="#contacto">
                Ir a contacto
                <span>↓</span>
              </CTA>
            </CTABlock>
          </Lower>
        </HeroGrid>

        <Marquee>
          <MarqueeTrack>
            <MarqueeItem>Viaja</MarqueeItem>
            <MarqueeItem>Comparte</MarqueeItem>
            <MarqueeItem>Pertenece</MarqueeItem>
            <MarqueeItem>Pereira 2026</MarqueeItem>
            <MarqueeItem>Viaja</MarqueeItem>
            <MarqueeItem>Comparte</MarqueeItem>
            <MarqueeItem>Pertenece</MarqueeItem>
            <MarqueeItem>Pereira 2026</MarqueeItem>
          </MarqueeTrack>
        </Marquee>
      </Hero>

      <Contacto id="contacto">
        <OrangeStripe />
        <ContactoInner>
          <ContactoLabel>Contacto</ContactoLabel>
          <ContactoBody>
            <ContactoTitle>
              Escríbenos.<br />Te <em>esperamos</em>.
            </ContactoTitle>
            <ContactoText>
              No hay formularios largos ni listas de espera. Un mensaje por
              WhatsApp y te conectamos con la comunidad de Couchsurfing Pereira.
            </ContactoText>
            <ContactoRow>
              <WhatsAppButton
                label="Hablar por WhatsApp"
                message="¡Hola! Me gustaría saber más sobre Couchsurfing Pereira."
              />
              <NumberPill>+57 317 782 2100</NumberPill>
            </ContactoRow>
          </ContactoBody>
        </ContactoInner>
      </Contacto>
    </main>
  );
}
