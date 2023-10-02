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
      <AccordionItem />
    </div>
  );
}

function AccordionItem() {
  return (
    <div className={`item`}>
      <p className="number">Number</p>
      <p className="title">Title</p>
      <p className="icon">+</p>
      <div className="content-box">Box</div>
    </div>
  );
}
