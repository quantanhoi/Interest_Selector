import React from 'react';

interface InteresseProps {
    interesseList: string[];
}

const Interesse: React.FC<InteresseProps> = ({ interesseList }) => {
    return (
        <div>
            <h2>Meine Interesse</h2>
            <div className='flex-row min-width max-width70'>
                {interesseList.map((interest, index) => (
                    <p className="border-white margin1vh padding1vh" key={index}>{interest}</p>
                ))}
            </div>
        </div>
    );
};

export default Interesse;
