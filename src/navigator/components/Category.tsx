// Category.tsx
import React from "react";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export interface CategoryProps {
    category: {
        name: string;
        slug: string;
        subcategories: CategoryProps['category'][] | null;
    };
    onSelectSubcategory: (subcategoryName: string) => void;
}

const Category: React.FC<CategoryProps> = ({ category, onSelectSubcategory }) => {
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSelectSubcategory(category.name);
    };

    return (
        <div className='border-white margin1vh'>
            <div className='flex center margin1vh'>
                <FormControlLabel
                    control={<Checkbox onChange={handleCheckboxChange} />}
                    label={category.name}
                />
            </div>
            {category.subcategories && (
                <div style={{ paddingLeft: '20px' }}>
                    {category.subcategories.map(subcategory => (
                        <Category key={subcategory.slug} category={subcategory} onSelectSubcategory={onSelectSubcategory} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Category;
