// Navigator.tsx
import React, { useState } from 'react';
import { categories } from '../categories';
import { RootCategory } from './components/RootCategory';
import Interesse from './components/Interesse';

const Navigator: React.FC = () => {
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

    const handleNextCategory = () => {
        setCurrentCategoryIndex((prevIndex) => prevIndex + 1);
    };

    const handlePreviousCategory = () => {
        setCurrentCategoryIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    };

    const isLastCategory = currentCategoryIndex >= categories.length -1 ;

    return (
        <div>
            {isLastCategory ? (
                <Interesse />
            ) : (
                <RootCategory category={categories[currentCategoryIndex]} />
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
