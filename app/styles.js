import styled from 'styled-components';
import { theme } from '../styles/theme';

export const PageTitle = styled.h1`
  margin-bottom: ${theme.spacing.xl};
`;

export const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.lg};
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;