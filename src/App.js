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
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((faq, index) => {
        return (
          <AccordionItem
            curOpen={curOpen}
            onOpen={setCurOpen}
            number={index}
            title={faq.title}
          >
            {faq.text}
          </AccordionItem>
        );
      })}
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        number={7}
        title="Reusability is the Key"
      >
        <p>It allows react to make wonders</p>
        <ul>
          <li>Make it</li>
          <li>Reusable</li>
          <li>Once for all</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ number, title, text, curOpen, onOpen, children }) {
  const isOpen = curOpen === number;

  function handleClick() {
    onOpen(isOpen ? null : number);
  }

  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => handleClick()}
    >
      <p className="number">{number < 9 ? `0${number + 1}` : number}</p>
      <p className={`title`}>{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
