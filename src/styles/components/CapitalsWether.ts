import styled from 'styled-components';

export const Container = styled.li`
  list-style: none;
  display: flex;
  align-items: center;

  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  height: 2.6rem;
  width: 18rem;

  font-size: 1.1rem;
  font-weight: 500;

  padding: 0.2rem 1rem;
  border-radius: 1rem;

  box-shadow: 0px 0px 0.4rem rgba(0, 0, 0, 0.2);

  & + li {
    margin-top: 0.8rem;
  }

  span {
    width: 2rem;
    margin: 0 0.5rem;
  }
`;
