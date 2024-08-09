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
                            src={isOpen ? IconMinus : IconPlus} 
                            alt={isOpen ? "Close question" : "Open question"} 
                        />
                    </div>
                </div>
                <div className={`accordion-answer ${isOpen ? '' : 'd-none'}`}>
                    <p className='answer'>{props.answer}</p>
                </div>
            </div>
        </>
    );
}

export default AccordionItem;
