import styled from 'styled-components';
import { Container as LIContainer } from '../components/CapitalsWether';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 1rem 0;
  overflow-x: hidden;

  width: 100vw;
  height: 100vh;

  @media (min-width: 700px) {
    width: 50vw;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.4);
    margin: 0 auto;
  }

  h1 {
    margin-top: 5rem;
    font-size: 2.5rem;
    color: ${props => props.theme.colors.primary};

    @media (min-width: 700px) {
      font-size: 4rem;
    }
  }

  > ul {
    height: 50vh;
    overflow-y: scroll;
    padding: 0.8rem;

    @media (max-width: 700px) {
      li:nth-child(2) {
        display: none;
      }

      &::before {
        content: '';
        bottom: calc(50vh + 1rem);
        width: 19rem;
        position: absolute;
        height: 0.8rem;
        background: ${props => props.theme.colors.bgGradiant};
        transform: rotateX(180deg) translateY(-0.7rem) translateX(-0.5rem);
      }

      &::after {
        content: '';
        bottom: 0.9rem;
        width: 19rem;
        position: absolute;
        height: 0.8rem;
        background: ${props => props.theme.colors.bgGradiant};
        transform: translateX(-0.5rem);
      }
    }

    @media (min-width: 700px) {
      height: 40vh;
      overflow: auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
      margin-bottom: 1vh;

      column-gap: 1rem;
    }
  }
`;

export const ListInfo = styled(LIContainer)`
  background-color: transparent;
  box-shadow: none;
  color: ${props => props.theme.colors.primary};

  margin: 0 !important;
  align-self: center;

  span {
    width: 2rem;
    margin: 0 0.5rem;
  }
`;

interface InputContainerProps {
  citySearch: string;
}

export const InputContainer = styled.div<InputContainerProps>`
  background-color: transparent;
  border: 2px solid ${props => props.theme.colors.primary};

  width: 20rem;
  height: 2.6rem;
  border-radius: 1rem;
  position: relative;

  > ul {
    display: none;
  }

  > div {
    display: none;
    border-top: 2px solid ${props => props.theme.colors.primary};
    position: absolute;
    background: ${props => props.theme.colors.textGradiant};
    width: 18.8rem;
    height: 8rem;

    transform: translate(0.6rem, -2px);

    z-index: 4;

    pointer-events: none;

    @media (min-width: 700px) {
      width: 36.8rem;
      transform: translate(0.6rem, -3px);
    }
  }

  &:focus-within {
    background: ${props => props.theme.colors.text};
    border: ${props => props.theme.colors.text};
    border-radius: ${props => (props.citySearch ? '1rem 1rem 0 0' : '1rem')};
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.6);

    > ul {
      display: flex;
    }

    > div {
      display: flex;
    }
  }

  input {
    background: transparent;
    border: none;
    width: 100%;
    height: 100%;
    padding: 0 0.5rem;
    color: ${props => props.theme.colors.primary};

    font-size: 1.4rem;
    font-weight: 600;

    &:focus {
      outline: none;
    }
  }
  @media (min-width: 700px) {
    width: 38rem;
  }
`;

export const CitiesList = styled.ul`
  position: absolute;
  bottom: calc(-8rem + 2px);
  z-index: 1;

  background-color: ${props => props.theme.colors.text};
  width: 20rem;
  height: 8rem;

  border-radius: 0 0 1rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.6rem 0;

  overflow-y: scroll;

  @media (min-width: 700px) {
    width: 38rem;
  }

  li {
    z-index: 2;
    list-style: none;
    width: calc(100% - 1.2rem);

    a {
      display: flex;
      align-items: center;
      justify-content: space-between;

      height: 2rem;

      font-size: 1.1rem;
      color: ${props => props.theme.colors.primary};

      cursor: pointer;
    }
  }
`;
