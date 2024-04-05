function AccordionItem({ number, question, answer, curOpen, onOpen }) {
  const isOpen = number === curOpen;

  return (
    <div className={`item ${isOpen && 'open'}`} onClick={() => onOpen(isOpen ? null : number)}>
      <p className="number">{number > 10 ? number : `0${number}`}</p>
      <p className="title">{question}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>
      {isOpen && <div className="content-box">{answer}</div>}
    </div>
  );
}

export default AccordionItem;
