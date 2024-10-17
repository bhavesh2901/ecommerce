import React, { useEffect,  useState } from 'react';
import './Categoryfilter.css';
const Categoryfilter = ({categoarys , checkedItems ,setCheckedItems } ) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const toggleAccordion = (index) => {
        // If the clicked section is already active, close it by setting activeIndex to null
        setActiveIndex(index === activeIndex ? null : index);
    };

    const handleCheckboxChange = (item) => {
        setCheckedItems((prevCheckedItems) => {
            
          if (prevCheckedItems.includes(item)) {
            // If item is already checked, remove it from the array
      
            return prevCheckedItems.filter((i) => i !== item);
        
          } else {
            // If item is not checked, add it to the array
           
            return [...prevCheckedItems, item];
     
          }
        });
    
      };
    let [allcategory,setAllcategory] = useState();
    useEffect(() => {
        const fetchCategory = async () => {
          try {
            const response = await fetch('http://localhost:3000/api/countWithCategory');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setAllcategory(data);
          } catch (err) {
            console.error('Fetch error:', err);
          }
        };
        fetchCategory();
      }, []);
  return (
    <>
        <AccordionSection  
            title={"CATEGORY"}
            index={0} 
            activeIndex={activeIndex} 
            toggleAccordion={toggleAccordion}
        >
            <p>
            <div className="mb-30 filter-options">
            {allcategory && allcategory.length > 0 ? (
                allcategory.map((category, index) => (
                <div className="form-check mb-3 text-nowrap" key={index}>
                    <input type="checkbox"  checked={checkedItems.includes(category.category_name)} onChange={() => handleCheckboxChange(category.category_name)} name="category[]" value={category.category_name} className="form-check-input mx-2" id={category.category_name} />
                    <label className="form-check-labe" htmlFor={category.category_name}>{category.category_name}</label>
                    <div className='badge rounded-pill text-bg-success p-1 mx-2'>{category.TotalProduct}</div>
                </div>
                ))
                ) : (
                <p>No categories available</p>
            )}
            </div>
            </p>
        </AccordionSection>

        <AccordionSection 
            title="PRICE" 
            index={2} 
            activeIndex={activeIndex} 
            toggleAccordion={toggleAccordion}
        >
            <p>
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
    </>
  )
}

export default Categoryfilter


// Accordion Section Component
const AccordionSection = ({ title, index, activeIndex, toggleAccordion, children }) => {
    const isActive = index === activeIndex;
    
    return (
      <div className="accordion-section">
        <h6 className="border-bottom  shadow-sm p-1 fs-10" onClick={() => toggleAccordion(index)}>
          {title}
        </h6>
        <div className={`accordion-content ${isActive ? 'open' : ''}`}>
          {isActive && children}
        </div>
      </div>
    );
};