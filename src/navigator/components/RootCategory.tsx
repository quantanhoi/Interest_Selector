import React from "react";
import Category from "./Category";
import { Subcategory } from "./Category";

export interface RootCategoryData {
    name: string;
    slug: string;
    subcategories: Subcategory[] | null;
}

interface RootCategoryProps {
    category: RootCategoryData;
    interests: { name: string; slug: string }[];
    onSelectSubcategory: (subcategory: { name: string; slug: string }) => void;
}

export const RootCategory: React.FC<RootCategoryProps> = ({ category, interests, onSelectSubcategory }) => {
    return (
        <div className='border-white margin2vh'>
            <div className='flex center margin2vh'>
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
