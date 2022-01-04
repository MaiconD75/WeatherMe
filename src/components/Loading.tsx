import React from 'react';
import { FaCloud } from 'react-icons/fa';
import { GiWaterDrop } from 'react-icons/gi';

import {
  Container,
  GradiantCanvas,
  MidleContainer,
} from '../styles/components/Loading';

export default function Loading() {
  return (
    <Container>
      <GradiantCanvas />
      <MidleContainer>
        <FaCloud />
        <GiWaterDrop />
        <GiWaterDrop />
        <GiWaterDrop />
      </MidleContainer>
    </Container>
  );
}
