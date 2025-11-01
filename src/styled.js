import styled from 'styled-components';

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 60vh;
    padding: 60px 20px 40px;
    background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background:
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
        pointer-events: none;
    }
`;

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    max-width: 1200px;
    z-index: 1;
`;

export const CouchsurfingLogoContainer = styled.img`
    width: ${(props) => props.width ? props.width : 200}px;
    height: ${({height}) => height ? height : 200}px;
    border-radius: 50%;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

export const HeroTitle = styled.h1`
    color: white;
    font-size: clamp(32px, 5vw, 56px);
    font-weight: 700;
    margin: 0;
    text-align: center;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

export const HeroSubtitle = styled.p`
    color: rgba(255, 255, 255, 0.95);
    font-size: clamp(16px, 2.5vw, 20px);
    font-weight: 400;
    margin: 0;
    text-align: center;
    max-width: 600px;
    line-height: 1.6;
`;