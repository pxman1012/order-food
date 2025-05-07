'use client';

import styled from 'styled-components';
import { theme } from '../../styles/theme';

const FooterContainer = styled.footer`
  background-color: ${theme.colors.secondary};
  padding: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xxl};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Copyright = styled.p`
  color: ${theme.colors.lightText};
  font-size: 0.9rem;
`;

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <Copyright>© {new Date().getFullYear()} Food Order App. All rights reserved.</Copyright>
            </FooterContent>
        </FooterContainer>
    );
};