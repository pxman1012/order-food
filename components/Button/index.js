'use client';

import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

const BaseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: ${theme.borderRadius.medium};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PrimaryButton = styled(BaseButton)`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  
  &:hover:not(:disabled) {
    background-color: ${theme.colors.primaryDark};
  }
`;

const SecondaryButton = styled(BaseButton)`
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.text};
  
  &:hover:not(:disabled) {
    background-color: ${theme.colors.secondaryDark};
  }
`;

const OutlineButton = styled(BaseButton)`
  background-color: transparent;
  color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  
  &:hover:not(:disabled) {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;

export const Button = ({ variant = 'primary', children, ...props }) => {
    switch (variant) {
        case 'primary':
            return <PrimaryButton {...props}>{children}</PrimaryButton>;
        case 'secondary':
            return <SecondaryButton {...props}>{children}</SecondaryButton>;
        case 'outline':
            return <OutlineButton {...props}>{children}</OutlineButton>;
        default:
            return <PrimaryButton {...props}>{children}</PrimaryButton>;
    }
};