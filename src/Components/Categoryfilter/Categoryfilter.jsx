import React, { useState } from 'react';
import './Categoryfilter.css';
const Categoryfilter = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        // If the clicked section is already active, close it by setting activeIndex to null
        setActiveIndex(index === activeIndex ? null : index);
    };
  return (
    <>
       
        <AccordionSection 
            title="Section 1" 
            index={0} 
            activeIndex={activeIndex} 
            toggleAccordion={toggleAccordion}
        >
            <p>
            <div className="mb-30 filter-options">
                <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="Indoor" checked=""/>
                <label className="custom-control-label" for="Indoor">Indoor</label>
                </div>
                <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="Outdoor"/>
                <label className="custom-control-label" for="Outdoor">Outdoor</label>
                </div>
            </div>
            </p>
        </AccordionSection>

        <AccordionSection 
            title="Section 2" 
            index={1} 
            activeIndex={activeIndex} 
            toggleAccordion={toggleAccordion}
        >
            <p>
            <div className="mb-3 filter-options" id="cusine-options">
                <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="Chinese" checked=""/>
                <label className="custom-control-label" for="Chinese">Chinese</label>
                </div>
                <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="Italian"/>
                <label className="custom-control-label" for="Italian">Italian</label>
                </div>
                <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="Mexican"/>
                <label className="custom-control-label" for="Mexican">Mexican</label>
                </div>
                <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="Thai"/>
                <label className="custom-control-label" for="Thai">Thai</label>
                </div>
                <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="Gujarati"/>
                <label className="custom-control-label" for="Gujarati">Gujarati</label>
                </div>
                <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="Panjabi"/>
                <label className="custom-control-label" for="Panjabi">Panjabi</label>
                </div>
                <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="South-Indian"/>
                <label className="custom-control-label" for="South-Indian">South Indian</label>
                </div>
            </div>
            </p>
        </AccordionSection>

        <AccordionSection 
            title="Section 3" 
            index={2} 
            activeIndex={activeIndex} 
            toggleAccordion={toggleAccordion}
        >
            <p>
                <h2 className="font-xbold body-font border-bottom filter-title">Price Range</h2>
                <div className="mb-3 theme-clr xs2-font d-flex justify-content-between">
                    <span id="slider-range-value1">$100</span>
                    <span id="slider-range-value2">$10,000</span>
                </div>
                <div className="mb-30 filter-options">
                    <div>
                    <div id="slider-range">
                        <form>
                        <div className="form-group">
                            <input type="range" className="form-control-range" id=""/>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
            </p>
        </AccordionSection>

        <AccordionSection 
            title="Section 4" 
            index={3} 
            activeIndex={activeIndex} 
            toggleAccordion={toggleAccordion}
        >
            <p>
            <div className="custom-control custom-checkbox mb-3">
            <input type="checkbox" className="custom-control-input" id="Breakfast" checked=""/>
            <label className="custom-control-label" for="Breakfast">Breakfast</label>
        </div>
        <div className="custom-control custom-checkbox mb-3">
            <input type="checkbox" className="custom-control-input" id="Lunch"/>
            <label className="custom-control-label" for="Lunch">Lunch</label>
        </div>
        <div className="custom-control custom-checkbox mb-3">
            <input type="checkbox" className="custom-control-input" id="Donner"/>
            <label className="custom-control-label" for="Donner">Donner</label>
        </div>
        <div className="custom-control custom-checkbox mb-3">
            <input type="checkbox" className="custom-control-input" id="Cafe"/>
            <label className="custom-control-label" for="Cafe">Cafe</label>
        </div>
        <div className="custom-control custom-checkbox mb-3">
            <input type="checkbox" className="custom-control-input" id="Brunch"/>
            <label className="custom-control-label" for="Brunch">Brunch</label>
        </div>
        <div className="custom-control custom-checkbox mb-3">
            <input type="checkbox" className="custom-control-input" id="other"/>
            <label className="custom-control-label" for="other">Other</label>
        </div>
            </p>
        </AccordionSection>
        
    </>
  )
}

export default Categoryfilter


// Accordion Section Component
const AccordionSection = ({ title, index, activeIndex, toggleAccordion, children }) => {
    const isActive = index === activeIndex;
    
    return (
      <div className="accordion-section">
        <h3 className="border-bottom filter-title" onClick={() => toggleAccordion(index)}>
          {title}
        </h3>
        <div className={`accordion-content ${isActive ? 'open' : ''}`}>
          {isActive && children}
        </div>
      </div>
    );
};