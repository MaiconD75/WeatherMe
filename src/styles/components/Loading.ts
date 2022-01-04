import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const loadAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const GradiantCanvas = styled.canvas`
  position: absolute;
  background: ${props => props.theme.colors.primaryGradiant};
  width: 12rem;
  height: 12rem;
  top: calc(50% - 12rem / 2);
  left: calc(50% - 12rem / 2);
  border-radius: 50%;

  animation: 2s linear infinite ${loadAnimation};
`;

const brethAnimation = keyframes`
  0% {
    transform: scale(1.4);
  }
  50%, 70% {
    transform: scale(1);
    color: #999;
  }
  100% {
    transform: scale(1.4);
  }
`;

const dropAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(160px);
  }
`;

export const MidleContainer = styled.div`
  position: absolute;
  overflow: hidden;
  width: 10rem;
  height: 10rem;
  top: calc(50% - 10rem / 2);
  left: calc(50% - 10rem / 2);
  border-radius: 50%;
  background-color: ${props => props.theme.colors.background};

  svg {
    position: absolute;

    width: 1.6rem;
    height: 1.6rem;

    top: calc(50% - 4rem / 2 + 10px);
    left: calc(50% - 1.6rem / 2);
    animation: 0.6s infinite ${dropAnimation};
  }

  svg:first-child {
    width: 6rem;
    height: 6rem;
    top: calc(50% - 4.2rem);
    left: calc(50% - 6rem / 2);
    z-index: 1;
    color: #555;
    animation: 2s infinite ${brethAnimation};
  }

  svg:nth-child(2) {
    top: calc(50% - 7rem / 2 + 15px * 0);
    left: calc(50% - 3.2rem / 2 + 20px * 0);
    animation-delay: calc(0.3s * 0);
  }

  svg:nth-child(3) {
    top: calc(50% - 7rem / 2 + 15px * 1);
    left: calc(50% - 3.2rem / 2 + 20px * 1);
    animation-delay: calc(0.3s * 1);
  }

  svg:nth-child(4) {
    top: calc(50% - 7rem / 2 + 15px * 2);
    left: calc(50% - 3.2rem / 2 + 20px * 2);
    animation-delay: calc(0.3s * 2);
  }
`;
