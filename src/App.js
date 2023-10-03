import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  return (
    <div className="App">
      <Accordion />
    </div>
  );
}

export default App;

function Accordion() {
  return (
    <div className="accordion">
      {faqs.map((faq, index) => {
        return (
          <AccordionItem number={index} title={faq.title} text={faq.text} />
        );
      })}
    </div>
  );
}

function AccordionItem({ number, title, text }) {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen((op) => !op);
  }

  return (
    <div className={`item ${open ? "open" : ""}`} onClick={() => handleClick()}>
      <p className="number">{number}</p>
      <p className={`title ${open ? "text" : ""}`}>{title}</p>
      <p className="icon">{open ? "-" : "+"}</p>
      {open && <div className="content-box">{text}</div>}
    </div>
  );
}
