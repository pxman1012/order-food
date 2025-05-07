'use client';

import { useMenuStore } from '@/store/menuStore';
import { CategoryFilter } from '@/components/CategoryFilter';
import { MenuItem } from '@/components/MenuItem';
import { MenuGrid, PageTitle } from './styles'

export default function Home() {
    const getFilteredItems = useMenuStore(state => state.getFilteredItems);
    const filteredItems = getFilteredItems();

    return (
        <div>
            <PageTitle>Our Menu</PageTitle>

            <CategoryFilter />

            <MenuGrid>
                {filteredItems.map(item => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </MenuGrid>
        </div>
    );
}