import React, { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export interface Subcategory {
    name: string;
    slug: string;
    subcategories: Subcategory[] | null;
}

export interface CategoryProps {
    category: {
        name: string;
        slug: string;
        subcategories: Subcategory[] | null;
    };
    interests: string[];
    onSelectSubcategory: (subcategoryName: string) => void;
}

const Category: React.FC<CategoryProps> = ({ category, interests, onSelectSubcategory }) => {
    const [showSubcategories, setShowSubcategories] = useState(false);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSelectSubcategory(category.slug);
    };

    const toggleSubcategories = (event: React.MouseEvent) => {
        event.stopPropagation(); // Prevent event bubbling
        setShowSubcategories(!showSubcategories);
    };

    return (
        <div className='border-white margin1vh'>
            <div className='flex center margin1vh'>
                <FormControlLabel
                    control={<Checkbox checked={interests.includes(category.slug)} onChange={handleCheckboxChange} />}
                    label={category.name}
                />
                {category.subcategories && (
                    <div onClick={toggleSubcategories} style={{ cursor: 'pointer' }}>
                        {showSubcategories ? '▲' : '▼'}
                    </div>
                )}
            </div>
            {showSubcategories && category.subcategories && (
                <div style={{ paddingLeft: '20px' }}>
                    {category.subcategories.map(subcategory => (
                        <Category key={subcategory.slug} category={subcategory} interests={interests} onSelectSubcategory={onSelectSubcategory} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Category;
