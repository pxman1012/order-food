import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const PageTitle = styled.h1`
  margin-bottom: ${theme.spacing.xl};
`;

export const CheckoutLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.xl};
  
  @media (min-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1.5fr 1fr;
  }
`;

export const FormSection = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.medium};
  padding: ${theme.spacing.lg};
`;

export const SectionTitle = styled.h2`
  margin-bottom: ${theme.spacing.lg};
`;

export const FormGroup = styled.div`
  margin-bottom: ${theme.spacing.lg};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: ${theme.spacing.xs};
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.colors.secondary};
  border-radius: ${theme.borderRadius.medium};
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.colors.secondary};
  border-radius: ${theme.borderRadius.medium};
  font-size: 1rem;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

export const RadioGroup = styled.div`
  margin-top: ${theme.spacing.sm};
`;

export const RadioLabel = styled.label`
  display: inline-flex;
  align-items: center;
  margin-right: ${theme.spacing.lg};
  cursor: pointer;
`;

export const RadioInput = styled.input`
  margin-right: ${theme.spacing.xs};
`;

export const OrderSummary = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.medium};
  padding: ${theme.spacing.lg};
`;

export const OrderItemsList = styled.ul`
  margin-bottom: ${theme.spacing.lg};
`;

export const OrderItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: ${theme.spacing.md} 0;
  border-bottom: 1px solid ${theme.colors.secondary};
  
  &:last-child {
    border-bottom: none;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemQuantity = styled.span`
  color: ${theme.colors.lightText};
  margin-left: ${theme.spacing.xs};
`;

export const ItemTotal = styled.span`
  font-weight: 500;
`;

export const OrderSummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${theme.spacing.sm} 0;
  
  &.total {
    border-top: 1px solid ${theme.colors.secondary};
    margin-top: ${theme.spacing.md};
    padding-top: ${theme.spacing.md};
    font-weight: 600;
    font-size: 1.1rem;
  }
`;

export const SuccessMessage = styled.div`
  text-align: center;
  padding: ${theme.spacing.xxl} 0;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  padding: ${theme.spacing.md};
  font-size: 1rem;
  margin-top: ${theme.spacing.lg};
`;