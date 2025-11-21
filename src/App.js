import logo from './Couchsurfing_Pereira_1.webp';
import {
  PageWrapper,
  NavigationBar,
  Brand,
  LogoImage,
  BrandTitle,
  NavLinks,
  NavLink,
  NavActions,
  MainContent,
  HeroSection,
  HeroContent,
  PillGroup,
  Pill,
  HeroTitle,
  HeroSubtitle,
  HeroActions,
  PrimaryButton,
  GhostButton,
  HeroVisual,
  VisualCard,
  VisualBadge,
  VisualTitle,
  VisualText,
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  CardGrid,
  InfoCard,
  CardTitle,
  CardText,
  StatsRow,
  StatCard,
  StatValue,
  StatLabel,
  Timeline,
  TimelineItem,
  TimelineTitle,
  TimelineMeta,
  TimelineText,
  Footer,
  FooterInner,
  FooterTitle,
  FooterNote,
} from './styled';

function App() {
  const pilares = [
    {
      title: 'Hospitalidad consciente',
      description:
        'Acompañamos cada llegada con anfitriones certificados, perfiles verificados y protocolos claros para sentirte seguro desde el primer mensaje.',
    },
    {
      title: 'Red creativa',
      description:
        'Unimos viajeros con artistas, guías y proyectos locales para co-crear experiencias fotográficas, gastronómicas y culturales con impacto.',
    },
    {
      title: 'Movilidad amable',
      description:
        'Itinerarios verdes, rutas en bici, mapas caminables y recomendaciones curadas para moverte por Pereira al ritmo de su escena contemporánea.',
    },
    {
      title: 'Club de bienestar',
      description:
        'Sesiones de yoga, cafés conversatorios y espacios de descanso para reconectar con el territorio y con las personas que lo habitan.',
    },
  ];

  const experiencias = [
    {
      title: 'Residencias creativas de cuatro semanas',
      description:
        'Convocatorias trimestrales donde conectamos a visitantes con colectivos locales para desarrollar piezas audiovisuales y talleres abiertos.',
    },
    {
      title: 'Ruta nocturna de autor',
      description:
        'Un recorrido reducido por terrazas, coctelerías y galerías independientes para descubrir la ciudad que vibra después de las 7 p. m.',
    },
    {
      title: 'Laboratorio caficultor',
      description:
        'Experiencia inmersiva en fincas aliadas, catación guiada y prácticas sostenibles junto a familias productoras del Eje Cafetero.',
    },
  ];

  const lineaTiempo = [
    {
      title: 'Registro & bienvenida',
      meta: 'Día 1 · Contacto dedicado',
      description:
        'Revisión de expectativas, verificación de perfiles y conexión con un anfitrión guía que te acompaña en tu primera semana.',
    },
    {
      title: 'Agenda personalizada',
      meta: 'Día 2-3 · Diseño colaborativo',
      description:
        'Diseñamos un plan a medida mezclando cultura urbana, naturaleza y encuentros con la comunidad Couchsurfing local.',
    },
    {
      title: 'Explora y comparte',
      meta: 'Durante tu estadía',
      description:
        'Participa en rutas, residencias o experiencias espontáneas; cada actividad deja aprendizajes documentados para futuros viajeros.',
    },
    {
      title: 'Cierre y legado',
      meta: 'Último día',
      description:
        'Creamos un registro de recomendaciones, fotos y testimonios para enriquecer el mapa vivo de la comunidad.',
    },
  ];

  return (
    <PageWrapper>
      <NavigationBar>
        <Brand>
          <LogoImage src={logo} alt="Logotipo de Couchsurfing Pereira" />
          <BrandTitle>Couchsurfing Pereira</BrandTitle>
        </Brand>
        <NavLinks>
          <NavLink href="#comunidad">Comunidad</NavLink>
          <NavLink href="#experiencias">Experiencias</NavLink>
          <NavLink href="#ruta">Cómo funciona</NavLink>
        </NavLinks>
        <NavActions>
          <GhostButton href="mailto:couchsurfingpereira@gmail.com">Escríbenos</GhostButton>
          <PrimaryButton href="#experiencias">Ver agenda</PrimaryButton>
        </NavActions>
      </NavigationBar>

      <MainContent>
        <HeroSection>
          <HeroContent>
            <PillGroup>
              <Pill>Comunidad curada</Pill>
              <Pill>Guías locales</Pill>
              <Pill>Impacto positivo</Pill>
            </PillGroup>
            <HeroTitle>
              Vive Pereira con anfitriones que diseñan experiencias modernas, seguras y memorables.
            </HeroTitle>
            <HeroSubtitle>
              Somos la red oficial de Couchsurfing en Pereira. Co-creamos itinerarios boutique, cuidamos la logística y abrimos
              puertas a proyectos creativos para que tu estadía sea ligera y profunda a la vez.
            </HeroSubtitle>
            <HeroActions>
              <PrimaryButton href="#comunidad">Explorar comunidad</PrimaryButton>
              <GhostButton href="#ruta">Descubrir el proceso</GhostButton>
            </HeroActions>
            <StatsRow>
              <StatCard>
                <StatValue>+70</StatValue>
                <StatLabel>anfitriones activos</StatLabel>
              </StatCard>
              <StatCard>
                <StatValue>32</StatValue>
                <StatLabel>experiencias curadas</StatLabel>
              </StatCard>
              <StatCard>
                <StatValue>4.9★</StatValue>
                <StatLabel>promedio de reseñas</StatLabel>
              </StatCard>
            </StatsRow>
          </HeroContent>

          <HeroVisual>
            <VisualCard>
              <VisualBadge>Temporada 2025</VisualBadge>
              <VisualTitle>Mapa vivo de recomendaciones</VisualTitle>
              <VisualText>
                Cafés de autor, terrazas secretas, residencias creativas y rutas verdes diseñadas para recorrer la ciudad a tu ritmo.
              </VisualText>
              <VisualText>
                Únete al chat comunitario para recibir alertas de eventos espontáneos y abrir nuevas colaboraciones.
              </VisualText>
            </VisualCard>
          </HeroVisual>
        </HeroSection>

        <Section id="comunidad">
          <SectionHeader>
            <SectionTitle>Comunidad que cuida y crea</SectionTitle>
            <SectionDescription>
              Conectamos perfiles verificados, protocolos claros y aliados locales para que cualquier intercambio fluya con respeto y propósito.
            </SectionDescription>
          </SectionHeader>
          <CardGrid>
            {pilares.map((item) => (
              <InfoCard key={item.title}>
                <CardTitle>{item.title}</CardTitle>
                <CardText>{item.description}</CardText>
              </InfoCard>
            ))}
          </CardGrid>
        </Section>

        <Section id="experiencias">
          <SectionHeader>
            <SectionTitle>Experiencias insignia 2025</SectionTitle>
            <SectionDescription>
              Programas con cupos limitados, diseñados junto a creadores locales, que mezclan cultura urbana, naturaleza y hospitalidad consciente.
            </SectionDescription>
          </SectionHeader>
          <CardGrid>
            {experiencias.map((item) => (
              <InfoCard key={item.title}>
                <CardTitle>{item.title}</CardTitle>
                <CardText>{item.description}</CardText>
              </InfoCard>
            ))}
          </CardGrid>
        </Section>

        <Section id="ruta">
          <SectionHeader>
            <SectionTitle>Así se vive la ruta Couchsurfing en Pereira</SectionTitle>
            <SectionDescription>
              Acompañamiento humano, logística simplificada y un archivo colaborativo que crece con cada viajero.
            </SectionDescription>
          </SectionHeader>
          <Timeline>
            {lineaTiempo.map((item) => (
              <TimelineItem key={item.title}>
                <TimelineMeta>{item.meta}</TimelineMeta>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineText>{item.description}</TimelineText>
              </TimelineItem>
            ))}
          </Timeline>
        </Section>
      </MainContent>

      <Footer>
        <FooterInner>
          <FooterTitle>¿Listo para diseñar tu estadía?</FooterTitle>
          <FooterNote>
            Escríbenos a couchsurfingpereira@gmail.com o envía un mensaje en Instagram @couchsurfingpereira. Respondemos en menos de 24 horas.
          </FooterNote>
          <FooterNote>© 2025 Couchsurfing Pereira · Comunidad abierta y colaborativa.</FooterNote>
        </FooterInner>
      </Footer>
    </PageWrapper>
  );
}

export default App;
