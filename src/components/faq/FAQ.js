import { useState } from "react";
import classes from "./FAQ.module.css";
import LinkItem from "./LinkItem";
import Card from "./Card";
import ChevronRight from "../icons/ChevronRight";

const DEFAULT_QUESTIONS = [
  {
    id: "FAQ1",
    heading: "How do I make a car insurance claim?",
    body: "If you’ve had an accident or your car has been stolen, phone 0800 227 787 with your registration and policy number to get assistance with your claim.\n\nTake your car to a reputable repairer and give them your claim number. They'll email us with photos and a quote to repair your car. Your car will be assessed to ensure quality repairs and costs are fair and reasonable.",
    active: true,
  },
  {
    id: "FAQ2",
    heading: "Who is the underwriter?",
    body: "Our Car Insurance is underwritten by Vero Insurance New Zealand Limited. You can find out about their Financial Strength Rating from their website.",
    active: false,
  },
  {
    id: "FAQ3",
    heading: "If I need to cancel my policy, can I get a refund?",
    body: "You may at any time cancel your policy by giving us notice in writing. If you request cancellation, your policy is not refundable unless cancelled within 15 days of the start of the period of insurance.",
    active: false,
  },
  {
    id: "FAQ4",
    heading: "I’ve moved house. How do I update my policy address?",
    body: "You can call us on 0800 227 787 and we’ll be happy to change the contact address we have for you.",
    active: false,
  },
  {
    id: "FAQ5",
    heading: "How can I make a premium payment by credit card?",
    body: "You can pay online directly to Vero with your credit or debit card. Please use your Customer PRN and policy number as the reference.",
    active: false,
  },
];

const FAQ = () => {
  const [questions, setQuestions] = useState(DEFAULT_QUESTIONS);
  const [selectedQuestion, setSelectedQuestion] = useState(
    DEFAULT_QUESTIONS[0]
  );

  const onSelectHandler = (selQ) => {
    setSelectedQuestion(selQ);
    const updatedList = questions.map((q) => {
      q.active = q.id === selQ.id;
      return q;
    });
    setQuestions(updatedList);
  };

  return (
    <section className={classes.container}>
      <div className={classes.parent}>
        <h2 className={classes.heading}>Frequently asked questions</h2>
        <p className={classes.body}>
          If you are looking for more information on any of our insurance
          products, or if you have a question that isn't answered below, please
          don't hesitate to contact us on the usual channels.
        </p>
        <div className={classes.group}>
          <ul className={classes.links}>
            {questions.map((question) => {
              return (
                <LinkItem question={question} onSelect={onSelectHandler} />
              );
            })}
          </ul>
          <Card
            heading={selectedQuestion.heading}
            body={selectedQuestion.body}
          />
        </div>
        <div className={classes.footer}>
          <span>Want to see our full insurance FAQ?</span>
          <button className={classes.button}>
            <span>Find it here</span>
            <ChevronRight color="#5EAAF6" size="xs" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
