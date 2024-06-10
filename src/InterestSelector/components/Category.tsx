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
    interests: { name: string; slug: string }[];
    onSelectSubcategory: (subcategory: { name: string; slug: string }) => void;
}

const Category: React.FC<CategoryProps> = ({ category, interests, onSelectSubcategory }) => {
    const [showSubcategories, setShowSubcategories] = useState(false);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSelectSubcategory({ name: category.name, slug: category.slug });
    };

    const toggleSubcategories = (event: React.MouseEvent) => {
        event.stopPropagation(); // Prevent event bubbling
        setShowSubcategories(!showSubcategories);
    };

    const isInterestSelected = interests.some(interest => interest.slug === category.slug);

    return (
        <div className='border-white margin2vh'>
            <div className='flex left margin2vh'>
                <FormControlLabel
                    control={<Checkbox checked={isInterestSelected} onChange={handleCheckboxChange} />}
                    label=<span className="font-weight-900">{category.name}</span>
                />
                {category.subcategories && (
                    <div onClick={toggleSubcategories} style={{ cursor: 'pointer' }}>
                        {showSubcategories ? '▲' : '▼'}
                    </div>
                )}
            </div>
            {showSubcategories && category.subcategories && (
                <div style={{ paddingLeft: '20px' }} >
                    {category.subcategories.map(subcategory => (
                        <Category
                            key={subcategory.slug}
                            category={subcategory}
                            interests={interests}
                            onSelectSubcategory={onSelectSubcategory}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Category;
