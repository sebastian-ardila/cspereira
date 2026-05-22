import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../theme';
import WhatsAppButton from '../components/WhatsAppButton';

const Hero = styled.section`
  background: linear-gradient(135deg, ${theme.colors.deepBlue} 0%, ${theme.colors.midnight} 100%);
  color: ${theme.colors.cream};
  padding: 160px 32px 96px;
  text-align: center;
`;

const HeroInner = styled.div`
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const Eyebrow = styled.div`
  color: ${theme.colors.gold};
  font-size: 0.82rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-weight: 500;
`;

const HeroTitle = styled.h1`
  font-family: ${theme.fonts.display};
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  font-weight: 400;
  margin: 0;
  line-height: 1.05;

  em {
    font-style: italic;
    color: ${theme.colors.coral};
  }
`;

const HeroSub = styled.p`
  font-size: 1.1rem;
  opacity: 0.85;
  max-width: 520px;
  margin: 0;
  line-height: 1.6;
`;

const About = styled.section`
  background: ${theme.colors.cream};
  padding: 96px 32px;
`;

const AboutInner = styled.div`
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SectionTitle = styled.h2`
  font-family: ${theme.fonts.display};
  font-size: clamp(2rem, 4.5vw, 2.8rem);
  font-weight: 400;
  margin: 0;
  color: ${theme.colors.midnight};
  line-height: 1.1;
`;

const Paragraph = styled.p`
  font-size: 1.05rem;
  line-height: 1.75;
  color: ${theme.colors.ink};
  margin: 0;
`;

const BlogSection = styled.section`
  background: ${theme.colors.cream};
  padding: 0 32px 96px;
`;

const BlogInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const BlogHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
`;

const BlogIframeWrap = styled.div`
  background: white;
  border-radius: ${theme.radius};
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(11, 27, 43, 0.08);
  border: 1px solid rgba(11, 27, 43, 0.06);
`;

const BlogIframe = styled.iframe`
  width: 100%;
  height: 900px;
  border: 0;
  display: block;
`;

const Authors = styled.section`
  background: ${theme.colors.midnight};
  color: ${theme.colors.cream};
  padding: 96px 32px;
`;

const AuthorsInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const AuthorsTitle = styled.h2`
  font-family: ${theme.fonts.display};
  font-size: clamp(2rem, 4.5vw, 2.8rem);
  font-weight: 400;
  margin: 0;
  text-align: center;

  em {
    font-style: italic;
    color: ${theme.colors.coral};
  }
`;

const AuthorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
`;

const AuthorCard = styled.a`
  background: rgba(248, 244, 237, 0.04);
  border: 1px solid rgba(248, 244, 237, 0.08);
  border-radius: ${theme.radius};
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  text-align: center;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background: rgba(255, 122, 107, 0.08);
    border-color: ${theme.colors.coral};
    transform: translateY(-3px);
  }
`;

const Avatar = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${theme.colors.coral} 0%, ${theme.colors.gold} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${theme.fonts.display};
  font-size: 1.6rem;
  color: ${theme.colors.midnight};
  font-style: italic;
`;

const AuthorName = styled.div`
  font-size: 0.98rem;
  font-weight: 500;
  letter-spacing: 0.01em;
`;

const CTASection = styled.section`
  background: ${theme.colors.cream};
  padding: 96px 32px;
  text-align: center;
`;

const CTAInner = styled.div`
  max-width: 560px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const BackLink = styled(Link)`
  color: ${theme.colors.coral};
  font-weight: 500;
  font-size: 0.95rem;

  &:hover {
    text-decoration: underline;
  }
`;

const authors = [
  { name: 'Harold Romero', initials: 'HR', link: '#' },
  { name: 'Maribel Obando', initials: 'MO', link: '#' },
  { name: 'Andres Zuluaga', initials: 'AZ', link: '#' },
  { name: 'Sebastian Ardila', initials: 'SA', link: '#' },
];

export default function Comunidad() {
  return (
    <main>
      <Hero>
        <HeroInner>
          <Eyebrow>La comunidad</Eyebrow>
          <HeroTitle>
            Una <em>red</em> de viajeros y anfitriones
          </HeroTitle>
          <HeroSub>
            Conocemos personas, intercambiamos historias y abrimos nuestras puertas a quien viaja por Pereira.
          </HeroSub>
        </HeroInner>
      </Hero>

      <About>
        <AboutInner>
          <SectionTitle>¿Qué es Couchsurfing Pereira?</SectionTitle>
          <Paragraph>
            Somos un grupo local de viajeros, anfitriones y curiosos que cree que la mejor forma de
            conocer un lugar es a través de su gente. Organizamos encuentros, rutas y experiencias
            para que cualquier persona que pase por Pereira pueda sentirse en casa.
          </Paragraph>
          <Paragraph>
            La comunidad es abierta y gratuita. Si te interesa hospedar, viajar, o simplemente
            unirte a un próximo evento, contáctanos por WhatsApp.
          </Paragraph>
        </AboutInner>
      </About>

      <BlogSection>
        <BlogInner>
          <BlogHeader>
            <SectionTitle>Desde el blog</SectionTitle>
            <Paragraph>Historias y rutas que hemos compartido como comunidad.</Paragraph>
          </BlogHeader>
          <BlogIframeWrap>
            <BlogIframe
              title="Blog de Couchsurfing Pereira"
              src="https://couchsurfingpereira.blogspot.com/2023/09/salento-ruta-circular.html"
            />
          </BlogIframeWrap>
        </BlogInner>
      </BlogSection>

      <Authors>
        <AuthorsInner>
          <AuthorsTitle>
            Construido <em>por</em>
          </AuthorsTitle>
          <AuthorsGrid>
            {authors.map((author) => (
              <AuthorCard key={author.name} href={author.link}>
                <Avatar>{author.initials}</Avatar>
                <AuthorName>{author.name}</AuthorName>
              </AuthorCard>
            ))}
          </AuthorsGrid>
        </AuthorsInner>
      </Authors>

      <CTASection>
        <CTAInner>
          <SectionTitle>¿Te animas?</SectionTitle>
          <Paragraph>Únete a la comunidad escribiéndonos por WhatsApp.</Paragraph>
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
