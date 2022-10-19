import React from 'react'
import H1tagMd from '../../typography/H1tagMd';
import Accordion from './Accordion';
import { Fragment } from 'react';

function FAQListHome(props) {
  
  const faqs = [{
    id: 'faq1',
    question: 'quesiton 1',
    answer: 'answer 1',
  },
  {
    id: 'faq2',
    question: 'quesiton 2',
    answer: 'answer 2',
  },
  {
    id:'faq3',
    question: 'quesiton 3',
    answer: 'answer 3',
  },{
    id:'faq4',
    question: 'quesiton 4',
    answer: 'answer 4',
  },
]
const faqList = faqs.map(
 faq=>(
  <Accordion 
  question = {faq.question}
answer = {faq.answer}
id={faq.id}
  />
 )
);

  return (
    <section className="faq-section">
    <div className="sec-box">
      {/* <div className="row">
        <div className="col-lg-12 text-center mb-5">
          <H1tagMd title={<Fragment>FAQ's</Fragment>} />
        </div>
      </div> */}
      <div className="row">
        <div className="col-lg-12">
          <div className="accordion" id="accordionExample">
            {faqList}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default FAQListHome