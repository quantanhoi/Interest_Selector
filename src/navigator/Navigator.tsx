import React, { useState } from 'react';
import { categories } from '../categories';
import { RootCategory } from './components/RootCategory';
import Interesse from './components/Interesse';

const Navigator: React.FC = () => {
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
    const [interesseListArray, setInteresseListArray] = useState<string[]>([]);

    const handleNextCategory = () => {
        setCurrentCategoryIndex((prevIndex) => prevIndex + 1);
    };

    const handlePreviousCategory = () => {
        setCurrentCategoryIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    };

    const handleSelectSubcategory = (subcategoryName: string) => {
        setInteresseListArray((prevList) => {
            if (prevList.includes(subcategoryName)) {
                return prevList.filter(name => name !== subcategoryName);
            } else {
                return [...prevList, subcategoryName];
            }
        });
    };


    const handleRemoveInterest = (interest: string) => {
        setInteresseListArray((prevList) => prevList.filter(name => name !== interest));
    };

    const isLastCategory = currentCategoryIndex >= categories.length;

    return (
        <div>
            {isLastCategory ? (
                <Interesse interesseList={interesseListArray} onRemoveInterest={handleRemoveInterest} />
            ) : (
                <RootCategory
                    category={categories[currentCategoryIndex]}
                    interests={interesseListArray}
                    onSelectSubcategory={handleSelectSubcategory}
                />
            )}
            <div className='flex center margin1vh'>
                <button
                    onClick={handlePreviousCategory}
                    disabled={currentCategoryIndex === 0}
                    hidden={currentCategoryIndex === 0}
                    className="react-button"
                >
                    Previous
                </button>
                <button
                    onClick={handleNextCategory}
                    disabled={isLastCategory}
                    hidden={isLastCategory}
                    className="react-button"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Navigator;
