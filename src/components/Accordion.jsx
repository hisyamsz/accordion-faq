import { useState } from 'react';
import AccordionItem from './AccordionItem';

function Accordion({ data }) {
  const [curOpen, setOnOpen] = useState(null);

  return (
    <div className="accordion">
      <h1>Frequently Asked Questions (FAQ)</h1>
      {data.map((faq, i) => (
        <AccordionItem
          key={i}
          className="title"
          curOpen={curOpen}
          onOpen={setOnOpen}
          number={i + 1}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
}

export default Accordion;
