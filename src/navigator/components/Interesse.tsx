// Interesse.tsx
import React from 'react';

interface InteresseProps {
    interesseList: string[];
}

const Interesse: React.FC<InteresseProps> = ({ interesseList }) => {
    return (
        <div>
            <h2>Meine Interesse</h2>
            <ul>
                {interesseList.map((interest, index) => (
                    <li key={index}>{interest}</li>
                ))}
            </ul>
        </div>
    );
};

export default Interesse;
