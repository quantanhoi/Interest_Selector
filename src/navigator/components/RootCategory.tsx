// RootCategory.tsx
import React from "react";
import Category, { CategoryProps } from "./Category";

export const RootCategory: React.FC<CategoryProps> = ({ category, onSelectSubcategory }) => {
    return (
        <div className='border-white margin1vh'>
            <div className='flex center margin1vh'>
                <div style={{ marginLeft: '5px' }}>
                    {category.name}
                </div>
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
