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
      <Accordion data={faqs} />
    </div>
  );
}

export default App;

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((faq, index) => {
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
    setOpen((curr) => !curr);
  }

  return (
    <div className={`item ${open ? "open" : ""}`} onClick={() => handleClick()}>
      <p className="number">{number < 9 ? `0${number + 1}` : number}</p>
      <p className={`title`}>{title}</p>
      <p className="icon">{open ? "-" : "+"}</p>
      {open && <div className="content-box">{text}</div>}
    </div>
  );
}
