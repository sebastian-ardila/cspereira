import logo from './Couchsurfing_Pereira_1.webp';
import {
  PageWrapper,
  NavigationBar,
  Brand,
  LogoImage,
  BrandTitle,
  NavLinks,
  NavLink,
  MainContent,
  HeroSection,
  HeroTag,
  HeroTitle,
  HeroSubtitle,
  HeroActions,
  PrimaryButton,
  SecondaryButton,
  HeroPanel,
  PanelTitle,
  PanelList,
  PanelItem,
  PanelItemTitle,
  PanelItemText,
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  CardGrid,
  InfoCard,
  CardTitle,
  CardText,
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
        'Diseñamos espacios seguros para que viajeros y anfitriones compartan cultura con respeto y atención a los detalles que hacen única cada visita.',
    },
    {
      title: 'Aprendizaje continuo',
      description:
        'Acompañamos a la comunidad con guías, talleres y mentorías que facilitan experiencias significativas dentro y fuera de Pereira.',
    },
    {
      title: 'Red sostenible',
      description:
        'Promovemos iniciativas locales, rutas responsables y colaboraciones con proyectos sociales para que cada encuentro tenga impacto positivo.',
    },
  ];

  const experiencias = [
    {
      title: 'Laboratorio cultural',
      description:
        'Sesiones trimestrales donde anfitriones comparten música, gastronomía y relatos para que cada invitado comprenda la esencia cafetera.',
    },
    {
      title: 'Residencias creativas',
      description:
        'Programas de cuatro semanas que conectan viajeros con artistas locales para co-crear proyectos fotográficos, audiovisuales y editoriales.',
    },
    {
      title: 'Mapa vivo de recomendaciones',
      description:
        'Una base curada por la comunidad con cafés, rutas naturales y experiencias independientes para explorar la ciudad a un ritmo auténtico.',
    },
  ];

  const eventos = [
    {
      title: 'Encuentro de bienvenida',
      meta: 'Cada jueves · 7:00 p. m.',
      description:
        'Conversaciones íntimas en nuestro apartamento base para orientar a nuevos visitantes, compartir expectativas y planear actividades.',
    },
    {
      title: 'Ruta urbana contemporánea',
      meta: 'Segundo sábado del mes',
      description:
        'Caminata guiada por colectivos de arte, cafés independientes y espacios creativos que muestran el pulso moderno de Pereira.',
    },
    {
      title: 'Mesa redonda de anfitriones',
      meta: 'Último martes · formato híbrido',
      description:
        'Espacio para analizar aprendizajes, revisar protocolos y proponer mejoras en la experiencia Couchsurfing desde la perspectiva local.',
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
          <NavLink href="#eventos">Eventos</NavLink>
        </NavLinks>
      </NavigationBar>

      <MainContent>
        <HeroSection>
          <div>
            <HeroTag>Comunidad local</HeroTag>
            <HeroTitle>Explora Pereira acompañado por anfitriones que cuidan cada detalle.</HeroTitle>
            <HeroSubtitle>
              Creamos un ecosistema de hospitalidad donde cada visita se convierte en una colaboración. Conecta con guías locales, diseña tu
              propia agenda y descubre el Eje Cafetero desde una perspectiva contemporánea.
            </HeroSubtitle>
            <HeroActions>
              <PrimaryButton href="#experiencias">Ver programas</PrimaryButton>
              <SecondaryButton href="#eventos">Calendario comunitario</SecondaryButton>
            </HeroActions>
          </div>

          <HeroPanel>
            <PanelTitle>Nuestro enfoque 2025</PanelTitle>
            <PanelList>
              <PanelItem>
                <PanelItemTitle>54 anfitriones activos</PanelItemTitle>
                <PanelItemText>
                  Profesionales, artistas y viajeros recurrentes dispuestos a acompañarte en experiencias a medida.
                </PanelItemText>
              </PanelItem>
              <PanelItem>
                <PanelItemTitle>Guía urbana actualizada</PanelItemTitle>
                <PanelItemText>
                  Recomendaciones curadas cada mes con novedades gastronómicas, rutas naturales y eventos culturales.
                </PanelItemText>
              </PanelItem>
              <PanelItem>
                <PanelItemTitle>Residencias colaborativas</PanelItemTitle>
                <PanelItemText>
                  Programas diseñados para que visitantes compartan habilidades y fortalezcan proyectos comunitarios.
                </PanelItemText>
              </PanelItem>
            </PanelList>
          </HeroPanel>
        </HeroSection>

        <Section id="comunidad">
          <SectionHeader>
            <SectionTitle>Cómo construimos comunidad</SectionTitle>
            <SectionDescription>
              Un marco curado por voluntarios y aliados que asegura experiencias transparentes, responsables y memorables para quienes nos
              visitan y quienes reciben.
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
            <SectionTitle>Programas diseñados junto a locales</SectionTitle>
            <SectionDescription>
              Seleccionamos experiencias que mezclan cultura contemporánea, naturaleza y colaboración con iniciativas locales para ampliar tus
              posibilidades durante la estadía.
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

        <Section id="eventos">
          <SectionHeader>
            <SectionTitle>Agenda en tiempo real</SectionTitle>
            <SectionDescription>
              Actualizamos nuestro calendario colaborativo con encuentros presenciales e híbridos para que puedas sumarte según tus intereses.
            </SectionDescription>
          </SectionHeader>
          <Timeline>
            {eventos.map((item) => (
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
          <FooterTitle>Construyamos la próxima experiencia</FooterTitle>
          <FooterNote>
            Escríbenos a couchsurfingpereira@gmail.com o envía un mensaje directo en Instagram @couchsurfingpereira para coordinar tu visita.
          </FooterNote>
          <FooterNote>© 2025 Couchsurfing Pereira. Todos los derechos reservados.</FooterNote>
        </FooterInner>
      </Footer>
    </PageWrapper>
  );
}

export default App;
