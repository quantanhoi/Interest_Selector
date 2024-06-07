import React from 'react';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

interface InteresseProps {
    interesseList: { name: string; slug: string }[];
    onRemoveInterest: (interest: { name: string; slug: string }) => void;
}

const Interesse: React.FC<InteresseProps> = ({ interesseList, onRemoveInterest }) => {
    console.log('interesseList', interesseList);
    return (
        <div>
            <h2>Meine Interesse</h2>
            <div className='flex-row min-width max-width70'>
                {interesseList.map((interest, index) => (
                    <div className="border-white margin2vh padding1vh flex-row font-size-1 font-weight-900" key={index} style={{ display: 'flex', alignItems: 'center' }}>
                        <p style={{ marginRight: '10px' }}>{interest.name}</p>
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
