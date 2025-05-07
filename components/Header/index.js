'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { useCartStore } from '../../store/cartStore';

const HeaderContainer = styled.header`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: ${theme.spacing.lg};
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  gap: ${theme.spacing.lg};
`;

const NavItem = styled.li`
  a {
    color: ${theme.colors.white};
    font-weight: 500;
    transition: opacity 0.2s;
    
    &:hover {
      opacity: 0.8;
    }
  }
`;

const CartBadge = styled.span`
  background-color: ${theme.colors.white};
  color: ${theme.colors.primary};
  border-radius: ${theme.borderRadius.circle};
  padding: 2px 6px;
  font-size: 0.8rem;
  margin-left: ${theme.spacing.xs};
`;

export const Header = () => {
    const cart = useCartStore(state => state.cart);
    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <HeaderContainer>
            <HeaderContent>
                <Logo>
                    <Link href="/">Food Order</Link>
                </Logo>
                <Nav>
                    <NavList>
                        <NavItem>
                            <Link href="/">Menu</Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/cart">
                                Cart
                                {cartItemCount > 0 && <CartBadge>{cartItemCount}</CartBadge>}
                            </Link>
                        </NavItem>
                    </NavList>
                </Nav>
            </HeaderContent>
        </HeaderContainer>
    );
};