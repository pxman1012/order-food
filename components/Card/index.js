'use client';

import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Card = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.medium};
  overflow: hidden;
`;

export const CardImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardContent = styled.div`
  padding: ${theme.spacing.lg};
`;

export const CardTitle = styled.h3`
  margin: 0 0 ${theme.spacing.xs} 0;
  font-size: 1.2rem;
`;

export const CardDescription = styled.p`
  color: ${theme.colors.lightText};
  margin-bottom: ${theme.spacing.md};
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${theme.spacing.md};
`;

export const CardPrice = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
  color: ${theme.colors.primary};
`;