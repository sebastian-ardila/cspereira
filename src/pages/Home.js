import styled, { keyframes } from 'styled-components';
import { theme } from '../theme';
import WhatsAppButton from '../components/WhatsAppButton';

const blobFloat = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -40px) scale(1.05); }
  66% { transform: translate(-20px, 30px) scale(0.95); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); opacity: 0.5; }
  50% { transform: translateY(8px); opacity: 1; }
`;

const Hero = styled.section`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, ${theme.colors.midnight} 0%, ${theme.colors.deepBlue} 100%);
  color: ${theme.colors.cream};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  overflow: hidden;
`;

const Blob = styled.div`
  position: absolute;
  top: 10%;
  right: 8%;
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, ${theme.colors.coral} 0%, transparent 70%);
  opacity: 0.35;
  border-radius: 50%;
  filter: blur(40px);
  animation: ${blobFloat} 14s ease-in-out infinite;
  pointer-events: none;

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 280px;
    height: 280px;
    top: 20%;
    right: -10%;
  }
`;

const BlobTwo = styled(Blob)`
  top: auto;
  bottom: 5%;
  left: 5%;
  right: auto;
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, ${theme.colors.gold} 0%, transparent 70%);
  opacity: 0.2;
  animation-duration: 18s;
  animation-direction: reverse;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`;

const Eyebrow = styled.div`
  color: ${theme.colors.gold};
  font-size: 0.82rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-weight: 500;
`;

const Title = styled.h1`
  font-family: ${theme.fonts.display};
  font-size: clamp(3rem, 9vw, 6.5rem);
  font-weight: 400;
  line-height: 1;
  margin: 0;
  letter-spacing: -0.01em;

  em {
    font-style: italic;
    color: ${theme.colors.coral};
  }
`;

const Divider = styled.div`
  width: 64px;
  height: 1px;
  background: ${theme.colors.gold};
  opacity: 0.6;
`;

const Tagline = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 400;
  margin: 0;
  opacity: 0.9;
  letter-spacing: 0.05em;
`;

const CTA = styled.a`
  margin-top: 12px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 36px;
  background: ${theme.colors.coral};
  color: ${theme.colors.midnight};
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 14px rgba(255, 122, 107, 0.4);

  &:hover {
    background: ${theme.colors.coralDark};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 122, 107, 0.55);
  }
`;

const ScrollHint = styled.div`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  color: ${theme.colors.cream};
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  opacity: 0.6;
  animation: ${bounce} 2s ease-in-out infinite;

  &::after {
    content: '↓';
    display: block;
    margin-top: 6px;
    font-size: 1rem;
  }
`;

const Contacto = styled.section`
  background: ${theme.colors.cream};
  padding: 96px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactoCard = styled.div`
  max-width: 560px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ContactoTitle = styled.h2`
  font-family: ${theme.fonts.display};
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-weight: 400;
  margin: 0;
  color: ${theme.colors.midnight};
  line-height: 1.1;
`;

const ContactoText = styled.p`
  font-size: 1.05rem;
  color: ${theme.colors.muted};
  margin: 0 0 12px 0;
  line-height: 1.6;
`;

export default function Home() {
  return (
    <main>
      <Hero>
        <Blob />
        <BlobTwo />
        <HeroContent>
          <Eyebrow>Pereira · Colombia</Eyebrow>
          <Title>
            Couchsurfing <em>Pereira</em>
          </Title>
          <Divider />
          <Tagline>Viaja. Comparte. Pertenece.</Tagline>
          <CTA href="#contacto">Contáctanos →</CTA>
        </HeroContent>
        <ScrollHint>scroll</ScrollHint>
      </Hero>

      <Contacto id="contacto">
        <ContactoCard>
          <ContactoTitle>¿Listo para conectarte?</ContactoTitle>
          <ContactoText>
            Escríbenos por WhatsApp y únete a la comunidad de viajeros y anfitriones de Pereira.
          </ContactoText>
          <WhatsAppButton
            label="Chatear por WhatsApp"
            message="¡Hola! Me gustaría saber más sobre Couchsurfing Pereira."
          />
        </ContactoCard>
      </Contacto>
    </main>
  );
}
