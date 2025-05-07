import { create } from 'zustand';

// Dữ liệu mẫu cho menu
const initialMenuItems = [
    { id: 1, name: 'Hamburger', price: 5.99, category: 'Burgers', image: 'img/hamburger.jpg', description: 'Classic beef burger with lettuce, tomato, and special sauce' },
    { id: 2, name: 'Cheeseburger', price: 6.99, category: 'Burgers', image: 'img/cheeseburger.jpg', description: 'Beef burger topped with melted cheese' },
    { id: 3, name: 'Pizza Margherita', price: 9.99, category: 'Pizza', image: 'img/pizza-margherita.jpg', description: 'Classic Italian pizza with tomato sauce, mozzarella, and basil' },
    { id: 4, name: 'Pepperoni Pizza', price: 11.99, category: 'Pizza', image: 'img/pizza-pepperoni.jpg', description: 'Pizza topped with pepperoni slices' },
    { id: 5, name: 'Caesar Salad', price: 7.99, category: 'Salads', image: 'img/caesar-salad.jpg', description: 'Fresh romaine lettuce with Caesar dressing, croutons, and parmesan' },
    { id: 6, name: 'French Fries', price: 3.99, category: 'Sides', image: 'img/french-fries.jpg', description: 'Crispy golden french fries with salt' },
    { id: 7, name: 'Coca Cola', price: 1.99, category: 'Drinks', image: 'img/coca-cola.jpg', description: 'Refreshing cola drink' },
    { id: 8, name: 'Iced Tea', price: 1.99, category: 'Drinks', image: 'img/iced-tea.jpg', description: 'Sweet iced tea' },
];

export const useMenuStore = create((set, get) => ({
    menuItems: initialMenuItems,
    categories: ['All', 'Burgers', 'Pizza', 'Salads', 'Sides', 'Drinks'],
    selectedCategory: 'All',

    setSelectedCategory: (category) => {
        set({ selectedCategory: category });
    },

    getFilteredItems: () => {
        const { menuItems, selectedCategory } = get();
        if (selectedCategory === 'All') {
            return menuItems;
        }
        return menuItems.filter(item => item.category === selectedCategory);
    }
}));