import React from 'react';
import useWindowWidth from '../utils/useWindowWidth.js';
import BackMobile from '../assets/images/background-pattern-mobile.svg';
import BackDesktop from '../assets/images/background-pattern-desktop.svg';

import AccordionItem from '../components/atoms/AccordionItem.jsx';

function FAQPage() {
    const windowWidth = useWindowWidth();
    const backgroundImage = windowWidth <= 1000 ? BackMobile : BackDesktop;

    return (
        <>
            <div className='background'>
                <img 
                src={backgroundImage} 
                alt="Background Pattern" 
                />
            </div>


            <div className="accordion-container">
                <AccordionItem 
                question="What is Frontend Mentor, and how will it help me? "
                answer="Respuesta orem ipsum dolor sit amet, consecte orem ipsum dolor sit amet, consecteFrontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
                />

                <AccordionItem 
                question="What is Frontend Mentor, and how will it help me? "
                answer="Respuesta orem ipsum dolor sit amet, consecte orem ipsum dolor sit amet, consecteFrontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
                />
            </div>
        </>
    );
}

export default FAQPage;