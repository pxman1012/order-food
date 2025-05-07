'use client';

import {
    Card,
    CardImage,
    CardContent,
    CardTitle,
    CardDescription,
    CardFooter,
    CardPrice
} from '../Card';
import { Button } from '../Button';
import { useCartStore } from '../../store/cartStore';

export const MenuItem = ({ item }) => {
    const addToCart = useCartStore(state => state.addToCart);

    return (
        <Card>
            <CardImage>
                <img
                    src={item.image || "/api/placeholder/400/320"}
                    alt={item.name}
                />
            </CardImage>
            <CardContent>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                <CardFooter>
                    <CardPrice>${item.price.toFixed(2)}</CardPrice>
                    <Button onClick={() => addToCart(item)}>
                        Add to Cart
                    </Button>
                </CardFooter>
            </CardContent>
        </Card>
    );
};