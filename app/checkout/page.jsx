'use client';

import { useState } from 'react';
import Link from 'next/link';
import { theme } from '../../styles/theme';
import { useCartStore } from '../../store/cartStore';
import { Button } from '../../components/Button';
import { CheckoutLayout, FormGroup, FormSection, Input, ItemInfo, ItemQuantity, ItemTotal, Label, OrderItem, OrderItemsList, OrderSummary, OrderSummaryRow, PageTitle, RadioGroup, RadioInput, RadioLabel, SectionTitle, SubmitButton, SuccessMessage, Textarea } from './styles';

export default function Checkout() {
    const cart = useCartStore(state => state.cart);
    const cartTotal = useCartStore(state => state.cartTotal);
    const clearCart = useCartStore(state => state.clearCart);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        paymentMethod: 'cash',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Trong ứng dụng thực tế, bạn sẽ gửi dữ liệu này đến backend
        console.log('Order submitted:', { items: cart, total: cartTotal, customer: formData });

        // Xóa giỏ hàng và hiển thị thông báo thành công
        clearCart();
        setOrderPlaced(true);
    };

    if (orderPlaced) {
        return (
            <div>
                <PageTitle>Checkout</PageTitle>
                <SuccessMessage>
                    <h2>Order Placed Successfully!</h2>
                    <p>Thank you for your order. It will be delivered shortly.</p>
                    <Link href="/" passHref>
                        <Button style={{ marginTop: theme.spacing.lg }}>Return to Menu</Button>
                    </Link>
                </SuccessMessage>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div>
                <PageTitle>Checkout</PageTitle>
                <SuccessMessage>
                    <p>Your cart is empty</p>
                    <Link href="/" passHref>
                        <Button style={{ marginTop: theme.spacing.lg }}>Browse Menu</Button>
                    </Link>
                </SuccessMessage>
            </div>
        );
    }

    return (
        <div>
            <PageTitle>Checkout</PageTitle>

            <CheckoutLayout>
                <FormSection>
                    <SectionTitle>Delivery Information</SectionTitle>
                    <form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label htmlFor="name">Name</Label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="address">Address</Label>
                            <Textarea
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                rows="3"
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label>Payment Method</Label>
                            <RadioGroup>
                                <RadioLabel>
                                    <RadioInput
                                        type="radio"
                                        name="paymentMethod"
                                        value="cash"
                                        checked={formData.paymentMethod === 'cash'}
                                        onChange={handleChange}
                                    />
                                    Cash on Delivery
                                </RadioLabel>
                                <RadioLabel>
                                    <RadioInput
                                        type="radio"
                                        name="paymentMethod"
                                        value="card"
                                        checked={formData.paymentMethod === 'card'}
                                        onChange={handleChange}
                                    />
                                    Credit Card
                                </RadioLabel>
                            </RadioGroup>
                        </FormGroup>

                        <SubmitButton type="submit">Place Order</SubmitButton>
                    </form>
                </FormSection>

                <OrderSummary>
                    <SectionTitle>Order Summary</SectionTitle>
                    <OrderItemsList>
                        {cart.map(item => (
                            <OrderItem key={item.id}>
                                <ItemInfo>
                                    <span>{item.name}</span>
                                    <ItemQuantity>x {item.quantity}</ItemQuantity>
                                </ItemInfo>
                                <ItemTotal>${(item.price * item.quantity).toFixed(2)}</ItemTotal>
                            </OrderItem>
                        ))}
                    </OrderItemsList>

                    <OrderSummaryRow>
                        <span>Subtotal</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </OrderSummaryRow>
                    <OrderSummaryRow>
                        <span>Delivery Fee</span>
                        <span>$2.00</span>
                    </OrderSummaryRow>
                    <OrderSummaryRow className="total">
                        <span>Total</span>
                        <span>${(cartTotal + 2).toFixed(2)}</span>
                    </OrderSummaryRow>
                </OrderSummary>
            </CheckoutLayout>
        </div>
    );
}