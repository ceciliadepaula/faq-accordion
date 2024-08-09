import React, { useState } from 'react';
import IconPlus from '../../assets/images/icon-plus.svg';
import IconMinus from '../../assets/images/icon-minus.svg';

function AccordionItem(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='accordion-item'>
                <div className="accordion-question" onClick={toggleAccordion}>
                    <h2 className='question'>{props.question}</h2>
                    <div className="collapse-button">
                        <img 
                        src={IconPlus} 
                        alt="Open question" 
                        className={`icon ${!isOpen ? 'visible' : 'hidden'}`} 
                        />
                        <img 
                        src={IconMinus} 
                        alt="Close question" 
                        className={`icon ${isOpen ? 'visible' : 'hidden'}`} 
                        />
                    </div>
                </div>
                <div className={`accordion-answer ${isOpen ? 'open' : 'close'}`}>
                    <p className='answer'>{props.answer}</p>
                </div>
            </div>
        </>
    );
}

export default AccordionItem;
