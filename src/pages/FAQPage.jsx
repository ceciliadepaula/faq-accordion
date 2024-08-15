import React, { useState } from 'react';
import { faqs }  from '../pages/questions.js';
import useWindowWidth from '../utils/useWindowWidth.js';
import BackMobile from '../assets/images/background-pattern-mobile.svg';
import BackDesktop from '../assets/images/background-pattern-desktop.svg';
import Card from '../components/atoms/Card.jsx';
import AccordionItem from '../components/atoms/AccordionItem.jsx';

function FAQPage() {
    const windowWidth = useWindowWidth();
    const backgroundImage = windowWidth <= 1000 ? BackMobile : BackDesktop;
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const accordionItems = faqs.map((faq, index) => (
        <AccordionItem 
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => toggleAccordion(index)}
        />
    ));

    return (
        <>
            <div className='background'>
                <img 
                src={backgroundImage} 
                alt="Background Pattern" 
                />
            </div>
            <div className="accordion-container">
                <Card
                title="FAQs"
                content={accordionItems}
                />
            </div>
        </>
    );
}

export default FAQPage;