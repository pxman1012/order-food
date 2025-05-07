import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const PageTitle = styled.h1`
  margin-bottom: ${theme.spacing.xl};
`;

export const EmptyCart = styled.div`
  text-align: center;
  padding: ${theme.spacing.xxl} 0;
`;

export const EmptyMessage = styled.p`
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.lightText};
`;

export const CartContainer = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.medium};
  overflow: hidden;
`;

export const CartItemsList = styled.ul`
  border-bottom: 1px solid ${theme.colors.secondary};
`;

export const CartItem = styled.li`
  display: flex;
  padding: ${theme.spacing.lg};
  border-bottom: 1px solid ${theme.colors.secondary};
  
  &:last-child {
    border-bottom: none;
  }
`;

export const ItemImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: ${theme.borderRadius.medium};
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ItemDetails = styled.div`
  flex: 1;
  padding: 0 ${theme.spacing.lg};
`;

export const ItemName = styled.h3`
  margin: 0 0 ${theme.spacing.xs} 0;
`;

export const ItemDescription = styled.p`
  color: ${theme.colors.lightText};
  font-size: 0.9rem;
  margin-bottom: ${theme.spacing.sm};
`;

export const ItemActions = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: ${theme.spacing.md};
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.secondary};
  border: none;
  border-radius: ${theme.borderRadius.small};
  cursor: pointer;
  
  &:hover {
    background-color: ${theme.colors.secondaryDark};
  }
`;

export const Quantity = styled.span`
  margin: 0 ${theme.spacing.sm};
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.primary};
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const ItemPrice = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
  text-align: right;
  flex-shrink: 0;
  width: 80px;
`;

export const CartSummary = styled.div`
  padding: ${theme.spacing.lg};
`;

export const SubtotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: ${theme.spacing.md};
`;

export const ShippingNote = styled.p`
  color: ${theme.colors.lightText};
  font-size: 0.9rem;
  margin-bottom: ${theme.spacing.lg};
`;

export const CheckoutButton = styled(Button)`
  width: 100%;
  padding: ${theme.spacing.md};
  font-size: 1rem;
  margin-bottom: ${theme.spacing.md};
`;

export const ContinueShopping = styled.div`
  text-align: center;
  margin-top: ${theme.spacing.md};
  
  a {
    color: ${theme.colors.primary};
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;