import React from 'react';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

interface CategoryProps {
    name: string;
    slug: string;
}
interface InteresseProps {
    interesseList: string[];
    onRemoveInterest: (interest: string) => void;
}

const Interesse: React.FC<InteresseProps> = ({ interesseList, onRemoveInterest }) => {
    return (
        <div>
            <h2>Meine Interesse</h2>
            <div className='flex-row min-width max-width70'>
                {interesseList.map((interest, index) => (
                    <div className="border-white margin1vh padding1vh flex-row" key={index} style={{ display: 'flex', alignItems: 'center' }}>
                    <p style={{ marginRight: '10px' }}>{interest}</p>
                    <BackspaceOutlinedIcon
                        style={{ cursor: 'pointer' }}
                        onClick={() => onRemoveInterest(interest)}
                    />
                </div>
                ))}
            </div>
        </div>
    );
};

export default Interesse;
