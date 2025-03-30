import styled from 'styled-components';

export const OfferContainer = styled.div`
  margin: 20px 0;
  text-align: center;
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  width: 90%;
  max-width: 700px;

  h2 {
    font-size: 1.6rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 15px;
    text-transform: uppercase;
  }

  .offer-cards {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    padding: 10px;
    margin: 10px 0;
    h2 { font-size: 1.3rem; margin-bottom: 10px; }
  }
`;

export const OfferCardStyled = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 10px;
  width: 160px;
  text-align: center;
  transition: transform 0.3s, background 0.3s;
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.2);
  }

  h3 {
    font-size: 1rem;
    font-weight: 600;
    background: linear-gradient(45deg, #365e93, #af2ba5);
    -webkit-background-clip: text;
    color: transparent;
    margin-bottom: 5px;
  }

  p {
    font-size: 0.75rem;
    color: #ddd;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 220px;
    padding: 8px;
    h3 { font-size: 0.9rem; }
    p { font-size: 0.7rem; }
  }
`;