import React, { useState } from 'react';

export interface Subcategory {
    name: string;
    slug: string;
    subcategories: Subcategory[] | null;
}

export interface RootCategory {
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
}

const Category: React.FC<CategoryProps> = ({ category }) => {
    const [showSubcategories, setShowSubcategories] = useState(false);

    const toggleSubcategories = (event: React.MouseEvent) => {
        event.stopPropagation(); // Prevent event bubbling
        setShowSubcategories(!showSubcategories);
    };
    return (
        <div className='border-white margin1vh'>
            <div className='flex center margin1vh'>
                <div onClick={toggleSubcategories} style={{ cursor: 'pointer' }}>
                    {showSubcategories ? '▲' : '▼'}
                </div>
                <div style={{ marginLeft: '5px' }}>
                    {category.name}
                </div>
            </div>
            {showSubcategories && category.subcategories && (
                <div style={{ paddingLeft: '20px' }}>
                    {category.subcategories.map(subcategory => (
                        <Category key={subcategory.slug} category={subcategory} />
                    ))}
                </div>
            )}
        </div>
    );
};



export default Category;
