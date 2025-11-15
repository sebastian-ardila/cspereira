import styled from 'styled-components';

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: #f6f7fb;
  color: #0f172a;
  font-family: 'Inter', 'Segoe UI', sans-serif;
`;

export const NavigationBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  padding: 20px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid #e2e8f0;

  @media (max-width: 768px) {
    padding: 16px 24px;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LogoImage = styled.img`
  width: 48px;
  height: auto;
  border-radius: 50%;
`;

export const BrandTitle = styled.span`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #0f172a;
`;

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  font-size: 0.95rem;
  font-weight: 500;
  color: #475569;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #1d4ed8;
  }
`;

export const MainContent = styled.main`
  padding: 60px 48px 80px;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 48px 24px 64px;
  }
`;

export const HeroSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 56px;
  align-items: center;
  margin-bottom: 96px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const HeroTag = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #1d4ed8;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin: 18px 0 20px;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: #475569;
  margin: 0 0 32px;
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const PrimaryButton = styled.a`
  padding: 14px 28px;
  border-radius: 999px;
  background: #1d4ed8;
  color: white;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: #1a3fb5;
    transform: translateY(-1px);
  }
`;

export const SecondaryButton = styled.a`
  padding: 14px 28px;
  border-radius: 999px;
  border: 1px solid #cbd5f5;
  color: #1d4ed8;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: #1a3fb5;
    border-color: #1a3fb5;
  }
`;

export const HeroPanel = styled.div`
  background: linear-gradient(160deg, #1d4ed8 0%, #0f172a 100%);
  border-radius: 24px;
  padding: 40px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.18);

  @media (max-width: 768px) {
    padding: 32px;
  }
`;

export const PanelTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

export const PanelList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 18px;
`;

export const PanelItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const PanelItemTitle = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;

export const PanelItemText = styled.span`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.76);
  line-height: 1.6;
`;

export const Section = styled.section`
  margin-bottom: 96px;
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 40px;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 3vw, 2.5rem);
  font-weight: 600;
  margin: 0;
`;

export const SectionDescription = styled.p`
  max-width: 540px;
  font-size: 1rem;
  line-height: 1.7;
  color: #475569;
  margin: 0;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 28px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.05);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CardTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 600;
  margin: 0;
`;

export const CardText = styled.p`
  font-size: 0.98rem;
  line-height: 1.7;
  color: #475569;
  margin: 0;
`;

export const Timeline = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border-left: 2px solid #cbd5f5;
  display: grid;
  gap: 24px;
`;

export const TimelineItem = styled.li`
  padding-left: 20px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -10px;
    top: 8px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #1d4ed8;
  }
`;

export const TimelineTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0 0 6px;
`;

export const TimelineMeta = styled.span`
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #1d4ed8;
`;

export const TimelineText = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: #475569;
  margin: 12px 0 0;
`;

export const Footer = styled.footer`
  padding: 56px 48px;
  background: #0f172a;
  color: rgba(255, 255, 255, 0.82);
`;

export const FooterInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const FooterTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: white;
`;

export const FooterNote = styled.p`
  font-size: 0.9rem;
  margin: 0;
  color: rgba(226, 232, 240, 0.85);
`;
