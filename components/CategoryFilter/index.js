'use client';

import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { useMenuStore } from '../../store/menuStore';
import { Button } from '../Button';

const FilterContainer = styled.div`
  margin-bottom: ${theme.spacing.xl};
`;

const FilterTitle = styled.h2`
  margin-bottom: ${theme.spacing.md};
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
`;

export const CategoryFilter = () => {
    const categories = useMenuStore(state => state.categories);
    const selectedCategory = useMenuStore(state => state.selectedCategory);
    const setSelectedCategory = useMenuStore(state => state.setSelectedCategory);

    return (
        <FilterContainer>
            <FilterTitle>Categories</FilterTitle>
            <ButtonGroup>
                {categories.map(category => (
                    <Button
                        key={category}
                        variant={selectedCategory === category ? 'primary' : 'secondary'}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </Button>
                ))}
            </ButtonGroup>
        </FilterContainer>
    );
};