import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.12), transparent 25%),
    radial-gradient(circle at 80% 0%, rgba(94, 234, 212, 0.12), transparent 25%),
    #0b1021;
  color: #e2e8f0;
  font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;
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
  background: rgba(11, 16, 33, 0.8);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 900px) {
    padding: 16px 24px;
    flex-wrap: wrap;
    gap: 12px;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LogoImage = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
`;

export const BrandTitle = styled.span`
  font-size: 0.98rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #f8fafc;
`;

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 26px;

  @media (max-width: 900px) {
    width: 100%;
    order: 3;
    justify-content: center;
  }
`;

export const NavLink = styled.a`
  font-size: 0.95rem;
  font-weight: 600;
  color: #cbd5f5;
  text-decoration: none;
  padding: 8px 0;
  transition: color 0.2s ease, opacity 0.2s ease;

  &:hover {
    color: #a5b4fc;
    opacity: 0.9;
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 900px) {
    order: 2;
    margin-left: auto;
  }
`;

export const PrimaryButton = styled.a`
  padding: 12px 20px;
  border-radius: 14px;
  background: linear-gradient(120deg, #2563eb, #22d3ee);
  color: #f8fafc;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(37, 99, 235, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 45px rgba(34, 211, 238, 0.25);
    opacity: 0.96;
  }
`;

export const GhostButton = styled.a`
  padding: 11px 18px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: #cbd5f5;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.02);
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.28);
    color: #e2e8f0;
  }
`;

export const MainContent = styled.main`
  padding: 60px 48px 96px;
  max-width: 1160px;
  margin: 0 auto;

  @media (max-width: 900px) {
    padding: 48px 22px 72px;
  }
`;

export const HeroSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 44px;
  align-items: center;
  margin-bottom: 96px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const PillGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(37, 99, 235, 0.14);
  color: #bfdbfe;
  font-weight: 700;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
  color: #f8fafc;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  margin: 0;
  color: #cbd5f5;
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 6px;
`;

export const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 12px;

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
`;

export const StatValue = styled.span`
  font-size: 1.4rem;
  font-weight: 800;
  color: #e0f2fe;
`;

export const StatLabel = styled.span`
  font-size: 0.92rem;
  color: #cbd5f5;
`;

export const HeroVisual = styled.div`
  display: flex;
  justify-content: center;
`;

export const VisualCard = styled.div`
  width: 100%;
  max-width: 420px;
  padding: 28px;
  border-radius: 22px;
  background: linear-gradient(145deg, rgba(37, 99, 235, 0.14), rgba(34, 211, 238, 0.08));
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 28px 60px rgba(15, 23, 42, 0.45);
  animation: ${float} 7s ease-in-out infinite;
`;

export const VisualBadge = styled.span`
  display: inline-flex;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: #e0f2fe;
  font-weight: 700;
  letter-spacing: 0.06em;
  font-size: 0.8rem;
  text-transform: uppercase;
`;

export const VisualTitle = styled.h3`
  font-size: 1.3rem;
  margin: 14px 0 8px;
  color: #f8fafc;
`;

export const VisualText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #dbeafe;
  margin: 10px 0 0;
`;

export const Section = styled.section`
  margin: 90px 0;
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 28px;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 3vw, 2.6rem);
  font-weight: 800;
  margin: 0;
  color: #f8fafc;
`;

export const SectionDescription = styled.p`
  max-width: 640px;
  font-size: 1.02rem;
  line-height: 1.8;
  color: #cbd5f5;
  margin: 0;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(255, 255, 255, 0.14);
    background: rgba(255, 255, 255, 0.06);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
  color: #e0f2fe;
`;

export const CardText = styled.p`
  font-size: 0.98rem;
  line-height: 1.7;
  color: #cbd5f5;
  margin: 0;
`;

export const Timeline = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 18px;
`;

export const TimelineItem = styled.li`
  padding: 18px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0 18px 32px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -40px;
    right: -40px;
    width: 120px;
    height: 120px;
    background: radial-gradient(circle, rgba(34, 211, 238, 0.18), transparent 45%);
    transform: rotate(15deg);
  }
`;

export const TimelineTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  margin: 6px 0 6px;
  color: #f8fafc;
`;

export const TimelineMeta = styled.span`
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #93c5fd;
`;

export const TimelineText = styled.p`
  font-size: 0.97rem;
  line-height: 1.7;
  color: #cbd5f5;
  margin: 8px 0 0;
`;

export const Footer = styled.footer`
  padding: 58px 32px 64px;
  background: #0b1021;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

export const FooterInner = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 800;
  margin: 0;
  color: #f8fafc;
`;

export const FooterNote = styled.p`
  font-size: 0.96rem;
  margin: 0;
  color: #cbd5f5;
`;
