import styled from 'styled-components';

interface ExternalForecastContainerProps {
  currentHour: number;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;

  > div {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 99vw;
    height: 100vh;

    padding: 0.8rem 0.8rem 0;

    flex-direction: column;

    > div:last-child {
      margin: auto 0;
      position: relative;
    }

    @media (min-width: 700px) {
      box-shadow: 0 0 16px rgba(0, 0, 0, 0.4);
      width: 50vw;
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 4rem;
  padding: 0.8rem;
  margin: 1rem 0;

  padding: auto;

  a {
    display: flex;
    align-items: center;

    cursor: pointer;
    svg {
      width: 2rem;
      height: 2rem;

      stroke-width: 3;

      color: ${props => props.theme.colors.text};
    }
  }

  h1 {
    line-height: 2rem;
    font-size: 1.8rem;
    text-align: right;
  }
`;

export const ImageContainer = styled.div`
  background-color: ${props => props.theme.colors.background};
  width: 8rem;
  min-height: 8rem;
  height: 8rem;
  margin-top: 1rem;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  box-shadow: 0 0 12px rgba(0, 0, 0, 0.6);

  img {
    width: 6rem;
    height: 6rem;
  }
`;

export const InfoCardContainer = styled.div`
  background-color: ${props => props.theme.colors.primary};
  width: calc(100% - 3rem);
  max-width: 40rem;
  border-radius: 1rem;
  margin-top: -4rem;
  padding: 0.6rem 1rem;
  padding-top: 4rem;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.6);
  margin-bottom: 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 2fr 1fr 1fr;
  grid-gap: 0.4rem;

  span,
  p {
    font-size: 1.1rem;
  }

  > p {
    font-size: 1.4rem;
    font-weight: 600;
    grid-column-start: 1;
    grid-column-end: 3;
    text-align: center;
  }

  > div:nth-child(2) {
    grid-column-start: 1;
    grid-column-end: 3;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 2.4rem;
    }
  }

  > div:nth-child(3) {
    padding-right: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
      margin-right: 0.2rem;
      height: 1.4rem;
      width: 1.4rem;

      stroke-width: 3;
    }
  }

  @media (min-width: 700px) {
    grid-template-columns: 2fr 1fr 1fr 2fr;
    > p {
      grid-column-start: 2;
      grid-column-end: 4;
    }

    > div:nth-child(2) {
      grid-column-start: 2;
      grid-column-end: 4;
    }

    > div:nth-child(3) {
      grid-column-start: 2;
      grid-column-end: 3;
    }

    > div:nth-child(5) {
      grid-column-start: 2;
      grid-column-end: 3;
    }
  }
`;

export const DataContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    font-weight: 600;
    margin-left: 0.4rem;
  }
`;

export const ExternalForecastContainer = styled.div<ExternalForecastContainerProps>`
  overflow-x: scroll;
  margin: auto 0;
  display: flex;
  width: 100vw;
  align-items: center;
  position: relative;

  padding: 0 1rem 1rem;

  > div {
    padding: 0.6rem;
    height: 8rem;
    min-width: 8rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div:nth-child(2) {
      display: flex;
      justify-content: space-around;
      width: 7.5rem;
    }
  }

  > div:nth-child(${props => props.currentHour}) {
    min-width: 11rem;
    height: 11rem;
    border-radius: 6rem;
    background-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.6);

    img {
      width: 6rem;
      height: 6rem;
    }
  }

  span {
    margin-right: 0.4rem;
  }

  p {
    font-weight: 600;
  }

  @media (min-width: 700px) {
    width: 50vw;
  }
`;

export const ForecastDayContainer = styled.canvas`
  z-index: -1;
  position: absolute;
  height: 8rem;
  width: calc(8rem * 23 + 11rem);
  background-color: ${props => props.theme.colors.primary};
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.6);
  border-radius: 1rem;
`;

export const SmoothingBorder = styled.div`
  position: absolute;
  height: 11rem;
  width: 100vw;
  z-index: 5;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: nowrap;
  pointer-events: none;

  div:first-child {
    height: 0.8rem;
    width: 11rem;
    background: ${props => props.theme.colors.bgGradiant};
    transform: rotate(90deg) translateY(5.1rem);
  }

  div:last-child {
    height: 0.8rem;
    width: 11rem;
    background: ${props => props.theme.colors.bgGradiant};
    transform: rotate(-90deg) translateY(5.1rem);
  }

  @media (min-width: 700px) {
    width: 50vw;
  }
`;
