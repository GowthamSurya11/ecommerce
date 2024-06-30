import React from 'react';
import "./CardComponent.css";

const CardComponent = ({ cardProps }) => {
    const renderContent = () => {
        switch (cardProps?.type) {
            case 'type_1':
                return (
                    <div className='card_type_1' style={cardContainerStyle}>
                        <img src={cardProps?.imgSrc} alt={cardProps?.imgDesc} />
                        <h5>{cardProps?.label_1}</h5>
                        <p>{cardProps?.label_2}</p>
                    </div>
                );
            case 'type_2':
                return (
                    <div className='card_type_2'>
                        <div className='left_content'>
                            <h3>{cardProps?.label_1}</h3>
                            <button onClick={cardProps?.handleChange_1}>{cardProps?.button_1}</button>
                        </div>
                        <div className='right_content'>
                            <img src={cardProps?.imgSrc} alt={cardProps?.imgDesc} />
                        </div>
                    </div>
                );
            default:
                return <div>Default Content</div>;
        }
    };

    const cardContainerStyle = {
        backgroundColor: cardProps?.bgColor || 'transparent' // default to transparent if bgColor is not provided
    };

    return (
        <div className="card-container">
            {renderContent()}
        </div>
    );
};

export default CardComponent;
