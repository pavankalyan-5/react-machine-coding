import { useState } from 'react';
import { faqs } from '../data/data';
import './accordion.css';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    setActiveIndex(activeIndex == index ? null : index)
  }
  return (
    <div className="container">
      <h2>FAQ Accordion</h2>
      <div className="faq">
        {faqs.map((faq, index) => {
          return (
             <div key={index} className="faq-item">
               <div className={`faq-question ${activeIndex == index ? 'active': ''}`} onClick={() => handleClick(index)}>
                 {faq.question}
               </div>
               {(activeIndex == index) && <div className="faq-answer">{faq.answer}</div>}
             </div> 
          )
        })}
      </div>
    </div>
  );
}
