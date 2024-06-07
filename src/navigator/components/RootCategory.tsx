import React from "react";
import Category from "./Category";
import { Subcategory } from "./Category";

export interface TopCategory {
    name: string;
    slug: string;
    subcategories: Subcategory[] | null;
}

interface RootCategoryProps {
    category: TopCategory;
    interests: string[];
    onSelectSubcategory: (subcategoryName: string) => void;
}

export const RootCategory: React.FC<RootCategoryProps> = ({ category, interests, onSelectSubcategory }) => {
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
                        <Category key={subcategory.slug} category={subcategory} interests={interests} onSelectSubcategory={onSelectSubcategory} />
                    ))}
                </div>
            )}
        </div>
    );
};
