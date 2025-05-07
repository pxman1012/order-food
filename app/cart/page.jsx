'use client';

import Link from 'next/link';
import { useCartStore } from '../../store/cartStore';
import { Button } from '../../components/Button';
import { CartContainer, CartItem, CartItemsList, CartSummary, CheckoutButton, ContinueShopping, EmptyCart, EmptyMessage, ItemActions, ItemDescription, ItemDetails, ItemImage, ItemName, ItemPrice, PageTitle, Quantity, QuantityButton, QuantityControl, RemoveButton, ShippingNote, SubtotalRow } from './styles';

export default function Cart() {
    const cart = useCartStore(state => state.cart);
    const cartTotal = useCartStore(state => state.cartTotal);
    const updateQuantity = useCartStore(state => state.updateQuantity);
    const removeFromCart = useCartStore(state => state.removeFromCart);

    // Nếu giỏ hàng trống
    if (cart.length === 0) {
        return (
            <div>
                <PageTitle>Your Cart</PageTitle>
                <EmptyCart>
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                    <Link href="/" passHref>
                        <Button>Browse Menu</Button>
                    </Link>
                </EmptyCart>
            </div>
        );
    }

    return (
        <div>
            <PageTitle>Your Cart</PageTitle>

            <CartContainer>
                <CartItemsList>
                    {cart.map(item => (
                        <CartItem key={item.id}>
                            <ItemImage>
                                <img
                                    src={item.image || "/api/placeholder/100/100"}
                                    alt={item.name}
                                />
                            </ItemImage>

                            <ItemDetails>
                                <ItemName>{item.name}</ItemName>
                                <ItemDescription>{item.description}</ItemDescription>
                                <ItemActions>
                                    <QuantityControl>
                                        <QuantityButton onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                            -
                                        </QuantityButton>
                                        <Quantity>{item.quantity}</Quantity>
                                        <QuantityButton onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                            +
                                        </QuantityButton>
                                    </QuantityControl>
                                    <RemoveButton onClick={() => removeFromCart(item.id)}>
                                        Remove
                                    </RemoveButton>
                                </ItemActions>
                            </ItemDetails>

                            <ItemPrice>
                                ${(item.price * item.quantity).toFixed(2)}
                            </ItemPrice>
                        </CartItem>
                    ))}
                </CartItemsList>

                <CartSummary>
                    <SubtotalRow>
                        <span>Subtotal</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </SubtotalRow>
                    <ShippingNote>Shipping and taxes calculated at checkout.</ShippingNote>
                    <Link href="/checkout" passHref>
                        <CheckoutButton>Checkout</CheckoutButton>
                    </Link>
                    <ContinueShopping>
                        or <Link href="/">Continue Shopping</Link>
                    </ContinueShopping>
                </CartSummary>
            </CartContainer>
        </div>
    );
}